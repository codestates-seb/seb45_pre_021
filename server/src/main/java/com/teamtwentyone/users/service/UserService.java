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
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

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
        verifyExistsPhoneNum(user.getPhoneNum()); // 휴대폰번호 중복검사 메서드
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
        // 유저가 작성한 게시글의 수
        List<Question> allQuestions = questionsRepository.findByWriterNickNameContaining(finduser.getNickName());
        finduser.setAllCount(allQuestions.size());

        List<Question> progressQuestions = allQuestions.stream()
                .filter(question -> question != null && question.getStatus() == Question.Status.PROGRESS)
                .collect(Collectors.toList());
        finduser.setProgressCount(progressQuestions.size());

        List<Question> completeQuestions = allQuestions.stream()
                .filter(question -> question != null && question.getStatus() == Question.Status.COMPLETE)
                .collect(Collectors.toList());
        finduser.setCompleteCount(completeQuestions.size());

        List<Answer> allAnswers = answerRepository.findByWriterNickNameContaining(finduser.getNickName());
        finduser.setAnswerCount(allAnswers.size());
        return finduser;
    }

    // 유저가 작성한 게시글 전체 조회
    public Page<Question> findUserQuestions(int page, int size) {
        Long userId = getLoginUserId(); // 로그인한 유저의 id를 가져옴
        User finduser = findVerifiedUser(userId); // 유저 검증 메서드(유저가 존재하지 않으면 예외처리)
        Page<Question> allQuestions =
                questionsRepository.findByWriterNickNameContaining(finduser.getNickName(), PageRequest.of(page, size, Sort.by("questionId").descending()));
        return allQuestions;
    }

    // 유저가 작성한 게시글 중 진행중인 게시글 조회
    public Page<Question> findUserProgressQuestions(int page, int size) {
        Long userId = getLoginUserId(); // 로그인한 유저의 id를 가져옴
        User finduser = findVerifiedUser(userId); // 유저 검증 메서드(유저가 존재하지 않으면 예외처리)
        Page<Question> progressQuestions =
                questionsRepository.findByWriterNickNameContainingAndStatus(finduser.getNickName(), Question.Status.PROGRESS, PageRequest.of(page, size, Sort.by("questionId").descending()));
        return progressQuestions;
    }

    // 유저가 작성한 게시글 중 완료된 게시글 조회
    public Page<Question> findUserCompleteQuestions(int page, int size) {
        Long userId = getLoginUserId(); // 로그인한 유저의 id를 가져옴
        User finduser = findVerifiedUser(userId); // 유저 검증 메서드(유저가 존재하지 않으면 예외처리)
        Page<Question> completeQuestions =
                questionsRepository.findByWriterNickNameContainingAndStatus(finduser.getNickName(), Question.Status.COMPLETE, PageRequest.of(page, size, Sort.by("questionId").descending()));
        return completeQuestions;
    }

    // 유저가 작성한 답변이 포함된 게시글 조회
    public Page<Question> findUserAnswers(int page, int size) {
        Long userId = getLoginUserId(); // 로그인한 유저의 id를 가져옴
        User finduser = findVerifiedUser(userId); // 유저 검증 메서드(유저가 존재하지 않으면 예외처리)
        Page<Question> answers =
                questionsRepository.findByAnswersWriterNickNameContaining(finduser.getNickName(), PageRequest.of(page, size, Sort.by("questionId").descending()));
        return answers;
    }

    // 유저 정보 수정
    public User updateUser(User user) {
        User findUser = findVerifiedUser(user.getUserId());
        compareIdAndLoginId(user.getUserId());
        // 현재 저장된 닉네임과 같다면 중복검사 하지 않음
        Optional.ofNullable(user.getNickName())
                .ifPresent(nickName -> {
                    if(!findUser.getNickName().equals(nickName)) {
                        verifyExistsNickName(nickName);
                    }
                    findUser.setNickName(nickName);
                });

        // 현재 저장된 휴대폰번호와 같다면 중복검사 하지 않음
        Optional.ofNullable(user.getPhoneNum())
                .ifPresent(phoneNum -> {
                    if (!findUser.getPhoneNum().equals(phoneNum)) {
                        verifyExistsPhoneNum(phoneNum);
                    }
                    findUser.setPhoneNum(phoneNum);
                });
        return repository.save(findUser);
    }

    // 비밀번호 변경
    public void updatePassword(User user) {
        User findUser = findVerifiedUser(user.getUserId());
        compareIdAndLoginId(user.getUserId());

        findUser.setPassword(passwordEncoder.encode(user.getPassword()));
        repository.save(findUser);
    }

    // 유저 삭제
    public void deleteUser() {
        Long userId = getLoginUserId(); // 로그인한 유저의 id를 가져옴
        User findUser = findVerifiedUser(userId);
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

    // 휴대폰번호 중복검사 메서드
    private void verifyExistsPhoneNum(String phoneNum) {
        Optional<User> OptionalUser =
                repository.findByPhoneNum(phoneNum);

        OptionalUser.ifPresent(user -> {
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS_PHONENUM);
        });
    }

    public void compareIdAndLoginId(Long id) { // id와 로그인한 유저의 id를 비교하는 메서드
        if (!id.equals(getLoginUserId())) // id와 로그인한 유저의 id가 다르다면
            throw new BusinessLogicException(ExceptionCode.NOT_RESOURCE_OWNER); // 예외처리
    }

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