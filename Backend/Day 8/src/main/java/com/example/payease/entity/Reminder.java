package com.example.payease.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name="reminder_details")
public class Reminder {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int reminderId;
	
	@NotNull
	@ManyToOne
    @JoinColumn(name = "recipient_id")
    private Users recipient;
	
	@NotNull
	private double amount;
	@NotNull
	private String date;
	@NotNull
	private String status;
	
	
	public Reminder() {}
	
	public Reminder(int reminderId, Users recipient, double amount, String date, String status) {
		super();
		this.reminderId = reminderId;
		this.recipient = recipient;
		this.amount = amount;
		this.date = date;
		this.status = status;
	}
	
	public int getReminderId() {
		return reminderId;
	}
	public void setReminderId(int reminderId) {
		this.reminderId = reminderId;
	}
	public Users getRecipient() {
		return recipient;
	}
	public void setRecipient(Users recipient) {
		this.recipient = recipient;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	
}
