package com.partypro.navaneethan.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.partypro.navaneethan.model.Booking;
import com.partypro.navaneethan.model.User;

public interface BookingRepository extends JpaRepository<Booking, String>{

    

    List<Booking> findByUser(User user);
    
}
