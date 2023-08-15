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
    private Long answerId;
    private String content;
    private boolean selected;
    private String writerNickName;

    @ManyToOne
    @JoinColumn(name = "userId")
    @JsonIgnore
    private User user;

    @ManyToOne
    @JoinColumn(name = "questionId")
    @JsonIgnore
    private Question question;
}
