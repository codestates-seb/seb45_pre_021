package com.teamtwentyone.users.entity;

import com.teamtwentyone.answers.entity.Answer;
import com.teamtwentyone.questions.entity.Question;
import com.teamtwentyone.time.UserDateEntity;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity(name = "users")
public class User extends UserDateEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(unique = true)
    private String email;

    @Column
    private String password;

    @Column(unique = true)
    private String nickName;

    @Column(unique = true)
    private String phoneNum;

    @Column(nullable = false, columnDefinition = "integer default 0")
    private int allCount;

    @Column(nullable = false, columnDefinition = "integer default 0")
    private int progressCount;

    @Column(nullable = false, columnDefinition = "integer default 0")
    private int completeCount;

    @Column(nullable = false, columnDefinition = "integer default 0")
    private int answerCount;

    @ManyToOne(cascade = CascadeType.REFRESH)
    private Question question;

    @ManyToOne
    private Answer answer;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();
}
