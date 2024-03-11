package com.partypro.navaneethan.service.impl;

import java.security.Principal;
import java.util.List;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.partypro.navaneethan.dto.request.PasswordRequest;
import com.partypro.navaneethan.model.User;
import com.partypro.navaneethan.repository.UserRepository;
import com.partypro.navaneethan.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

    @Override
    public void forgotPassword(PasswordRequest request, Principal principal) {
        var user = (User) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();

        if (!passwordEncoder.matches(request.getCurrentPassword(), user.getPassword()))
            throw new IllegalStateException("Wrong password.");

        if (!request.getNewPassword().equals(request.getConfirmationPassword()))
            throw new IllegalStateException("Password mismatch.");

        user.setPassword(passwordEncoder.encode(request.getNewPassword()));
        userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

}
