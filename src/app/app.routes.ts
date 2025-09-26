import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayout } from './core/layouts/main-layout/main-layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Catalogo } from './pages/catalogo/catalogo';
import { Clientes } from './pages/clientes/clientes';
import { Productos } from './pages/productos/productos';
import { Pagos } from './pages/pagos/pagos';
import { Usuarios } from './pages/usuarios/usuarios';
import { Creditos } from './pages/creditos/creditos';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Catalogo }, // página inicial
      { path: 'dashboard', component: Dashboard},
      { path: 'clientes', component: Clientes },
      { path: 'productos', component: Productos },
      { path: 'pagos', component: Pagos },
      { path: 'usuarios', component: Usuarios },
      { path: 'creditos', component: Creditos }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
