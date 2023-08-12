package com.teamtwentyone.users.controller;

import com.teamtwentyone.users.Dto.UserDto;
import com.teamtwentyone.users.entity.User;
import com.teamtwentyone.users.mapper.UserMapper;
import com.teamtwentyone.users.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import java.net.URI;

@RestController
@RequestMapping("/users")
@Validated
public class UserController {
    private final static String USER_URL = "/users";
    private final UserMapper mapper;
    private final UserService service;

    public UserController(UserMapper mapper, UserService service) {
        this.mapper = mapper;
        this.service = service;
    }

    // 유저 가입 컨트롤러
    @PostMapping("/signup")
    public ResponseEntity postUser(@Valid @RequestBody UserDto.Post requestBody) {
        User newUser = mapper.userPostToUser(requestBody);
        User createdUser = service.createUser(newUser);
        URI uri = URI.create(USER_URL + "/" + createdUser.getUserId());
        return ResponseEntity.created(uri).build();
    }

    // 유저 정보 조회 컨트롤러
    @GetMapping("/{user-id}")
    public ResponseEntity getUser(@PathVariable("user-id") @Min(1) Long userId) {
        User user = service.findUser(userId);
        return ResponseEntity.ok(mapper.userToUserResponse(user));
    }

    // 유저 정보 수정 컨트롤러(email 제외)
    @PatchMapping("/patch/{user-id}")
    public ResponseEntity patchUser(@PathVariable("user-id") @Min(1) Long userId,
                                    @Valid @RequestBody UserDto.Patch requestBody) {
        requestBody.setId(userId);
        User user = service.updateUser(mapper.userPatchToUser(requestBody));

        return ResponseEntity.ok(mapper.userToUserResponse(user));
    }

    // 유저 삭제 컨트롤러
    @DeleteMapping("/delete/{user-id}")
    public ResponseEntity deleteUser(@PathVariable("user-id") @Min(1) Long userId) {
        service.deleteUser(userId);
        return ResponseEntity.noContent().build();
    }
}
