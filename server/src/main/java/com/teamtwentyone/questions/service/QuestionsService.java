package com.teamtwentyone.questions.service;

import com.teamtwentyone.answers.entity.Answer;
import com.teamtwentyone.answers.repository.AnswerRepository;
import com.teamtwentyone.exception.BusinessLogicException;
import com.teamtwentyone.exception.ExceptionCode;
import com.teamtwentyone.questions.entity.Question;
import com.teamtwentyone.questions.repository.QuestionsRepository;
import com.teamtwentyone.users.entity.User;
import com.teamtwentyone.users.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionsService {
    private final QuestionsRepository questionsRepository;
    private final AnswerRepository answerRepository;
    private final UserService UserService;

    public QuestionsService(QuestionsRepository questionsRepository, AnswerRepository answerRepository, com.teamtwentyone.users.service.UserService userService) {
        this.questionsRepository = questionsRepository;
        this.answerRepository = answerRepository;
        UserService = userService;
    }

    // 게시글 등록
    public Question createQuestion(Question question) {
        question.setStatus(Question.Status.PROGRESS);
        Long getUserId = UserService.getLoginUserId(); // 로그인한 유저의 id를 가져옴
        User user = UserService.findVerifiedUser(getUserId); // 유저 검증 메서드(유저가 존재하지 않으면 예외처리)
        question.setWriterNickName(user.getNickName()); // 게시글 작성자 닉네임 설정
        question.setUser(user); // 게시글 작성자 설정
        question.setAnswerCount(0); // 답변 수 0으로 초기화
        questionsRepository.save(question);
        return question;
    }

    // 게시글 수정(제목, 본문)
    public Question editQuestion(Question question) {
        Question findQuestion = findVerifiedQuestion(question.getQuestionId()); // 게시글 검증 메서드(게시글이 존재하지 않으면 예외처리)

        if(!findQuestion.getStatus().equals(Question.Status.PROGRESS)) { // 진행중인 게시글만 수정 가능
            throw new BusinessLogicException(ExceptionCode.BOARD_NOT_EDITABLE); // 수정 불가능 예외처리
        }

        if(!findQuestion.getUser().getUserId().equals(UserService.getLoginUserId())) { // 게시글 작성자만 수정 가능
            throw new BusinessLogicException(ExceptionCode.NOT_RESOURCE_OWNER); // 수정 불가능 예외처리
        }

        if(question.getTitle() != null) { // 제목이 null 이 아니면 제목 변경
            findQuestion.setTitle(question.getTitle());
        }
        if(question.getContent() != null) { // 내용이 null 이 아니면 내용 변경
            findQuestion.setContent(question.getContent());
        }

        questionsRepository.save(findQuestion); // 수정된 게시글 저장

        return findQuestion; // 수정된 게시글 반환
    }

    // 게시글 상태 변경
    public Question editQuestionStatus(Long questionId, Long answerId) {
        Question findQuestion = findVerifiedQuestion(questionId); // 게시글 검증 메서드(게시글이 존재하지 않으면 예외처리)
        Answer findAnswer = findQuestion.getAnswers().stream()
                .filter(answer -> answer.getAnswerId().equals(answerId))
                .findFirst()
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND)); // 답변 검증 메서드(답변이 존재하지 않으면 예외처리)

        if(!findQuestion.getStatus().equals(Question.Status.PROGRESS)) { // 진행중인 게시글만 수정 가능
            throw new BusinessLogicException(ExceptionCode.BOARD_NOT_EDITABLE); // 수정 불가능 예외처리
        }

        if(!findQuestion.getUser().getUserId().equals(UserService.getLoginUserId())) { // 게시글 작성자만 상태 변경 가능
            throw new BusinessLogicException(ExceptionCode.NOT_RESOURCE_OWNER); // 상태 변경 불가능 예외처리
        }

        // 답변이 없으면 상태 변경 불가능
        if(findQuestion.getAnswers().size() == 0) {
            throw new BusinessLogicException(ExceptionCode.BOARD_NOT_EDITABLE); // 상태 변경 불가능 예외처리
        }

        findQuestion.setStatus(Question.Status.COMPLETE); // 상태 변경
        findAnswer.setSelected(true); // 답변 채택 여부 변경
        questionsRepository.save(findQuestion); // 변경된 상태 저장
        answerRepository.save(findAnswer); // 변경된 답변 저장
        return findQuestion; // 변경된 상태 반환
    }

    // 게시글 1개 조회
    public Question findQuestion(Long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId); // 게시글 검증 메서드(게시글이 존재하지 않으면 예외처리)
        return findQuestion;
    }

    // 게시글 전부 조회
    public Page<Question> findAllQuestion(int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size, Sort.by("questionId").descending());
        return questionsRepository.findAll(pageRequest);
    }

    // 진행중인 게시글 전부 조회
    public Page<Question> findProgressQuestion(int i, int size) {
        PageRequest pageRequest = PageRequest.of(i, size, Sort.by("questionId").descending());
        return questionsRepository.findByStatus(Question.Status.PROGRESS, pageRequest);
    }

    // 완료된 게시글 전부 조회
    public Page<Question> findCompleteQuestion(int i, int size) {
        PageRequest pageRequest = PageRequest.of(i, size, Sort.by("questionId").descending());
        return questionsRepository.findByStatus(Question.Status.COMPLETE, pageRequest);
    }

    // 게시글 검색(제목, 본문)
    public Page<Question> searchQuestion(int i, int size, String keyword) {
        PageRequest pageRequest = PageRequest.of(i, size, Sort.by("questionId").descending());
        return questionsRepository.findByTitleContainingOrContentContaining(keyword, keyword, pageRequest);
    }

    // 게시글 검색(제목)
    public Page<Question> searchQuestionByTitle(int i, int size, String keyword) {
        PageRequest pageRequest = PageRequest.of(i, size, Sort.by("questionId").descending());
        return questionsRepository.findByTitleContaining(keyword, pageRequest);
    }

    // 게시글 검색(본문)
    public Page<Question> searchQuestionByContent(int i, int size, String keyword) {
        PageRequest pageRequest = PageRequest.of(i, size, Sort.by("questionId").descending());
        return questionsRepository.findByContentContaining(keyword, pageRequest);
    }

    // 게시글 검색(작성자)
    public Page<Question> searchQuestionByWriter(int i, int size, String keyword) {
        PageRequest pageRequest = PageRequest.of(i, size, Sort.by("questionId").descending());
        return questionsRepository.findByWriterNickNameContaining(keyword, pageRequest);
    }

    // 게시글 검색(답변)
    public Page<Question> searchQuestionByAnswer(int i, int size, String keyword) {
        PageRequest pageRequest = PageRequest.of(i, size, Sort.by("questionId").descending());
        return questionsRepository.findByAnswersContentContaining(keyword, pageRequest);
    }

    // 게시글 삭제
    public void deleteQuestion(Long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId); // 게시글 찾기(게시글이 존재하지 않으면 예외처리)

        if(!findQuestion.getStatus().equals(Question.Status.PROGRESS)) { // 진행중인 게시글만 삭제 가능
            throw new BusinessLogicException(ExceptionCode.BOARD_NOT_DELETE); // 삭제 불가능 예외처리
        }

        if(!findQuestion.getUser().getUserId().equals(UserService.getLoginUserId())) { // 게시글 작성자만 삭제 가능
            throw new BusinessLogicException(ExceptionCode.NOT_RESOURCE_OWNER); // 삭제 불가능 예외처리
        }

        questionsRepository.delete(findQuestion); // 게시글 삭제
    }

    // 게시글 검증 메서드
    public Question findVerifiedQuestion(Long questionId) {
        return questionsRepository.findById(questionId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.BOARD_NOT_FOUND));
    }
}
