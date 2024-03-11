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
@Table(name="transaction_details")
public class Transaction {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int transactionId;
	@NotNull
	private double amount;
	@NotNull
	@ManyToOne
    @JoinColumn(name = "sender_id")
    private Users sender;
	@NotNull
    @ManyToOne
    @JoinColumn(name = "recipient_id")
    private Users recipient;
    
    public Transaction() {}
    
	public Transaction(int transactionId, double amount, Users sender, Users recipient) {
		super();
		this.transactionId = transactionId;
		this.amount = amount;
		this.sender = sender;
		this.recipient = recipient;
	}
	public int getTransactionId() {
		return transactionId;
	}
	public void setTransactionId(int transactionId) {
		this.transactionId = transactionId;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public Users getSender() {
		return sender;
	}
	public void setSender(Users sender) {
		this.sender = sender;
	}
	public Users getRecipient() {
		return recipient;
	}
	public void setRecipient(Users recipient) {
		this.recipient = recipient;
	}
    
    
}
