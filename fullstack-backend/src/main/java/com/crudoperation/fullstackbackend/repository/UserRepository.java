package com.crudoperation.fullstackbackend.repository;

import com.crudoperation.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

}
