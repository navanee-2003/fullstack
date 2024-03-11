package com.partypro.navaneethan.service;

import java.util.List;
import java.util.Optional;

import com.partypro.navaneethan.dto.request.BookingRequest;
import com.partypro.navaneethan.dto.response.CustomBookingResponse;
import com.partypro.navaneethan.dto.response.RegisterResponse;
import com.partypro.navaneethan.model.Booking;

public interface BookingService {

    RegisterResponse requestService(BookingRequest request, String user_id);

    List<Booking> getAll();

    RegisterResponse acceptOrRejectRequest(String id);

    List<Booking> getBookingsByUserId(String user_id);

    Optional<Booking> getBookingById(String id);

    CustomBookingResponse getBookingDataById(String id);

}
