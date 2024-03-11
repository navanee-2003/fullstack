package com.example.payease.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.payease.entity.Users;
import com.example.payease.service.UsersService;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class UsersController {
	
	@Autowired
	UsersService usersService;
	
	@PostMapping("/")
	public Users createuser(@RequestBody Users obj) {
		usersService.createUser(obj);
		return obj;
	}
	
	@GetMapping("/{username}")
	public String getPassword(@PathVariable String username) {
		return usersService.getPassword(username);
	}
	
	
}
