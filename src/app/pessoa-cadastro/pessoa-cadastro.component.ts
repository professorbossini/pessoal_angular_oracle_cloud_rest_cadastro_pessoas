import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent{

  constructor (private pessoaService: PessoaService){}

  cadastrar(meuForm: NgForm){
    this.pessoaService.adicionar(meuForm.value)
  } 
}
