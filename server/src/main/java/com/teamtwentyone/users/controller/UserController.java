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
import javax.validation.constraints.Min;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
@Validated
public class UserController {
    private final UserMapper userMapper;
    private final QuestionsMapper questionsMapper;
    private final UserService service;

    public UserController(UserMapper userMapper, QuestionsMapper questionsMapper, UserService service) {
        this.userMapper = userMapper;
        this.questionsMapper = questionsMapper;
        this.service = service;
    }

    // 유저 가입 컨트롤러
    @PostMapping("/signup")
    public ResponseEntity postUser(@Valid @RequestBody UserDto.signup requestBody) {
        User newUser = userMapper.userPostToUser(requestBody);
        User createdUser = service.createUser(newUser);
        return ResponseEntity.status(HttpStatus.CREATED).body("signup success");
    }

    // 유저 정보 조회 컨트롤러
    @GetMapping("/mypage")
    public ResponseEntity getUser() {// @PathVariable("user-id") @Min(1) Long userId) {
        User user = service.findUser();
        return ResponseEntity.ok(userMapper.userToUserResponse(user));
    }

    // 유저가 작성한 게시글 전체 조회 컨트롤러
    @GetMapping("/mypage/questions")
    public ResponseEntity getUserQuestions(@Positive @RequestParam int page,
                                           @Positive @RequestParam int size) {
        Page<Question> pageQuestions = service.findUserQuestions(page - 1, size);
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
    @PatchMapping("/edit/{user-id}")
    public ResponseEntity patchUser(@PathVariable("user-id") @Min(1) Long userId,
                                    @Valid @RequestBody UserDto.Patch requestBody) {
        requestBody.setId(userId);
        User user = service.updateUser(userMapper.userPatchToUser(requestBody));

        return ResponseEntity.ok(userMapper.userToUserResponse(user)); // 수정된 유저 정보 반환
    }

    // 비밀번호 변경 컨트롤러
    @PatchMapping("/patch/password/{user-id}")
    public ResponseEntity patchPassword(@PathVariable("user-id") @Min(1) Long userId,
                                        @Valid @RequestBody UserDto.PatchPassword requestBody) {
        requestBody.setId(userId);
        service.updatePassword(userMapper.userPatchPasswordToUser(requestBody));

        return ResponseEntity.status(HttpStatus.OK).body("password Change Success");
    }

    // 유저 삭제 컨트롤러
    @DeleteMapping("/delete")
    public ResponseEntity deleteUser() {// @PathVariable("user-id") @Min(1) Long userId) {
        service.deleteUser();
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
