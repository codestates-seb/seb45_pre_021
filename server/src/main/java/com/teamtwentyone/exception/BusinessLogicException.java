package com.teamtwentyone.exception;

import lombok.Getter;

public class BusinessLogicException extends RuntimeException { // 비즈니스 로직에서 발생하는 예외
    @Getter
    private ExceptionCode exceptionCode;

    public BusinessLogicException(ExceptionCode exceptionCode) {
        super(exceptionCode.getMessage());
        this.exceptionCode = exceptionCode;
    }
}
