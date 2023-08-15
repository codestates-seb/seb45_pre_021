package com.teamtwentyone.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class PageInfo { // 페이지 정보를 담는 DTO
    private int page;
    private int size;
    private long totalElements;
    private int totalPages;
}
