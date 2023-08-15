package com.teamtwentyone.questions.repository;

import com.teamtwentyone.questions.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionsRepository extends JpaRepository<Question, Long> {

    Page<Question> findByStatus(Question.Status status, PageRequest pageRequest);

    Page<Question> findByTitleContainingOrContentContaining(String keyword, String keyword1, PageRequest pageRequest);

    Page<Question> findByTitleContaining(String keyword, PageRequest pageRequest);

    Page<Question> findByContentContaining(String keyword, PageRequest pageRequest);

    Page<Question> findByWriterNickNameContaining(String keyword, PageRequest pageRequest);
    List<Question> findByWriterNickNameContaining(String keyword);

    Page<Question> findByAnswersContentContaining(String keyword, PageRequest pageRequest);

    Page<Question> findByWriterNickNameContainingAndStatus(String nickName, Question.Status status, PageRequest questionId);

    Page<Question> findByAnswersWriterNickNameContaining(String nickName, PageRequest questionId);
}
