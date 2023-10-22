package com.teamtwentyone.auth.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.teamtwentyone.auth.dto.LoginDto;
import com.teamtwentyone.auth.jwt.JwtTokenizer;
import com.teamtwentyone.users.entity.User;
import lombok.SneakyThrows;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenizer jwtTokenizer;

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager, JwtTokenizer jwtTokenizer) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenizer = jwtTokenizer;
    }

    @SneakyThrows
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {

        if (!request.getMethod().equals("POST")) {
            throw new AuthenticationServiceException("지원되지 않는 메서드입니다. " + request.getMethod());
        }
        setRequiresAuthenticationRequestMatcher(new AntPathRequestMatcher("/login","POST"));

        ObjectMapper objectMapper = new ObjectMapper();
        LoginDto loginDto = objectMapper.readValue(request.getInputStream(), LoginDto.class);

        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(loginDto.getEmail(),loginDto.getPassword());

        Authentication result = authenticationManager.authenticate(authenticationToken);
        return result;
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response,
                                            FilterChain chain, Authentication authResult) throws IOException, ServletException {
        User user = (User) authResult.getPrincipal();

        String accessToken = delegateAccessToken(user);
        String refreshToken = delegateRefreshToken(user);

        String responseTokenString = "Bearer " + accessToken;
//         response.setHeader("Authorization", responseTokenString );
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonResponse = objectMapper.writeValueAsString(Collections.singletonMap("token", responseTokenString));

        response.setContentType("application/json");
        response.getWriter().write(jsonResponse);

//        Cookie cookie = new Cookie("Refresh", responseTokenString);
//        response.addCookie(cookie);

    }

    private String delegateAccessToken(User user){

        Map<String, Object> claims = new HashMap<>();

        claims.put("username", user.getEmail());
        claims.put("id", user.getUserId());
        claims.put("roles", user.getRoles());

        String subject = user.getEmail();

        int expirationMinutes = jwtTokenizer.getAccessTokenExpirationMinutes();
        Date expiration = jwtTokenizer.getTokenExpiration(expirationMinutes);

        String plainKey = jwtTokenizer.getSecretKey();
        String base64EncodedKey = jwtTokenizer.encodeBase64SecretKey(plainKey);

        String accessToken = jwtTokenizer.generateAccessToken(claims,subject,expiration,base64EncodedKey);

        return accessToken;
    }

    String delegateRefreshToken(User user){

        String subject = user.getEmail();
        int expirationMinutes = jwtTokenizer.getRefreshTokenExpirationMinutes();
        Date expiration = jwtTokenizer.getTokenExpiration(expirationMinutes);

        String plainKey = jwtTokenizer.getSecretKey();
        String base64EncodedKey = jwtTokenizer.encodeBase64SecretKey(plainKey);

        String refreshToken = jwtTokenizer.generateRefreshToken(subject,expiration,base64EncodedKey);
        return refreshToken;
    }
}
