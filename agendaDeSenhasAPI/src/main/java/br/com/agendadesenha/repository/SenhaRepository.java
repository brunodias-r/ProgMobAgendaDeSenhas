package br.com.agendadesenha.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.com.agendadesenha.entity.Senha;

@Repository
public interface SenhaRepository extends JpaRepository<Senha, Integer>{

}
