package com.partypro.navaneethan.service;

import java.io.IOException;

import com.partypro.navaneethan.dto.request.LoginRequest;
import com.partypro.navaneethan.dto.request.RegisterRequest;
import com.partypro.navaneethan.dto.response.LoginResponse;
import com.partypro.navaneethan.dto.response.RegisterResponse;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

    void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException;
}
