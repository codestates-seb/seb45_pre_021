package com.teamtwentyone.time;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public class DateTimeEntity {
    // Board, Answer 용 Date Entity
    @CreatedDate
    private LocalDateTime createDate; // 엔티티가 저장될때 시간 기록

    @LastModifiedDate
    private LocalDateTime modifiedDate; // 엔티티가 수정될때 시간 기록
}
