package com.teamtwentyone.auth.userdetails;

import com.teamtwentyone.auth.utils.CustomAuthorityUtils;
import com.teamtwentyone.users.entity.User;
import com.teamtwentyone.users.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;

@Component
@RequiredArgsConstructor
public class MemberUserDetailService implements UserDetailsService { // 로그인시 DB 에서 유저정보를 가져오는 서비스

    private final UserRepository userRepository;
    private final CustomAuthorityUtils authorityUtils;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("No sign-up information found for email"));
        return new CustomUserDetails(user);
    }

    public class CustomUserDetails extends User implements UserDetails {

        CustomUserDetails(User user) { // DB 에서 가져온 유저정보를 CustomUserDetails 에 저장
            setUserId(user.getUserId());
            setEmail(user.getEmail());
            setPassword(user.getPassword());
            setRoles(user.getRoles());
        }

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() { // 유저 권한
            List<GrantedAuthority> authorities =  authorityUtils.createAuthorities(getRoles());
            return authorities;
        }

        @Override
        public String getUsername() { // 유저 이름
            return getEmail();
        }

        @Override
        public boolean isAccountNonExpired() { // 계정 만료 여부
            return true;
        }

        @Override
        public boolean isAccountNonLocked() { // 계정 잠금 여부
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() { // 계정 패스워드 만료 여부
            return true;
        }

        @Override
        public boolean isEnabled() { // 계정 활성화 여부
            return true;
        }
    }

}