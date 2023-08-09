package com.teamtwentyone.users.controller;

import com.teamtwentyone.users.Dto.UserDto;

import com.teamtwentyone.users.entity.User;

import com.teamtwentyone.users.mapper.UserMapper;
import com.teamtwentyone.users.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("/users")
public class UserController {
    private final static String USER_URL = "/users";
    private final UserMapper mapper;
    private final UserService service;

    public UserController(UserMapper mapper, UserService service) {
        this.mapper = mapper;
        this.service = service;
    }

    @PostMapping("/signup")
    public ResponseEntity postUser(@RequestBody UserDto.Post requestBody) {
        User newUser = mapper.userPostToUser(requestBody);
        User createdUser = service.createUser(newUser);
        URI uri = URI.create(USER_URL + "/" + createdUser.getUserId());
        return ResponseEntity.created(uri).build();
    }

    @GetMapping("/{user-id}")
    public ResponseEntity getUser(@PathVariable("user-id") Long userId) {
        User user = service.findUser(userId);
        return ResponseEntity.ok(mapper.userToUserResponse(user));
    }

    @PatchMapping("/patch/{user-id}")
    public ResponseEntity patchUser(@PathVariable("user-id") Long userId,
                                    @RequestBody UserDto.Patch requestBody) {
        requestBody.setId(userId);
        User user = service.updateUser(mapper.userPatchToUser(requestBody));

        return ResponseEntity.ok(mapper.userToUserResponse(user));
    }
}
