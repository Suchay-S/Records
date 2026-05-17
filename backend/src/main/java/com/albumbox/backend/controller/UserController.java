package com.albumbox.backend.controller;

import com.albumbox.backend.model.AppUser;
import com.albumbox.backend.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserRepository repo;

    public UserController(UserRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<AppUser> getUsers() {
        return repo.findAll();
    }

    @PostMapping
    public AppUser createUser(@RequestBody AppUser user) {
        return repo.save(user);
    }
}