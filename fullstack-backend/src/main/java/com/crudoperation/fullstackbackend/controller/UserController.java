package com.crudoperation.fullstackbackend.controller;

import com.crudoperation.fullstackbackend.exception.UserNotFoundException;
import com.crudoperation.fullstackbackend.model.User;
import com.crudoperation.fullstackbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<User> getAll() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Integer id) {
        return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Integer id) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setUsername(newUser.getUsername());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    return userRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Integer id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        else{
            userRepository.deleteById(id);
            return "User with id " + id +" has been deleted success.";
        }
    }


}
