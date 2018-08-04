package com.assesment.test.entity;

import java.awt.Menu;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.print.attribute.standard.Media;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

@Entity
@Table(name = "device")
public class Device {
	@Id
	@GeneratedValue(strategy = GenerationType.TABLE)
	@Column(name = "ID")
	private Long id;
	
	@Column(name = "NAME")
	private String name;
	
	@Column(name = "FUEL_FORMULA")
	private String fuelFormula;
	
	@Column(name = "MANUFACTURER_ID")
	private String menufecturerId;
	
	
	public Device() {
		// TODO Auto-generated constructor stub
		super();
	}
	
	
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getFuelFormula() {
		return fuelFormula;
	}
	public void setFuelFormula(String fuelFormula) {
		this.fuelFormula = fuelFormula;
	}
	public String getMenufecturerId() {
		return menufecturerId;
	}
	public void setMenufecturerId(String menufecturerId) {
		this.menufecturerId = menufecturerId;
	}
	
	
	
	@Column(nullable = true, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date createdAt;

	@Column(nullable = true)
	@Temporal(TemporalType.TIMESTAMP)
	@LastModifiedDate
	private Date updatedAt;


	public Date getCreatedAt() {
		return createdAt;
	}


	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}


	public Date getUpdatedAt() {
		return updatedAt;
	}


	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
	
	
	
	@Override
	public String toString() {
		return "User [id=" + id + ", Name=" + name + ", fuelformula="
				+ fuelFormula + ", MID=" + menufecturerId + ", createdAt=" + createdAt
				+ ", updatedAt=" + updatedAt + "]";
	}
	
	public Device(Long id, String name, String fuelFormula, String mId){
		super();
		this.id=id;
		this.name=name;
		this.fuelFormula=fuelFormula;
		this.menufecturerId=mId;
	}
}
