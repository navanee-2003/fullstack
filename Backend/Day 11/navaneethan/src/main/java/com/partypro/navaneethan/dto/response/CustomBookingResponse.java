package com.partypro.navaneethan.dto.response;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomBookingResponse {
    private String title;
    private String category;
    private String instructions;
    private String location;
    private long proposedBudget;
    private Date dateTime;
}
