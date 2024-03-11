package com.example.payease.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.payease.entity.Reminder;

@Repository
public interface ReminderRepository extends JpaRepository<Reminder, Integer> {

}
