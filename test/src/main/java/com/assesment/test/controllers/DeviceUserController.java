package com.assesment.test.controllers;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.assesment.model.ApiResponseMessage;
import com.assesment.test.entity.Device;
import com.assesment.test.entity.User;
import com.assesment.test.repository.DeviceRepository;
import com.assesment.test.repository.UserRepository;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/api/device")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class DeviceUserController 
{	
	private static final Logger log = LoggerFactory.getLogger(DeviceUserController.class);
	@Autowired
	DeviceRepository repository;
	ObjectMapper mapper= new ObjectMapper();
	@RequestMapping("/findall")
    public ResponseEntity<List<Device>> findAllDevice(){
           List<Device> allusers=new ArrayList<Device>();
           repository.findAll().forEach(allusers::add);
          // log.info(allusers.toString());
           allusers.forEach(s -> log.info(s.toString()));
		/*ApiResponseMessage response=new ApiResponseMessage(4,Thread.currentThread().getStackTrace()[1].getMethodName(), mapper.convertValue(allusers, JsonNode.class));*/
        return new ResponseEntity<List<Device>>(allusers,HttpStatus.OK);
    }
	@PostMapping("/save")
    public ResponseEntity<ApiResponseMessage> saveUser(@RequestBody Device device){
		device.setCreatedAt(Calendar.getInstance().getTime());
		ApiResponseMessage response=new ApiResponseMessage(4,Thread.currentThread().getStackTrace()[1].getMethodName(), mapper.convertValue(repository.save(device), JsonNode.class));
        return new ResponseEntity<ApiResponseMessage>(response,HttpStatus.CREATED);
    }

}
