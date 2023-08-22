package com.teamtwentyone.answers.mapper;

import com.teamtwentyone.answers.dto.AnswerDto;
import com.teamtwentyone.answers.entity.Answer;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AnswerMapper {
    // Dto -> Entity
    public Answer answerPostDtoToEntity(AnswerDto.Post requestBody) {
        Answer answer = new Answer();
        answer.setContent(requestBody.getContent());
        return answer;
    }

    // Dto -> Entity
    public Answer answerPatchDtoToEntity(AnswerDto.Patch requestBody) {
        Answer answer = new Answer();
        answer.setContent(requestBody.getContent());
        return answer;
    }

    // Entity -> Dto
    public AnswerDto.Response answerToResponse(Answer answer) {
        return AnswerDto.Response.builder()
                .answerId(answer.getAnswerId())
                .content(answer.getContent())
                .writerNickName(answer.getWriterNickName())
                .writerImageId(answer.getUser().getImageId())
                .createdAt(String.valueOf(answer.getCreateDate()))
                .modifiedAt(String.valueOf(answer.getModifiedDate()))
                .build();
    }
}
