package com.teamtwentyone.answers.controller;

import com.teamtwentyone.answers.dto.AnswerDto;
import com.teamtwentyone.answers.entity.Answer;
import com.teamtwentyone.answers.mapper.AnswerMapper;
import com.teamtwentyone.answers.service.AnswerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Min;

@RestController
@RequestMapping("/answers")
@Validated
@CrossOrigin(origins = "*")
public class AnswerController {
    private final AnswerService answerService;
    private final AnswerMapper mapper;

    public AnswerController(AnswerService answerService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }

    // 답변 등록 컨트롤러
    @PostMapping("/post/{question-id}")
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerDto.Post requestBody,
                                     @PathVariable("question-id") @Min(1) Long questionId) {
        Answer answer = answerService.createAnswer(mapper.answerPostDtoToEntity(requestBody), questionId);
        return ResponseEntity.status(HttpStatus.CREATED).body(mapper.answerToResponse(answer));
    }

    // 답변 수정 컨트롤러
    @PatchMapping("/edit/{answer-id}")
    public ResponseEntity patchAnswer(@Valid @RequestBody AnswerDto.Patch requestBody,
                                      @PathVariable("answer-id") @Min(1) Long answerId) {
        Answer answer = answerService.editAnswer(mapper.answerPatchDtoToEntity(requestBody), answerId);
        return ResponseEntity.status(HttpStatus.OK).body(mapper.answerToResponse(answer));
    }

    // 답변 삭제 컨트롤러
    @DeleteMapping("/delete/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") @Min(1) Long answerId) {
        answerService.deleteAnswer(answerId);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
