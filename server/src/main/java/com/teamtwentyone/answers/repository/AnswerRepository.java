package com.teamtwentyone.answers.repository;

import com.teamtwentyone.answers.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
    List<Answer> findByUserUserId(Long UserId);
}
