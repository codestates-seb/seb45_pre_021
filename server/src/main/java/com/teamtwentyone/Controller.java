package com.teamtwentyone;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/test")
public class Controller {
    private final TestMapper mapper;
    private final TestService service;

    public Controller(TestMapper mapper, TestService service) {
        this.mapper = mapper;
        this.service = service;
    }

    @GetMapping("/ngrok")
    public String ngrokTest() {
        return "이거 보임?ㅋㅋ";
    }

    @PostMapping("/post")
    public ResponseEntity ngrokPostTest(@RequestBody TestDto requestBody) {
        TestEntity entity = mapper.dtoToEntity(requestBody);
        service.createEntity(entity);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity ngrokGetTest(@PathVariable Long id) {
        TestEntity entity = service.findEntity(id);
        TestDto response = mapper.EntityToDto(entity);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping
    public String branchTest() {
        return "브렌치 테스트 하려고 만듬ㅋㅋ";
    }
}
