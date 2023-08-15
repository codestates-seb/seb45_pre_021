package com.teamtwentyone.questions.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.teamtwentyone.answers.entity.Answer;
import com.teamtwentyone.time.DateTimeEntity;
import com.teamtwentyone.users.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Question extends DateTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column
    private String title;

    @Column
    private String content;

    @Enumerated(EnumType.STRING)
    private Status status;

    @Column
    private String writerNickName;

    @Column(columnDefinition = "integer default 0")
    private int answerCount;

    @ManyToOne
    @JoinColumn(name = "userId")
    @JsonIgnore
    private User user;

    @OneToMany(mappedBy = "question", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Answer> answers;

    public enum Status {
        PROGRESS, COMPLETE
    }
}
