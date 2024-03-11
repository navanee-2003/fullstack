package com.partypro.navaneethan.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ServicesProvidedRequest {
    private String title;
    private long minPrice;
    private long maxPrice;
    private String description;
    private String location;
    private String imageUrl;
}
