package com.partypro.navaneethan.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_services")
public class ServicesProvided {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private long minPrice;

    @Column(nullable = false)
    private long maxPrice;

    @Column(nullable = false)
    private String location;

    @Column(nullable = false)
    @Builder.Default
    private String organizer = "Evently";

    private String description;

    @Column(nullable = false)
    @Builder.Default
    private String imageUrl = "../../src/assets/images/default.jpg";
}
