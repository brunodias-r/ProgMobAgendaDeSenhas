package br.com.agendadesenha.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.agendadesenha.entity.Senha;
import br.com.agendadesenha.service.SenhaService;

@RestController
@RequestMapping("/api/agenda")
public class SenhaController {
	
	@Autowired
	private SenhaService senhaService;
	
	@GetMapping
	public List<Senha> listarTodas() {
		return senhaService.buscarTodas();
	}
	
//	@GetMapping
//	public ResponseEntity<Senha> listarTodas() {
//		Senha u = new Senha("twitter", "fulano@gmail.com", "twitter@1234", new Date());
//		return ResponseEntity.ok().body(u);
//	}
	
	@GetMapping("/{id}")
	public <Optional>Senha buscarPorId(@PathVariable Integer id) {
		return senhaService.buscarPorId(id);
	}
	
	@PostMapping
	public Senha salvar(@RequestBody Senha senha) {
		return senhaService.salvar(senha);
	}

	
	
}
