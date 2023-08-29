import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AutenticacaoService } from '../auth/autenticacao.service';

export const authGuardsGuard: CanActivateFn = (route, state) => {


 const authService = inject(AutenticacaoService);

 const user = authService.getRoles();

  return true;
};
