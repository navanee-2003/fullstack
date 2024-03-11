package com.partypro.navaneethan.service;

import java.security.Principal;
import java.util.List;

import com.partypro.navaneethan.dto.request.PasswordRequest;
import com.partypro.navaneethan.model.User;

public interface UserService {

    void forgotPassword(PasswordRequest request, Principal principal);

    List<User> getAllUsers();

}
