package com.partypro.navaneethan.service.impl;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.partypro.navaneethan.dto.request.BookingRequest;
import com.partypro.navaneethan.dto.response.CustomBookingResponse;
import com.partypro.navaneethan.dto.response.RegisterResponse;
import com.partypro.navaneethan.model.Booking;
import com.partypro.navaneethan.model.User;
import com.partypro.navaneethan.repository.BookingRepository;
import com.partypro.navaneethan.repository.UserRepository;
import com.partypro.navaneethan.service.BookingService;
import com.partypro.navaneethan.utils.JwtUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements BookingService {

    private final BookingRepository bookingRepository;
    private final UserRepository userRepository;

    @Override
    public RegisterResponse requestService(BookingRequest request, String user_id) {

        var user = userRepository.findById(user_id)
                .orElseThrow(() -> new NoSuchElementException("User not found with id: " + user_id));

        var booking = Booking
                .builder()
                .title(request.getTitle())
                .category(request.getCategory())
                .instructions(request.getInstructions())
                .location(request.getLocation())
                .proposedBudget(request.getProposedBudget())
                .dateTime(request.getDateTime())
                .user(user)
                .build();

        bookingRepository.save(booking);

        return RegisterResponse.builder().message("Your Party Request has been Recieved").build();

    }

    @Override
    public List<Booking> getAll() {
        return bookingRepository.findAll();
    }

    @Override
    public RegisterResponse acceptOrRejectRequest(String id) {
        var booking = bookingRepository.findById(id);

        if (booking.isPresent()) {
            booking.ifPresent(b -> {
                b.setAccepted(true);
                bookingRepository.save(b);
            });
            return RegisterResponse.builder().message("The Party request has been accepted").build();
        }

        return RegisterResponse.builder().message("Booking with requested ID not found" + id).build();
    }

    @Override
    public List<Booking> getBookingsByUserId(String user_id) {
        var user = userRepository.findById(user_id)
                .orElseThrow(() -> new NoSuchElementException("User not found with id: " + user_id));

        return bookingRepository.findByUser(user);
    }

    @Override
    public Optional<Booking> getBookingById(String id) {
        return bookingRepository.findById(id);
    }

    @Override
    public CustomBookingResponse getBookingDataById(String id) {
        var booking = bookingRepository.findById(id)
        .orElseThrow(() -> new NoSuchElementException("Booking not found with id: " + id));

        return CustomBookingResponse.builder()
        .title(booking.getTitle())
        .category(booking.getCategory())
        .location(booking.getLocation())
        .proposedBudget(booking.getProposedBudget())
        .instructions(booking.getInstructions())
        .dateTime(booking.getDateTime())
        .build();
    }

}
