package com.teamtwentyone.users.Dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

public class UserDto {
    @Getter
    public static class Post {
        private String email;
        private String password;
        private String nickName;
        private String phoneNum;
    }

    @Getter
    public static class Patch {
        private Long id;
        private String password;
        private String nickName;
        private String phoneNum;

        public void setId(Long id) {
            this.id = id;
        }
    }

    @Getter
    @AllArgsConstructor
    @Builder
    public static class Response {
        private Long id;
        private String email;
        private String password;
        private String nickName;
        private String phoneNum;
        private String createDate;
        private String modifiedDate;
    }
}
