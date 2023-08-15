package com.teamtwentyone.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@AllArgsConstructor
@Builder
public class ErrorResponse { // 에러 응답 DTO
    private int status;
    private String message;
}
