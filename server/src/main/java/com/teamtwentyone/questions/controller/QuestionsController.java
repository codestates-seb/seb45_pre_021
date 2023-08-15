package com.teamtwentyone.questions.controller;

import com.teamtwentyone.dto.MultiResponseDto;
import com.teamtwentyone.questions.dto.QuestionsDto;
import com.teamtwentyone.questions.entity.Question;
import com.teamtwentyone.questions.mapper.QuestionsMapper;
import com.teamtwentyone.questions.service.QuestionsService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Min;
import javax.validation.constraints.Positive;
import java.util.List;

@CrossOrigin(origins = "*")
@Validated
@RestController
@RequestMapping("/questions")
public class QuestionsController {
    private final QuestionsService questionsService;
    private final QuestionsMapper mapper;

    // 생성자 의존성 주입
    public QuestionsController(QuestionsService questionsService, QuestionsMapper mapper) {
        this.questionsService = questionsService;
        this.mapper = mapper;
    }

    // 질문 등록 컨트롤러
    @PostMapping("/post")
    public ResponseEntity postQuestions(@RequestBody QuestionsDto.Post requestBody) {
        Question newQuestion = mapper.questionPostDtoToQuestions(requestBody); // PostDto -> Entity
        Question createdQuestion = questionsService.createQuestion(newQuestion); // 질문 등록 메서드 호출
        QuestionsDto.Response response = mapper.questionsToResponse(createdQuestion); // Entity -> ResponseDto
        return ResponseEntity.status(HttpStatus.CREATED).body(response); // 등록된 질문 반환
    }

    // 질문 수정 컨트롤러
    @PatchMapping("/edit/{question-id}")
    public ResponseEntity patchQuestions(@RequestBody QuestionsDto.Patch requestBody,
                                         @PathVariable("question-id") @Min(1) Long questionId) { // questionId는 1이상의 값만 허용
        requestBody.setId(questionId);
        Question question = mapper.questionPatchDtoToQuestions(requestBody); // PatchDto -> Entity
        Question editedQuestion = questionsService.editQuestion(question); // 질문 수정 메서드 호출
        QuestionsDto.Response response = mapper.questionsToResponse(editedQuestion); // Entity -> ResponseDto
        return ResponseEntity.status(HttpStatus.OK).body(response); // 수정된 질문 반환
    }

    // 답변 채택 컨트롤러
    @PatchMapping("/edit/pick-answer/{question-id}/{answer-id}")
    public ResponseEntity patchQuestionsStatus(@PathVariable("question-id") @Min(1) Long questionId,
                                               @PathVariable("answer-id") @Min(1) Long answerId) { // questionId, answerId는 1이상의 값만 허용
        Question editedQuestion = questionsService.editQuestionStatus(questionId, answerId); // 질문 상태 수정 메서드 호출
        QuestionsDto.Response response = mapper.questionsToResponse(editedQuestion); // Entity -> ResponseDto
        return ResponseEntity.status(HttpStatus.OK).body(response); // 수정된 질문 반환
    }

    // 질문 조회 컨트롤러
    @GetMapping("/{question-id}")
    public ResponseEntity getQuestions(@PathVariable("question-id") @Min(1) Long questionId) { // questionId는 1이상의 값만 허용
        Question question = questionsService.findQuestion(questionId); // 질문 조회 메서드 호출
        QuestionsDto.Response response = mapper.questionsToResponse(question); // Entity -> ResponseDto
        return ResponseEntity.status(HttpStatus.OK).body(response); // 조회된 게시글 반환
    }

    // 상태에 무관하게 질문 전부 조회 컨트롤러
    @GetMapping
    public ResponseEntity getAllQuestions(@Positive @RequestParam int page,
                                          @Positive @RequestParam int size) {
        Page<Question> pageQuestions = questionsService.findAllQuestion(page - 1, size); // 게시글 전부 조회 메서드 호출
        List<Question> questions = pageQuestions.getContent(); // 조회된 게시글 리스트
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.questionsToQuestionResponses(questions), pageQuestions), HttpStatus.OK); // 조회된 게시글 리스트 반환
    }

    // 진행중인 질문 전부 조회 컨트롤러
    @GetMapping("/progress")
    public ResponseEntity getProgressQuestions(@Positive @RequestParam int page,
                                               @Positive @RequestParam int size) {
        Page<Question> pageQuestions = questionsService.findProgressQuestion(page - 1, size); // 진행중인 게시글 전부 조회 메서드 호출
        List<Question> questions = pageQuestions.getContent(); // 조회된 게시글 리스트
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.questionsToQuestionResponses(questions), pageQuestions), HttpStatus.OK); // 조회된 게시글 리스트 반환
    }

    // 완료된 질문 전부 조회 컨트롤러
    @GetMapping("/complete")
    public ResponseEntity getCompleteQuestions(@Positive @RequestParam int page,
                                               @Positive @RequestParam int size) {
        Page<Question> pageQuestions = questionsService.findCompleteQuestion(page - 1, size); // 완료된 게시글 전부 조회 메서드 호출
        List<Question> questions = pageQuestions.getContent(); // 조회된 게시글 리스트
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.questionsToQuestionResponses(questions), pageQuestions), HttpStatus.OK); // 조회된 게시글 리스트 반환
    }

    // 게시글의 제목, 본문 검색 컨트롤러
    @GetMapping("/search")
    public ResponseEntity searchQuestions(@Positive @RequestParam int page,
                                          @Positive @RequestParam int size,
                                          @RequestParam String keyword) {
        Page<Question> pageQuestions = questionsService.searchQuestion(page - 1, size, keyword); // 게시글 검색 메서드 호출
        List<Question> questions = pageQuestions.getContent(); // 조회된 게시글 리스트
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.questionsToQuestionResponses(questions), pageQuestions), HttpStatus.OK); // 조회된 게시글 리스트 반환
    }

    // 게시글의 제목으로 검색
    @GetMapping("/search/title")
    public ResponseEntity searchQuestionsByTitle(@Positive @RequestParam int page,
                                                 @Positive @RequestParam int size,
                                                 @RequestParam String keyword) {
        Page<Question> pageQuestions = questionsService.searchQuestionByTitle(page - 1, size, keyword); // 게시글 검색 메서드 호출
        List<Question> questions = pageQuestions.getContent(); // 조회된 게시글 리스트
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.questionsToQuestionResponses(questions), pageQuestions), HttpStatus.OK); // 조회된 게시글 리스트 반환
    }

    // 게시글의 본문으로 검색
    @GetMapping("/search/content")
    public ResponseEntity searchQuestionsByContent(@Positive @RequestParam int page,
                                                   @Positive @RequestParam int size,
                                                   @RequestParam String keyword) {
        Page<Question> pageQuestions = questionsService.searchQuestionByContent(page - 1, size, keyword); // 게시글 검색 메서드 호출
        List<Question> questions = pageQuestions.getContent(); // 조회된 게시글 리스트
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.questionsToQuestionResponses(questions), pageQuestions), HttpStatus.OK); // 조회된 게시글 리스트 반환
    }

    // 게시글의 작성자로 검색
    @GetMapping("/search/writer")
    public ResponseEntity searchQuestionsByWriter(@Positive @RequestParam int page,
                                                  @Positive @RequestParam int size,
                                                  @RequestParam String keyword) {
        Page<Question> pageQuestions = questionsService.searchQuestionByWriter(page - 1, size, keyword); // 게시글 검색 메서드 호출
        List<Question> questions = pageQuestions.getContent(); // 조회된 게시글 리스트
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.questionsToQuestionResponses(questions), pageQuestions), HttpStatus.OK); // 조회된 게시글 리스트 반환
    }

    // 게시글의 답변 내용으로 검색
    @GetMapping("/search/answer")
    public ResponseEntity searchQuestionsByAnswer(@Positive @RequestParam int page,
                                                  @Positive @RequestParam int size,
                                                  @RequestParam String keyword) {
        Page<Question> pageQuestions = questionsService.searchQuestionByAnswer(page - 1, size, keyword); // 게시글 검색 메서드 호출
        List<Question> questions = pageQuestions.getContent(); // 조회된 게시글 리스트
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.questionsToQuestionResponses(questions), pageQuestions), HttpStatus.OK); // 조회된 게시글 리스트 반환
    }

    // 게시글 삭제
    @DeleteMapping("/delete/{question-id}")
    public ResponseEntity deleteQuestions(@PathVariable("question-id") @Min(1) Long questionId) { // questionId는 1이상의 값만 허용
        questionsService.deleteQuestion(questionId); // 게시글 삭제 메서드 호출
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
