package com.example.payease.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.payease.entity.Users;
import com.example.payease.repository.UsersRepository;

@Service
public class UsersService {
	
	@Autowired
	UsersRepository userRepository;
	
	public Users createUser(Users obj) {
		userRepository.save(obj);
		return obj;
	}

	public String getPassword(String username) {
		return userRepository.findPasswordByUsername(username);
	}
}
