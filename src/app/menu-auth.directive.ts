import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AutenticacaoService } from './auth/autenticacao.service';

@Directive({
  selector: '[appMenuAuth]',
})
export class MenuAuthDirective implements OnInit{

  @Input('appMenuAuth') acesso: string = '';

  constructor(
    private authService: AutenticacaoService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  ngOnInit(): void {
    
    const user = this.authService.getRoles();

    if(user.acesso.includes(this.acesso)){
      this.viewContainer.createEmbeddedView(this.templateRef)
    }else{
      this.viewContainer.clear();
    }


  }

}
