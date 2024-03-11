package com.example.payease.entity;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name="card_details")
public class CardDetails {
	@Id
	private double cardNumber;
	@NotNull
	@ManyToOne
    @JoinColumn(name = "card_holder")
    private Users cardHolder;
	@NotNull
	private String cardHolderName;
	@NotNull
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern="MM-YYYY")
	private Date expiryDate;
	@NotNull
	private int cvv;
	
	public CardDetails() {}
	
	public CardDetails(double cardNumber, Users cardHolder, String cardHolderName, Date expiryDate, int cvv) {
		super();
		this.cardNumber = cardNumber;
		this.cardHolder = cardHolder;
		this.cardHolderName = cardHolderName;
		this.expiryDate = expiryDate;
		this.cvv = cvv;
	}
	public double getCardNumber() {
		return cardNumber;
	}
	public void setCardNumber(double cardNumber) {
		this.cardNumber = cardNumber;
	}
	public Users getCardHolder() {
		return cardHolder;
	}
	public void setCardHolder(Users cardHolder) {
		this.cardHolder = cardHolder;
	}
	public String getCardHolderName() {
		return cardHolderName;
	}
	public void setCardHolderName(String cardHolderName) {
		this.cardHolderName = cardHolderName;
	}
	public Date getExpiryDate() {
		return expiryDate;
	}
	public void setExpiryDate(Date expiryDate) {
		this.expiryDate = expiryDate;
	}
	public int getCvv() {
		return cvv;
	}
	public void setCvv(int cvv) {
		this.cvv = cvv;
	}
	
	
}
