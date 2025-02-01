package com.ReactPractice.view.controller;


import java.util.Date;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReactController {
	@GetMapping("/hello")
	public String hello() {
		return "안녕하세요. 현재 서버시간은 " + new Date() + "입니다. \n";
	}
}