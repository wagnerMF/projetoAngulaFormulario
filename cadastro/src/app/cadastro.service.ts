import { Injectable, importProvidersFrom } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';


const api = "http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class CadastroService {


  constructor(private http:HttpClient) { }

  cadastroUsuario(novaUsuario: Usuario){
    return this.http.post(api + '/user/new', novaUsuario)
  }
}
