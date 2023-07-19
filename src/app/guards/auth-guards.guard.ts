import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AutenticacaoService } from '../auth/autenticacao.service';

export const authGuardsGuard: CanActivateFn = (route, state) => {


 const authService = inject(AutenticacaoService);

 const user = authService.getRoles();

 const acesso = route.data['acesso'];

 console.log('User', user);
 console.log('Rota acesso', acesso);


 if(user.acesso.includes(acesso)){
  return true;
 }


  return false;
};
