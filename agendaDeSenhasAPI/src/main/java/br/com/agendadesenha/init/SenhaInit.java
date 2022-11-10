package br.com.agendadesenha.init;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import br.com.agendadesenha.entity.Senha;
import br.com.agendadesenha.repository.SenhaRepository;
import br.com.agendadesenha.service.SenhaService;

@Component
public class SenhaInit implements ApplicationListener<ContextRefreshedEvent>{

	@Autowired
	private SenhaService senhaService;
	
	@Autowired
	private SenhaRepository senhaRepository;
	
	@Override
	public void onApplicationEvent(ContextRefreshedEvent event) {
		Senha senha1 = new Senha("facebook", "fulano@gmail.com", "face@1234", new Date());
		Senha senha2 = new Senha("instagram", "fulano@gmail.com", "insta@1234", new Date());
		Senha senha3 = new Senha("senac", "09450359842", "senac@1234", new Date());
		Senha senha4 = new Senha("twitter", "fulano@gmail.com", "twitter@1234", new Date());
		
		senhaService.salvar(senha1);		
		senhaService.salvar(senha2);
		senhaService.salvar(senha3);
		senhaService.salvar(senha4);
	}
}
