package com.teamtwentyone.questions.mapper;

import com.teamtwentyone.questions.dto.QuestionsDto;
import com.teamtwentyone.questions.entity.Question;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class QuestionsMapper {
    // PostDto -> Entity
    public Question questionPostDtoToQuestions(QuestionsDto.Post requestBody) {
        Question question = new Question();
        question.setTitle(requestBody.getTitle());
        question.setContent(requestBody.getContent());
        return question;
    }

    // PatchDto -> Entity
    public Question questionPatchDtoToQuestions(QuestionsDto.Patch requestBody) {
        Question question = new Question();
        question.setQuestionId(requestBody.getQuestionId());
        question.setTitle(requestBody.getTitle());
        question.setContent(requestBody.getContent());
        return question;
    }

    // Entity to ResponseDto mapper
    public QuestionsDto.Response questionsToResponse(Question question) {
        return QuestionsDto.Response.builder()
                .questionId(question.getQuestionId())
                .title(question.getTitle())
                .content(question.getContent())
                .status(question.getStatus())
                .writerNickName(question.getWriterNickName())
                .answerCount(question.getAnswerCount())
                .answers(question.getAnswers())
                .createdAt(String.valueOf(question.getCreateDate()))
                .modifiedAt(String.valueOf(question.getModifiedDate()))
                .build();
    }

    public QuestionsDto.ListResponse questionsToListResponse(Question question) {
        return QuestionsDto.ListResponse.builder()
                .questionId(question.getQuestionId())
                .title(question.getTitle())
                .status(question.getStatus())
                .writerNickName(question.getWriterNickName())
                .answerCount(question.getAnswerCount())
                .createdAt(String.valueOf(question.getCreateDate()))
                .modifiedAt(String.valueOf(question.getModifiedDate()))
                .build();
    }

    public List<QuestionsDto.ListResponse> questionsToQuestionResponses(List<Question> questions) {
        List<QuestionsDto.ListResponse> list = new ArrayList<QuestionsDto.ListResponse>(questions.size());

        for(Question question : questions) {
            list.add(questionsToListResponse(question));
        }
        return list;
    }
}
