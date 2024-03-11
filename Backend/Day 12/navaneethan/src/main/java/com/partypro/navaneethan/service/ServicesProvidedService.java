package com.partypro.navaneethan.service;

import java.util.List;
import java.util.Optional;

import com.partypro.navaneethan.dto.request.ServicesProvidedRequest;
import com.partypro.navaneethan.dto.response.RegisterResponse;
import com.partypro.navaneethan.model.ServicesProvided;

public interface ServicesProvidedService {

    RegisterResponse addService(ServicesProvidedRequest request);

    List<ServicesProvided> getAllServices();

    Optional<ServicesProvided> findById(String id);

    RegisterResponse deleteService(String id);

}
