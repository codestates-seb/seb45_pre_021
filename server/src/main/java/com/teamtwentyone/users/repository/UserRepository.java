package com.teamtwentyone.users.repository;

import com.teamtwentyone.users.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    Optional<User> findByNickName(String nickName);
    Optional<User> findByPhoneNum(String phoneNum);
}
