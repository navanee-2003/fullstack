package com.example.payease.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name="user_details")
public class Users {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@NotNull
	private long identificationNumber;
	@NotNull
	private String username;
	@NotNull
	private String password;
	@NotNull
	private String email;
	
	public Users() {}
	
	public Users(int id, long identificationNumber, String username, String password, String email) {
		super();
		this.id = id;
		this.identificationNumber = identificationNumber;
		this.username = username;
		this.password = password;
		this.email = email;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public long getIdentificationNumber() {
		return identificationNumber;
	}
	public void setIdentificationNumber(long identificationNumber) {
		this.identificationNumber = identificationNumber;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	
}
