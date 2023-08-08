package com.teamtwentyone;

import org.mapstruct.Mapper;
import org.springframework.context.annotation.Configuration;

@Configuration
@Mapper(componentModel = "spring")
public interface TestMapper {
    TestEntity dtoToEntity(TestDto requestBody);
    TestDto EntityToDto(TestEntity entity);
}
