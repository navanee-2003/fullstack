package com.example.payease.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.payease.entity.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, Integer> {
	
	@Query("SELECT u.password FROM Users u WHERE u.username = ?1")
    String findPasswordByUsername(String username);
	
}
