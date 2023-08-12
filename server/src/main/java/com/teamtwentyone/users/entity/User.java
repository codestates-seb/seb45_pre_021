package com.teamtwentyone.users.entity;

import com.teamtwentyone.time.UserDateEntity;
import lombok.*;

import javax.persistence.*;

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
}
