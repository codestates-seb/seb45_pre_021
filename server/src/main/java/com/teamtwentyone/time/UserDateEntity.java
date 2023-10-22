package com.teamtwentyone.time;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDate;

@Getter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public class UserDateEntity {
    // User 용 Date Entity
    @CreatedDate
    private LocalDate createDate; // 엔티티가 저장될때 날짜

    @LastModifiedDate
    private LocalDate modifiedDate; // 엔티티가 수정될때 날짜
}
