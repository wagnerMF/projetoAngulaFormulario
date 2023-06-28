import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroService } from '../cadastro.service';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

    cadastroForm!:FormGroup;

    constructor(
        private construction:FormBuilder,
        private cadastroService: CadastroService,
        private rotas: Router) {}



  ngOnInit(): void {
      this.cadastroForm = this.construction.group({

        userName:['',[
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10)
        ]],
        email:['',[
          Validators.required,
          Validators.email
        ]],
        password:['',[
          Validators.required,
          Validators.minLength(4)
        ]],
      })
  }

  // getForm(form: string) {
  //   return this.cadastroForm.get(form);
  // }

  get f() { return this.cadastroForm.controls; }

  cadastrarUsuario(){

    if(this.cadastroForm.valid && !this.cadastroForm.pending){
      const novaUsuario = this.cadastroForm.getRawValue() as Usuario

      this.cadastroService
      .cadastroUsuario(novaUsuario)
      .subscribe(
          () => this.rotas.navigate(['']),
          err => console.log(err)
      );
      console.log('Dados: "' + JSON.stringify(novaUsuario));
    }
  }
}
