package com.teamtwentyone.questions.dto;

import com.teamtwentyone.answers.entity.Answer;
import com.teamtwentyone.questions.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import java.util.List;

public class QuestionsDto {
    @Getter
    public static class Post { // 질문 등록 DTO
        @NotBlank(message = "제목은 공백이 아니어야 합니다.")
        private String title;

        @NotBlank(message = "내용은 공백이 아니어야 합니다.")
        private String content;
    }

    @Getter
    public static class Patch { // 질문 수정 DTO
        private Long questionId;

        @NotBlank(message = "제목은 공백이 아니어야 합니다.")
        private String title;

        @NotBlank(message = "내용은 공백이 아니어야 합니다.")
        private String content;

        public void setId(Long id) { // questionId setter
            this.questionId = id;
        }
    }

    @Getter
    public static class PatchStatus { // 질문 상태 수정 DTO
        private Long questionId;
        private Question.Status status;

        public void setId(Long id) { // questionId setter
            this.questionId = id;
        }
    }

    @Getter
    @AllArgsConstructor
    @Builder
    public static class Response { // 질문 조회 응답 DTO
        private Long questionId;
        private String title;
        private String content;
        private Question.Status status;
        private String writerNickName;
        private int answerCount;
        private List<Answer> answers;
        private String createdAt;
        private String modifiedAt;

        public void setWriterNickName(String writerNickName) { // writerNickName setter
            this.writerNickName = writerNickName;
        }
    }

    @Getter
    @AllArgsConstructor
    @Builder
    public static class ListResponse {
        private Long questionId;
        private String title;
        private Question.Status status;
        private String writerNickName;
        private int answerCount;
        private String createdAt;
        private String modifiedAt;

        public void setWriterNickName(String writerNickName) { // writerNickName setter
            this.writerNickName = writerNickName;
        }
    }
}
