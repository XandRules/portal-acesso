import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide = true;

  formLogin!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario(): void{
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email ]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  login(){
    console.log(this.formLogin);
  }

}
