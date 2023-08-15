package com.teamtwentyone.auth.config;

import com.teamtwentyone.auth.filter.JwtAuthenticationFilter;
import com.teamtwentyone.auth.filter.JwtVerificationFilter;
import com.teamtwentyone.auth.handler.MemberAccessDeniedHandler;
import com.teamtwentyone.auth.handler.MemberAuthenticationEntryPoint;
import com.teamtwentyone.auth.handler.MemberAuthenticationFailureHandler;
import com.teamtwentyone.auth.handler.MemberAuthenticationSuccessHandler;
import com.teamtwentyone.auth.jwt.JwtTokenizer;
import com.teamtwentyone.auth.utils.CustomAuthorityUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Configuration
@RequiredArgsConstructor
// @EnableWebSecurity(debug = true)
public class SecurityConfig {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    @Bean
    public SecurityFilterChain filterChain (HttpSecurity http) throws Exception {
        return  http
                .headers().frameOptions().sameOrigin() // h2-console 사용을 위한 설정
                .and()
                .csrf().disable() // csrf 비활성화
                .cors(Customizer.withDefaults()) // cors 허용
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS) // 세션 사용 안함
                .and()
                .formLogin().disable() // form login 비활성화
                .httpBasic().disable() // http basic 비활성화
                .exceptionHandling() // 예외 처리
                .authenticationEntryPoint(new MemberAuthenticationEntryPoint()) // 인증 실패 핸들러
                .accessDeniedHandler(new MemberAccessDeniedHandler()) // 인가 실패 핸들러
                .and()
                .apply(new CustomFilterConfigurer()) // 커스텀 필터 적용
                .and()
                .logout() // logout 설정
                .logoutUrl("/logout") // logout url 설정
                .invalidateHttpSession(true) // 세션 초기화
                .deleteCookies("Authorization") // 쿠키 삭제 : Authorization
                .deleteCookies("Refresh") // 쿠키 삭제 : Refresh
                .logoutSuccessHandler(new LogoutSuccessHandler() { // logout 성공 핸들러
                    @Override
                    public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
                        response.getWriter().append("Logout successfully");
                        response.setStatus(HttpServletResponse.SC_OK);
                    }
                })
                .and()

                .authorizeHttpRequests(authorize -> authorize // 요청에 대한 권한 설정
                    .antMatchers(HttpMethod.POST,"/users/signup").permitAll() // 회원가입은 누구나 가능
                    .antMatchers(HttpMethod.PATCH,"/users/**").hasRole("USER") // 회원정보 수정은 USER 권한 필요
                    .antMatchers(HttpMethod.GET,"/users/**").hasRole("USER") // 회원정보 조회는 USER 권한 필요
                    .antMatchers(HttpMethod.DELETE,"/users/**").hasRole("USER") // 회원정보 삭제는 USER 권한 필요
                    .antMatchers(HttpMethod.POST ,"/questions/post").hasRole("USER") // 질문 등록은 USER 권한 필요
                    .antMatchers(HttpMethod.PATCH,"/questions/edit/**").hasRole("USER") // 질문 수정은 USER 권한 필요
                    .antMatchers(HttpMethod.DELETE,"/questions/delete/**").hasRole("USER") // 질문 삭제는 USER 권한 필요
                    .antMatchers(HttpMethod.POST, "/answers/post/**").hasRole("USER") // 답변 등록은 USER 권한 필요
                    .antMatchers(HttpMethod.PATCH, "/answers/edit/**").hasRole("USER") // 답변 수정은 USER 권한 필요
                    .antMatchers(HttpMethod.DELETE, "/answers/delete/**").hasRole("USER") // 답변 삭제는 USER 권한 필요
//                      .antMatchers(HttpMethod.POST,"/questions").hasRole("USER")
//                      .antMatchers(HttpMethod.PATCH,"/questions/**").hasRole("USER")
//                      .antMatchers(HttpMethod.GET,"/questions").permitAll()
//                      .antMatchers(HttpMethod.GET,"/questions/{id}").permitAll()
//                      .antMatchers(HttpMethod.DELETE,"/questions/{id}").hasRole("USER")
//                      .antMatchers(HttpMethod.POST,"/questions/{id}/answers").hasRole("USER")

//                      .antMatchers(HttpMethod.PATCH,"/answers/**").hasRole("USER")
//                      .antMatchers(HttpMethod.GET,"/questions/{id}/answers").denyAll()
//                      .antMatchers(HttpMethod.GET,"/questions/{id}/answers/{answerId}").denyAll()
//                      .antMatchers(HttpMethod.DELETE,"/answers/**").hasRole("USER")

                        .antMatchers(HttpMethod.POST,"/logout").hasRole("USER") // logout 은 USER 권한 필요
//                      .anyRequest().permitAll() // 나머지 요청은 누구나 가능
                )
                .build();
    }

    @Bean
    public PasswordEncoder passwordEncoder(){ // 패스워드 인코더
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() { // cors 설정
        CorsConfiguration configuration = new CorsConfiguration();

        configuration.addAllowedOriginPattern("*"); // 모든 요청 허용
        configuration.addAllowedMethod("*"); // 모든 메소드 허용
        configuration.addAllowedHeader("*"); // 모든 헤더 허용
        configuration.addExposedHeader("*"); // 모든 응답 헤더 허용
        configuration.addExposedHeader("Authorization"); // Authorization 헤더 허용
        configuration.addExposedHeader("Access-Control-Allow-Credentials"); // Access-Control-Allow-Credentials 헤더 허용

//        configuration.addAllowedOriginPattern("http://localhost:3000");
//        configuration.setAllowedMethods(Arrays.asList("POST","GET","PATCH","DELETE","OPTIONS"));
//        configuration.addExposedHeader("Authorization");


        configuration.setAllowCredentials(true); // 쿠키 허용

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource(); // cors 설정 적용
        source.registerCorsConfiguration("/**", configuration); // 모든 요청에 대해 위의 설정 적용

        return source; // 설정 적용된 source 반환
    }

    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);
            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);

            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler());

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);
            builder.addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
        }

    }
}