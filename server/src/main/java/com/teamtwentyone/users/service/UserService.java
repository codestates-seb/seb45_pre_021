package com.teamtwentyone.users.service;

import com.teamtwentyone.answers.entity.Answer;
import com.teamtwentyone.answers.repository.AnswerRepository;
import com.teamtwentyone.auth.dto.PrincipalDto;
import com.teamtwentyone.exception.BusinessLogicException;
import com.teamtwentyone.exception.ExceptionCode;
import com.teamtwentyone.auth.utils.CustomAuthorityUtils;
import com.teamtwentyone.questions.entity.Question;
import com.teamtwentyone.questions.repository.QuestionsRepository;
import com.teamtwentyone.users.entity.User;
import com.teamtwentyone.users.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {
    private final UserRepository repository;
    private final QuestionsRepository questionsRepository;
    private final AnswerRepository answerRepository;
    private final PasswordEncoder passwordEncoder; // 비밀번호 암호화를 위한 클래스
    private final CustomAuthorityUtils authorityUtils; // 권한 생성을 위한 클래스

    // 생성자 의존성 주입
    public UserService(UserRepository repository, QuestionsRepository questionsRepository, AnswerRepository answerRepository, PasswordEncoder passwordEncoder, CustomAuthorityUtils authorityUtils) {
        this.repository = repository;
        this.questionsRepository = questionsRepository;
        this.answerRepository = answerRepository;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
    }

    // 회원 가입
    public User createUser(User user) {
        verifyExistsEmail(user.getEmail()); // 이메일 중복검사 메서드
        verifyExistsNickName(user.getNickName()); // 닉네임 중복검사 메서드
        user.setImageId(randomImageId()); // 랜덤 이미지 id 생성
//        verifyExistsPhoneNum(user.getPhoneNum()); // 프론트 요청으로 사용자 휴대폰 번호 관련 기능 삭제함
        user.setPassword(passwordEncoder.encode(user.getPassword())); // 비밀번호 암호화
        List<String> roles = authorityUtils.createRoles(user.getEmail()); // 권한 생성
        user.setRoles(roles); // 권한 설정
        user.setAllCount(0); // 전체 질문 수 0으로 초기화
        user.setProgressCount(0); // 진행중인 질문 수 0으로 초기화
        user.setCompleteCount(0); // 완료한 질문 수 0으로 초기화
        user.setAnswerCount(0); // 답변 수 0으로 초기화
        return repository.save(user);
    }

    // 유저 정보 조회
    public User findUser() {
        Long userId = getLoginUserId(); // 로그인한 유저의 id를 가져옴
        User finduser = findVerifiedUser(userId); // 유저 검증 메서드(유저가 존재하지 않으면 예외처리)

        // 유저가 작성한 전체 게시글 수
        List<Question> allQuestions = questionsRepository.findByUserUserId(finduser.getUserId());
        finduser.setAllCount(allQuestions.size());

        // 유저가 작성한 진행중 상태의 게시글 수
        List<Question> progressQuestions = allQuestions.stream()
                .filter(question -> question != null && question.getStatus() == Question.Status.PROGRESS)
                .collect(Collectors.toList());
        finduser.setProgressCount(progressQuestions.size());

        // 유저가 작성한 완료 상태의 게시글 수
        List<Question> completeQuestions = allQuestions.stream()
                .filter(question -> question != null && question.getStatus() == Question.Status.COMPLETE)
                .collect(Collectors.toList());
        finduser.setCompleteCount(completeQuestions.size());

        // 유저가 작성한 답변 수
        List<Answer> allAnswers = answerRepository.findByUserUserId(finduser.getUserId());
        finduser.setAnswerCount(allAnswers.size());

        return finduser;
    }

    // 유저가 작성한 게시글 전체 조회
    public Page<Question> findUserQuestions(int page, int size) {
        Long userId = getLoginUserId(); // 로그인한 유저의 id를 가져옴
        User finduser = findVerifiedUser(userId); // 유저 검증 메서드(유저가 존재하지 않으면 예외처리)
        Page<Question> allQuestions = // 유저가 작성한 게시글 전체 조회
                questionsRepository.findByUserUserId(finduser.getUserId(), PageRequest.of(page, size, Sort.by("questionId").descending()));
        return allQuestions;
    }

    // 유저가 작성한 게시글 중 진행중인 게시글 조회
    public Page<Question> findUserProgressQuestions(int page, int size) {
        Long userId = getLoginUserId(); // 로그인한 유저의 id를 가져옴
        User findUser = findVerifiedUser(userId); // 유저 검증 메서드(유저가 존재하지 않으면 예외처리)
        Page<Question> progressQuestions = // 유저가 작성한 게시글 중 진행중인 게시글 조회
                questionsRepository.findByUserUserIdAndStatus(findUser.getUserId(), Question.Status.PROGRESS, PageRequest.of(page, size, Sort.by("questionId").descending()));
        return progressQuestions;
    }

    // 유저가 작성한 게시글 중 완료된 게시글 조회
    public Page<Question> findUserCompleteQuestions(int page, int size) {
        Long userId = getLoginUserId(); // 로그인한 유저의 id를 가져옴
        User findUser = findVerifiedUser(userId); // 유저 검증 메서드(유저가 존재하지 않으면 예외처리)
        Page<Question> completeQuestions = // 유저가 작성한 게시글 중 완료된 게시글 조회
                questionsRepository.findByUserUserIdAndStatus(findUser.getUserId(), Question.Status.COMPLETE, PageRequest.of(page, size, Sort.by("questionId").descending()));
        return completeQuestions;
    }

    // 유저가 작성한 답변이 포함된 게시글 조회
    public Page<Question> findUserAnswers(int page, int size) {
        Long userId = getLoginUserId(); // 로그인한 유저의 id를 가져옴
        User findUser = findVerifiedUser(userId); // 유저 검증 메서드(유저가 존재하지 않으면 예외처리)
        Page<Question> answers = // 유저가 작성한 답변이 포함된 게시글 조회
                questionsRepository.findByAnswersUserUserId(findUser.getUserId(), PageRequest.of(page, size, Sort.by("questionId").descending()));
        return answers;
    }

    // 유저 정보 수정
    public User updateUser(User user) {
        Long userId = getLoginUserId(); // 로그인한 유저의 id를 가져옴
        User findUser = findVerifiedUser(userId); // 유저 검증 메서드(유저가 존재하지 않으면 예외처리)
        // 현재 저장된 닉네임과 같다면 중복검사 하지 않음
        Optional.ofNullable(user.getNickName())
                .ifPresent(nickName -> {
                    if(!findUser.getNickName().equals(nickName)) {
                        verifyExistsNickName(nickName);
                    }
                    findUser.setNickName(nickName);
                    // question 의 writerNickName update
                    List<Question> questions = questionsRepository.findByUserUserId(findUser.getUserId());
                    questions.forEach(question -> {
                        question.setWriterNickName(nickName);
                        questionsRepository.save(question);});
                    // answers 의 writerNickName update
                    List<Answer> answers = answerRepository.findByUserUserId(findUser.getUserId());
                    answers.forEach(answer -> {
                        answer.setWriterNickName(nickName);
                        answerRepository.save(answer);});
                });
        // 현재 저장된 이미지 id와 같다면 중복검사 하지 않음
        Optional.ofNullable(user.getImageId())
                .ifPresent(imageId -> {
                    if(!(findUser.getImageId() == imageId)) {
                        findUser.setImageId(imageId);
                    }
                    // answers 의 writerImageId update
                    List<Answer> answers = answerRepository.findByUserUserId(findUser.getUserId());
                    answers.forEach(answer -> {
                        answer.setWriterImageId(imageId);
                        answerRepository.save(answer);});
                });

        /*
        * 프론트 요청으로 사용자 휴대폰 번호 관련 기능 삭제
        */
//        // 현재 저장된 휴대폰번호와 같다면 중복검사 하지 않음
//        Optional.ofNullable(user.getPhoneNum())
//                .ifPresent(phoneNum -> {
//                    if (!findUser.getPhoneNum().equals(phoneNum)) {
//                        verifyExistsPhoneNum(phoneNum);
//                    }
//                    findUser.setPhoneNum(phoneNum);
//                });
        return repository.save(findUser);
    }

    // 비밀번호 변경
    public void updatePassword(User user) {
        Long userId = getLoginUserId(); // 로그인한 유저의 id를 가져옴
        User findUser = findVerifiedUser(userId); // 유저 검증 메서드(유저가 존재하지 않으면 예외처리)

        findUser.setPassword(passwordEncoder.encode(user.getPassword()));
        repository.save(findUser);
    }

    // 유저 삭제
    public void deleteUser() {
        Long userId = getLoginUserId(); // 로그인한 유저의 id를 가져옴
        User findUser = findVerifiedUser(userId);
        List<Answer> answers = answerRepository.findByUserUserId(findUser.getUserId());
        List<Question> questions = questionsRepository.findByUserUserId(findUser.getUserId());
        answers.forEach(answer -> answerRepository.delete(answer));
        questions.forEach(question -> questionsRepository.delete(question));

        repository.delete(findUser);
    }

    // 유저 검증 메서드(유저가 존재하지 않으면 예외처리)
    public User findVerifiedUser(Long userId) {
        Optional<User> OptionalUser =
                repository.findById(userId);

        User findUser =
                OptionalUser.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        return findUser;
    }

    // 이메일 중복검사 메서드
    private void verifyExistsEmail(String email) {
        Optional<User> OptionalUser =
                repository.findByEmail(email);

        OptionalUser.ifPresent(user -> {
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS_EMAIL);
        });
    }

    // 닉네임 중복검사 메서드
    private void verifyExistsNickName(String nickName) {
        Optional<User> OptionalUser =
                repository.findByNickName(nickName);

        OptionalUser.ifPresent(user -> {
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS_NICKNAME);
        });
    }

    // 랜덤 이미지 id 생성 메서드(1 ~ 6)
    public int randomImageId() {
        int imageId = (int) (Math.random() * 6) + 1;
        return imageId;
    }
        /*
        * 프론트 요청으로 사용자 휴대폰 번호 관련 기능 삭제
         */
//    // 휴대폰번호 중복검사 메서드
//    private void verifyExistsPhoneNum(String phoneNum) {
//        Optional<User> OptionalUser =
//                repository.findByPhoneNum(phoneNum);
//
//        OptionalUser.ifPresent(user -> {
//            throw new BusinessLogicException(ExceptionCode.USER_EXISTS_PHONENUM);
//        });
//    }

      /*
      * 미사용 메서드 주석처리(필요한 서비스 로직에서 직접 구현)
      * */
//    public void compareIdAndLoginId(Long id) { // id와 로그인한 유저의 id를 비교하는 메서드
//        if (!id.equals(getLoginUserId())) // id와 로그인한 유저의 id가 다르다면
//            throw new BusinessLogicException(ExceptionCode.NOT_RESOURCE_OWNER); // 예외처리
//    }

    public Long getLoginUserId() { // 로그인한 유저의 id를 가져오는 메서드
        Long id = null;
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication(); // SecurityContextHolder에서 인증된 객체를 가져옴
        if (authentication != null && authentication.getPrincipal() instanceof PrincipalDto) { // 인증된 객체가 null이 아니고 PrincipalDto의 인스턴스라면
            PrincipalDto principal = (PrincipalDto) authentication.getPrincipal(); // PrincipalDto로 형변환
            id = principal.getId(); // id를 가져옴
        }

        return id;
    }
}