package br.com.agendadesenha.service;

import java.util.List;
import java.util.Optional;

import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.agendadesenha.entity.Senha;
import br.com.agendadesenha.repository.SenhaRepository;

@Service
public class SenhaService {

	@Autowired
	private SenhaRepository senhaRepository;

	public List<Senha> buscarTodas() {
		return senhaRepository.findAll();
	}

	public Senha buscarPorId(Integer id) throws ObjectNotFoundException {
		String msg = "Senha não encontrada";
		Optional<Senha> senha = senhaRepository.findById(id);
		return senha.orElseThrow(() -> new ObjectNotFoundException(1L, msg));
	}

	public Senha salvar(Senha senha) {
		return senhaRepository.save(senha);
	}
	
	public void deletarPorId(Integer id) {
		senhaRepository.deleteById(id);
	}
	
	public Senha atualizar(String descricao, String password, String username, Senha senha) {
		senha.setDescricao(descricao);
		senha.setPassword(password);
		senha.setUsername(username);
		return senhaRepository.save(senha);
	}
}
