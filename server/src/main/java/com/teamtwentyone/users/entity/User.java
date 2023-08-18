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

    /*
    프론트 요청으로 휴대폰 번호 필드 제거
     */
//    @Column(unique = true)
//    private String phoneNum;

    @Column(nullable = false, columnDefinition = "integer default 0")
    private int allCount;

    @Column(nullable = false, columnDefinition = "integer default 0")
    private int progressCount;

    @Column(nullable = false, columnDefinition = "integer default 0")
    private int completeCount;

    @Column(nullable = false, columnDefinition = "integer default 0")
    private int answerCount;

    @OneToMany
    private List<Question> questions = new ArrayList<>();

    @OneToMany
    private List<Answer> answer = new ArrayList<>();

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();
}
