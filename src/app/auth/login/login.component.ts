import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacaoService } from '../autenticacao.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide = true;

  formLogin!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder,
    private authService: AutenticacaoService,
    private route: Router){}

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
    if(!this.formLogin.valid){
      return;
    }
    this.authService.login(this.formLogin.getRawValue()).subscribe(user => {
      this.route.navigate(['home'])
    },(error) => {
      alert('erro ao tentar fazer o login')
    });
  }

}
