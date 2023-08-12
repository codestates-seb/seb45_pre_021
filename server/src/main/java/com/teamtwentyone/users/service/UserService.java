package com.teamtwentyone.users.service;

import com.teamtwentyone.exception.BusinessLogicException;
import com.teamtwentyone.exception.ExceptionCode;
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
        verifyExistsEmail(user.getEmail()); // 이메일 중복검사 메서드
        verifyExistsNickName(user.getNickName()); // 닉네임 중복검사 메서드
        verifyExistsPhoneNum(user.getPhoneNum()); // 휴대폰번호 중복검사 메서드
        return repository.save(user);
    }

    public User findUser(Long userId) {
        return findVerifiedUser(userId); // 유저 검증 메서드(유저가 존재하지 않으면 예외처리)
    }

    public User updateUser(User user) {
        User findUser = findVerifiedUser(user.getUserId());
        // 현재 저장된 닉네임과 같다면 중복검사 하지 않음
        Optional.ofNullable(user.getNickName())
                .ifPresent(nickName -> {
                    if(!findUser.getNickName().equals(nickName)) {
                        verifyExistsNickName(nickName);
                    }
                    findUser.setNickName(nickName);
                });
        Optional.ofNullable(user.getPassword())
                .ifPresent(password -> findUser.setPassword(password));

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

    public void deleteUser(Long userId) {
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
}
