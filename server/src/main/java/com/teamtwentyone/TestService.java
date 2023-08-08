package com.teamtwentyone;

import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TestService {
    private final TestRepository repository;

    public TestService(TestRepository repository) {
        this.repository = repository;
    }

    public TestEntity createEntity(TestEntity testEntity) {
        TestEntity savedEntity = repository.save(testEntity);

        return savedEntity;
    }

    public TestEntity findEntity(Long id) {
        Optional<TestEntity> entity = repository.findById(id);
        TestEntity findEntity = entity.orElseThrow(() -> new RuntimeException());
        return findEntity;
    }
}
