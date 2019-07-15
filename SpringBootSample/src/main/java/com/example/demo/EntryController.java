package com.example.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class EntryController {

	@RequestMapping("/greet")
	public String getMessage() {
		return "Hello AWS";
	}
}
