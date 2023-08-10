package com.teamtwentyone.users.service;

import com.teamtwentyone.users.entity.User;
import com.teamtwentyone.users.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public User createUser(User user) {
        return repository.save(user);
    }

    public User findUser(Long userId) {
        return findVerifiedUser(userId);
    }

    public User updateUser(User user) {
        User findUser = findVerifiedUser(user.getUserId());

        Optional.ofNullable(user.getPassword())
                .ifPresent(password -> findUser.setPassword(password));
        Optional.ofNullable(user.getNickName())
                .ifPresent(nickName -> findUser.setNickName(nickName));
        Optional.ofNullable(user.getPhoneNum())
                .ifPresent(phoneNum -> findUser.setPhoneNum(phoneNum));

        return repository.save(findUser);
    }

    public User findVerifiedUser(Long userId) {
        Optional<User> OptionalUser =
                repository.findById(userId);

        User findUser =
                OptionalUser.orElseThrow(() ->
                        new NullPointerException());

        return findUser;
    }
}
