package com.partypro.navaneethan.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.partypro.navaneethan.dto.request.ServicesProvidedRequest;
import com.partypro.navaneethan.dto.response.RegisterResponse;
import com.partypro.navaneethan.model.ServicesProvided;
import com.partypro.navaneethan.repository.ServicesProvidedRepository;
import com.partypro.navaneethan.service.ServicesProvidedService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ServicesProvidedServiceImpl implements ServicesProvidedService{

    private final ServicesProvidedRepository repository;

    @Override
    public RegisterResponse addService(ServicesProvidedRequest request) {
        var service = ServicesProvided
        .builder()
        .title(request.getTitle())
        .minPrice(request.getMinPrice())
        .maxPrice(request.getMaxPrice())
        .description(request.getDescription())
        .location(request.getLocation())
        .imageUrl(request.getImageUrl())
        .build();

        repository.save(service);

        return RegisterResponse.builder().message("New service added").build();
    }

    @Override
    public List<ServicesProvided> getAllServices() {
        return repository.findAll();
    }

    @Override
    public Optional<ServicesProvided> findById(String id) {
        return repository.findById(id);
    }

    @Override
    public RegisterResponse deleteService(String id) {
        repository.deleteById(id);
        return RegisterResponse.builder().message("Service deleted with ID" + id).build();
    }

}
