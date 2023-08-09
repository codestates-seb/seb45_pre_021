package com.teamtwentyone.users.mapper;

import com.teamtwentyone.users.Dto.UserDto;
import com.teamtwentyone.users.entity.User;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UserMapper {
    //Dto -> Entity
    public User userPostToUser(UserDto.Post requestBody) {
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
        user.setPassword(requestBody.getPassword());
        user.setNickName(requestBody.getNickName());
        user.setPhoneNum(requestBody.getPhoneNum());
        return user;
    }

    //Entity -> Dto
    public UserDto.Response userToUserResponse(User user) {
        return UserDto.Response.builder()
                .id(user.getUserId())
                .email(user.getEmail())
                .password(user.getPassword())
                .nickName(user.getNickName())
                .phoneNum(user.getPhoneNum())
                .createDate(String.valueOf(user.getCreateDate()))
                .modifiedDate(String.valueOf(user.getModifiedDate()))
                .build();
    }
}
