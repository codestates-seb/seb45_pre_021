package com.teamtwentyone.users.controller;

import com.teamtwentyone.users.Dto.UserDto;
import com.teamtwentyone.users.entity.User;
import com.teamtwentyone.users.mapper.UserMapper;
import com.teamtwentyone.users.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Min;

@RestController
@RequestMapping("/users")
@Validated
public class UserController {
    private final UserMapper mapper;
    private final UserService service;

    public UserController(UserMapper mapper, UserService service) {
        this.mapper = mapper;
        this.service = service;
    }

    // 유저 가입 컨트롤러
    @PostMapping("/signup")
    public ResponseEntity postUser(@Valid @RequestBody UserDto.signup requestBody) {
        User newUser = mapper.userPostToUser(requestBody);
        User createdUser = service.createUser(newUser);
        return ResponseEntity.status(HttpStatus.CREATED).body("signup success");
    }

    // 유저 정보 조회 컨트롤러
    @GetMapping("/{user-id}")
    public ResponseEntity getUser(@PathVariable("user-id") @Min(1) Long userId) {
        User user = service.findUser(userId);
        return ResponseEntity.ok(mapper.userToUserResponse(user));
    }

    // 유저 정보 수정 컨트롤러(닉네임, 휴대폰번호)
    @PatchMapping("/patch/{user-id}")
    public ResponseEntity patchUser(@PathVariable("user-id") @Min(1) Long userId,
                                    @Valid @RequestBody UserDto.Patch requestBody) {
        requestBody.setId(userId);
        User user = service.updateUser(mapper.userPatchToUser(requestBody));

        return ResponseEntity.ok(mapper.userToUserResponse(user)); // 수정된 유저 정보 반환
    }

    // 비밀번호 변경 컨트롤러
    @PatchMapping("/patch/password/{user-id}")
    public ResponseEntity patchPassword(@PathVariable("user-id") @Min(1) Long userId,
                                        @Valid @RequestBody UserDto.PatchPassword requestBody) {
        requestBody.setId(userId);
        service.updatePassword(mapper.userPatchPasswordToUser(requestBody));

        return ResponseEntity.status(HttpStatus.OK).body("password Change Success");
    }

    // 유저 삭제 컨트롤러
    @DeleteMapping("/delete/{user-id}")
    public ResponseEntity deleteUser(@PathVariable("user-id") @Min(1) Long userId) {
        service.deleteUser(userId);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("delete success");
    }
}
