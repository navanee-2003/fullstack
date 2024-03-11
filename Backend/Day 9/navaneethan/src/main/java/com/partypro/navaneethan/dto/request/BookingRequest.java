package com.partypro.navaneethan.dto.request;

import java.time.LocalDateTime;
import java.util.Date;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookingRequest {
    private String title;
    private String category;
    private String instructions;
    private String location;
    private long proposedBudget;
    private Date dateTime;
}
