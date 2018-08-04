package com.assesment.test.repository;

import org.springframework.data.repository.CrudRepository;

import com.assesment.test.entity.Device;



public interface DeviceRepository extends CrudRepository<Device, Long> {

}
