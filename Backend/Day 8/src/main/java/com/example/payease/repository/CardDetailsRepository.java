package com.example.payease.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.payease.entity.CardDetails;

@Repository
public interface CardDetailsRepository extends JpaRepository<CardDetails, Integer> {
	
}
