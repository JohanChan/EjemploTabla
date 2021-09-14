import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import { RegistroComponent } from './component/registro/registro.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { CursosComponent } from './component/cursos/cursos.component';

const routes: Routes = [
  {
    path: 'Login',
    component: LoginComponent,
  },
  {
    path: 'Principal',
    component: PrincipalComponent,
  },
  {
    path: 'Registro',
    component: RegistroComponent,
  },
  {
    path: 'Cursos',
    component: CursosComponent
  },
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
