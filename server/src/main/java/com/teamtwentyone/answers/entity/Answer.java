package com.teamtwentyone.answers.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.teamtwentyone.questions.entity.Question;
import com.teamtwentyone.time.DateTimeEntity;
import com.teamtwentyone.users.entity.User;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "answers")
public class Answer extends DateTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId; // 답변 PK
    private String content; // 답변 내용
    private boolean selected; // 답변 채택 여부
    private String writerNickName; // 답변 작성자 닉네임

    @ManyToOne // 답변은 하나의 유저에 속해 있음
    @JoinColumn(name = "userId")
    @JsonIgnore
    private User user;

    @ManyToOne // 답변은 하나의 질문에 속해 있음
    @JoinColumn(name = "questionId")
    @JsonIgnore
    private Question question;
}
