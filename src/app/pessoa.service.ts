import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  url: string = "https://g3e99fc358a3389-pessoahobbiesrest.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/pessoas/"

  constructor( private httpClient: HttpClient) { }

  adicionar(pessoa: Pessoa): void {
    this.httpClient.post(this.url, pessoa).subscribe((resposta) => {
      console.log(resposta)
    })
  }
}
