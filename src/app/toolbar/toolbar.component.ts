import { Component, OnInit, inject } from '@angular/core';
import { AutenticacaoService } from '../auth/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent{

  user$ = this.autenticacaoService.getUser();
  
  constructor(private autenticacaoService: AutenticacaoService,
    private router: Router){}
  
  sair(){
    this.autenticacaoService.logout();
    this.router.navigateByUrl('')
  }

}
