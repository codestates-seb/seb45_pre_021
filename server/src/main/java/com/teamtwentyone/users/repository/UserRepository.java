package com.teamtwentyone.users.repository;

import com.teamtwentyone.users.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
