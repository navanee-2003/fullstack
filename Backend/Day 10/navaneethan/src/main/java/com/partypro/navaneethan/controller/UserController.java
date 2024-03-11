package com.partypro.navaneethan.controller;

import static com.partypro.navaneethan.utils.MyConstant.FORGOT_PASSWORD;
import static com.partypro.navaneethan.utils.MyConstant.USER;

import java.security.Principal;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.partypro.navaneethan.dto.request.BookingRequest;
import com.partypro.navaneethan.dto.request.PasswordRequest;
import com.partypro.navaneethan.dto.response.RegisterResponse;
import com.partypro.navaneethan.service.BookingService;
import com.partypro.navaneethan.service.UserService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping(USER)
@PreAuthorize("hasAnyRole('USER', 'ADMIN')")
@Tag(name = "USER")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final BookingService bookingService;

    @GetMapping
    @PreAuthorize("hasAnyAuthority('user:read', 'admin:read')")
    public String get() {
        return "GET:: user controller";
    }

    @PatchMapping(FORGOT_PASSWORD)
    @PreAuthorize("hasAnyAuthority('user:update', 'admin:update')")
    // @Hidden
    public ResponseEntity<?> forgotPassword(PasswordRequest request, Principal principal) {
        userService.forgotPassword(request, principal);
        return ResponseEntity.ok().body("Password changed successfully");
    }

    @PostMapping("/requestService")
    @PreAuthorize("hasAnyAuthority('user:create', 'admin:create')")
    public ResponseEntity<?> requestService(@RequestBody BookingRequest request, @RequestParam String user_id) {
        try {
            RegisterResponse response = new RegisterResponse();
            response = bookingService.requestService(request, user_id);
            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping("/getBookings/")
    @PreAuthorize("hasAnyAuthority('user:read', 'admin:read')")
    public ResponseEntity<?> getBookingsByUserId(@RequestParam String user_id) {
        try {
            return new ResponseEntity<>(bookingService.getBookingsByUserId(user_id), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping("/getBooking/{id}")
    @PreAuthorize("hasAnyAuthority('user:read', 'admin:read')")
    public ResponseEntity<?> getBookingById(@PathVariable String id) {
        try {
            return new ResponseEntity<>(bookingService.getBookingById(id), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping("/getBookingData/{id}")
    @PreAuthorize("hasAnyAuthority('user:read', 'admin:read')")
    public ResponseEntity<?> getBookingDataById(@PathVariable String id) {
        try {
            return new ResponseEntity<>(bookingService.getBookingDataById(id), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }
}
