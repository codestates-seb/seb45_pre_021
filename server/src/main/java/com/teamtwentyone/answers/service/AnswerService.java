package com.teamtwentyone.answers.service;

import com.teamtwentyone.answers.entity.Answer;
import com.teamtwentyone.answers.repository.AnswerRepository;
import com.teamtwentyone.exception.BusinessLogicException;
import com.teamtwentyone.exception.ExceptionCode;
import com.teamtwentyone.questions.entity.Question;
import com.teamtwentyone.questions.service.QuestionsService;
import com.teamtwentyone.users.entity.User;
import com.teamtwentyone.users.service.UserService;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;

    private final QuestionsService questionsService;

    private final UserService UserService;

    public AnswerService(AnswerRepository answerRepository, QuestionsService questionsService, UserService userService) {
        this.answerRepository = answerRepository;
        this.questionsService = questionsService;
        UserService = userService;
    }

    // 답변 저장
    public Answer createAnswer(Answer answer, Long questionId) {
        answer.setSelected(false); // 답변 선택 여부 false 로 초기화
        Long getUserId = UserService.getLoginUserId(); // 로그인한 유저의 id를 가져옴
        User user = UserService.findVerifiedUser(getUserId); // 유저 검증 메서드(유저가 존재하지 않으면 예외처리)
        Question question = questionsService.findVerifiedQuestion(questionId); // 질문 검증 메서드(질문이 존재하지 않으면 예외처리)

        if(!question.getStatus().equals(Question.Status.PROGRESS)) { // 진행중인 게시글만 답변 가능
            throw new BusinessLogicException(ExceptionCode.BOARD_NOT_EDITABLE); // 답변 불가능 예외처리
        }

        if(getUserId.equals(question.getUser().getUserId())) { // 질문 작성자는 답변 불가능
            throw new BusinessLogicException(ExceptionCode.ANSWER_ADD_IMPOSSIBLE1); // 답변 불가능 예외처리
        }

        question.getAnswers().stream() // 이미 답변이 달려있는 질문은 답변 불가능
                .filter(Objects::nonNull) // null 이 아닌 답변만 필터링
                .filter(answer1 -> answer1.getUser().getUserId().equals(getUserId)) // 로그인한 유저가 이미 답변을 달았는지 확인
                .findAny() // 하나라도 존재하면
                .ifPresent(answer1 -> { // 답변 불가능 예외처리
                    throw new BusinessLogicException(ExceptionCode.ANSWER_ADD_IMPOSSIBLE2);
                });

        answer.setWriterNickName(user.getNickName()); // 답변 작성자 닉네임 설정
        answer.setUser(user); // 답변 작성자 설정
        answer.setQuestion(question); // 답변이 달릴 질문 설정
        question.setAnswerCount(question.getAnswerCount() + 1); // 질문의 답변 수 1 증가
        answerRepository.save(answer);
        return answer;
    }

    // 답변 수정
    public Answer editAnswer(Answer answer, Long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId); // 답변 검증 메서드(답변이 존재하지 않으면 예외처리)
        Question findQuestion = questionsService.findQuestion(findAnswer.getQuestion().getQuestionId()); // 답변이 달린 질문 검증 메서드(질문이 존재하지 않으면 예외처리)

        if(!findQuestion.getStatus().equals(Question.Status.PROGRESS)) { // 진행중인 게시글만 답변 가능
            throw new BusinessLogicException(ExceptionCode.BOARD_NOT_EDITABLE); // 답변 불가능 예외처리
        }

        if(!findAnswer.getUser().getUserId().equals(UserService.getLoginUserId())) { // 답변 작성자만 수정 가능
            throw new BusinessLogicException(ExceptionCode.NOT_RESOURCE_OWNER); // 수정 불가능 예외처리
        }

        if(answer.getContent() == null) { // 내용이 null 이 아니면 내용 변경
            throw new BusinessLogicException(ExceptionCode.INPUT_ANSWER); // 내용이 null 이면 예외처리
        } else { // 내용이 null 이 아니면 내용 변경
            findAnswer.setContent(answer.getContent()); // 내용 변경
        }

        answerRepository.save(findAnswer); // 수정된 답변 저장

        return findAnswer; // 수정된 답변 반환
    }

    // 답변 삭제
    public void deleteAnswer(Long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId); // 답변 검증 메서드(답변이 존재하지 않으면 예외처리)
        Question findQuestion = questionsService.findQuestion(findAnswer.getQuestion().getQuestionId()); // 답변이 달린 질문 검증 메서드(질문이 존재하지 않으면 예외처리)

        if(!findQuestion.getStatus().equals(Question.Status.PROGRESS)) { // 진행중인 게시글 답변 삭제 가능
            throw new BusinessLogicException(ExceptionCode.ANSWER_NOT_DELETE); // 답변 불가능 예외처리
        }

        if(!findAnswer.getUser().getUserId().equals(UserService.getLoginUserId())) { // 답변 작성자만 삭제 가능
            throw new BusinessLogicException(ExceptionCode.NOT_RESOURCE_OWNER); // 삭제 불가능 예외처리
        }

        findQuestion.setAnswerCount(findQuestion.getAnswerCount() - 1); // 질문의 답변 수 1 증가

        answerRepository.delete(findAnswer); // 답변 삭제
    }

    private Answer findVerifiedAnswer(Long answerId) {
        return answerRepository.findById(answerId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
    }
}
