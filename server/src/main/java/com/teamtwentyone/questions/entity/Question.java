package com.teamtwentyone.questions.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.teamtwentyone.answers.entity.Answer;
import com.teamtwentyone.time.DateTimeEntity;
import com.teamtwentyone.users.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.engine.internal.Cascade;

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
    private Long questionId; // 질문 PK

    @Column
    private String title; // 질문 제목

    @Column
    private String content; // 질문 내용

    @Enumerated(EnumType.STRING)
    private Status status; // 질문 상태

    @Column
    private String writerNickName; // 질문 작성자 닉네임

    @Column(columnDefinition = "integer default 0")
    private int answerCount; // 답변 수

    @ManyToOne
    @JoinColumn(name = "userId")
    @JsonIgnore
    private User user;

    // 질문은 여러개의 답변을 가질 수 있음(fetch = FetchType.LAZY : 지연로딩, cascade = CascadeType.REMOVE : 질문이 삭제되면 답변도 삭제됨)
    @OneToMany(mappedBy = "question", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Answer> answers;

    public enum Status { // 질문 상태
        PROGRESS, COMPLETE // 진행중, 완료
    }
}
