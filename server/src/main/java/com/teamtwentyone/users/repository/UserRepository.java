package com.teamtwentyone.users.repository;

import com.teamtwentyone.users.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email); // 이메일로 조회
    Optional<User> findByNickName(String nickName); // 닉네임으로 조회
//  Optional<User> findByPhoneNum(String phoneNum); // 전화번호로 조회 // 프론트 요청으로 휴대폰 번호 필드 제거
}
