package com.teamtwentyone.answers.dto;

import lombok.*;

import javax.validation.constraints.NotBlank;

public class AnswerDto {
    @Getter
    public static class Post {
        @NotBlank(message = "내용은 공백이 아니어야 합니다.")
        private String content;
        private Long questionId;
    }

    @Getter
    public static class Patch {
        private Long answerId;

        @NotBlank(message = "내용은 공백이 아니어야 합니다.")
        private String content;

        public void setAnswerId(Long answerId) {
            this.answerId = answerId;
        }
    }

    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Response {
        private Long answerId;
        private String content;
        private String writerNickName;
        private String createdAt;
        private String modifiedAt;
    }
}
