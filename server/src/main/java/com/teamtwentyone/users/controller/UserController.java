package com.teamtwentyone.users.controller;

import com.teamtwentyone.dto.MultiResponseDto;
import com.teamtwentyone.questions.entity.Question;
import com.teamtwentyone.questions.mapper.QuestionsMapper;
import com.teamtwentyone.users.Dto.UserDto;
import com.teamtwentyone.users.entity.User;
import com.teamtwentyone.users.mapper.UserMapper;
import com.teamtwentyone.users.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@Validated
@RestController
@RequestMapping("/users")
public class UserController {
    private final UserMapper userMapper;
    private final QuestionsMapper questionsMapper;
    private final UserService service;

    // 생성자 의존성 주입
    public UserController(UserMapper userMapper, QuestionsMapper questionsMapper, UserService service) {
        this.userMapper = userMapper;
        this.questionsMapper = questionsMapper;
        this.service = service;
    }

    // 유저 가입 컨트롤러
    @PostMapping("/signup")
    public ResponseEntity postUser(@Valid @RequestBody UserDto.signup requestBody) {
        User newUser = userMapper.userPostToUser(requestBody); // PostDto -> Entity
        User createdUser = service.createUser(newUser); // 유저 가입 메서드 호출
        return ResponseEntity.status(HttpStatus.CREATED).body("signup success"); // 가입 성공 메시지 반환
    }

    // 유저 정보 조회 컨트롤러
    @GetMapping("/mypage")
    public ResponseEntity getUser() {// @PathVariable("user-id") @Min(1) Long userId) {
        User user = service.findUser(); // 유저 조회 메서드 호출
        return ResponseEntity.ok(userMapper.userToUserResponse(user)); // 조회된 유저 정보 반환
    }

    // 유저가 작성한 게시글 전체 조회 컨트롤러
    @GetMapping("/mypage/questions")
    public ResponseEntity getUserQuestions(@Positive @RequestParam int page,
                                           @Positive @RequestParam int size) {
        Page<Question> pageQuestions = service.findUserQuestions(page - 1, size); // 유저가 작성한 게시글 전체 조회 메서드 호출
        List<Question> questions = pageQuestions.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(questionsMapper.questionsToQuestionResponses(questions), pageQuestions), HttpStatus.OK);
    }

    // 유저가 작성한 게시글 중 진행중인 게시글 조회 컨트롤러
    @GetMapping("/mypage/progress")
    public ResponseEntity getUserProgressQuestions(@Positive @RequestParam int page,
                                                   @Positive @RequestParam int size) {
        Page<Question> pageQuestions = service.findUserProgressQuestions(page - 1, size);
        List<Question> questions = pageQuestions.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(questionsMapper.questionsToQuestionResponses(questions), pageQuestions), HttpStatus.OK);
    }

    // 유저가 작성한 게시글 중 완료된 게시글 조회 컨트롤러
    @GetMapping("/mypage/complete")
    public ResponseEntity getUserCompleteQuestions(@Positive @RequestParam int page,
                                                   @Positive @RequestParam int size) {
        Page<Question> pageQuestions = service.findUserCompleteQuestions(page - 1, size);
        List<Question> questions = pageQuestions.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(questionsMapper.questionsToQuestionResponses(questions), pageQuestions), HttpStatus.OK);
    }

    // 유저가 작성한 답변이 포함된 게시글 조회 컨트롤러
    @GetMapping("/mypage/answers")
    public ResponseEntity getUserAnswers(@Positive @RequestParam int page,
                                         @Positive @RequestParam int size) {
        Page<Question> pageQuestions = service.findUserAnswers(page - 1, size);
        List<Question> questions = pageQuestions.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(questionsMapper.questionsToQuestionResponses(questions), pageQuestions), HttpStatus.OK);
    }

    // 유저 정보 수정 컨트롤러(닉네임, 휴대폰번호)
    @PatchMapping("/mypage/edit-info")
    public ResponseEntity patchUser(// @PathVariable("user-id") @Min(1) Long userId, // userId는 1이상의 값만 허용
                                    @Valid @RequestBody UserDto.Patch requestBody) {
        // requestBody.setId(userId);
        service.updateUser(userMapper.userPatchToUser(requestBody)); // 유저 정보 수정 메서드 호출

        return ResponseEntity.status(HttpStatus.OK).body("User Info Update Success"); // 수정된 유저 정보 반환
    }

    // 비밀번호 변경 컨트롤러
    @PatchMapping("/mypage/edit-password")
    public ResponseEntity patchPassword(// @PathVariable("user-id") @Min(1) Long userId,
                                        @Valid @RequestBody UserDto.PatchPassword requestBody) {
        // requestBody.setId(userId);
        service.updatePassword(userMapper.userPatchPasswordToUser(requestBody)); // 비밀번호 변경 메서드 호출

        return ResponseEntity.status(HttpStatus.OK).body("password Change Success"); // 비밀번호 변경 성공 메시지 반환
    }

    // 유저 삭제 컨트롤러
    @DeleteMapping("/mypage/delete")
    public ResponseEntity deleteUser() {// @PathVariable("user-id") @Min(1) Long userId) {
        service.deleteUser(); // 유저 삭제 메서드 호출
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
