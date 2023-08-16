package com.teamtwentyone.users.mapper;

import com.teamtwentyone.users.Dto.UserDto;
import com.teamtwentyone.users.entity.User;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UserMapper {
    //Dto -> Entity
    public User userPostToUser(UserDto.signup requestBody) {
        User user = new User();
        user.setEmail(requestBody.getEmail());
        user.setPassword(requestBody.getPassword());
        user.setNickName(requestBody.getNickName());
        user.setPhoneNum(requestBody.getPhoneNum());
        return user;
    }

    // Dto -> Entity
    public User userPatchToUser(UserDto.Patch requestBody) {
        User user = new User();
        user.setUserId(requestBody.getId());
        user.setNickName(requestBody.getNickName());
        user.setPhoneNum(requestBody.getPhoneNum());
        return user;
    }

    // Dto -> Entity
    public User userPatchPasswordToUser(UserDto.PatchPassword requestBody) {
        User user = new User();
        user.setUserId(requestBody.getId());
        user.setPassword(requestBody.getPassword());
        return user;
    }

    //Entity -> Dto
    public UserDto.ResponseMyPage userToUserResponse(User user) {
        return UserDto.ResponseMyPage.builder()
                .id(user.getUserId())
                .email(user.getEmail())
                .nickName(user.getNickName())
                .phoneNum(user.getPhoneNum())
                .allCount(user.getAllCount())
                .progressCount(user.getProgressCount())
                .completeCount(user.getCompleteCount())
                .answerCount(user.getAnswerCount())
                .createDate(String.valueOf(user.getCreateDate()))
                .modifiedDate(String.valueOf(user.getModifiedDate()))
                .build();
    }
}
