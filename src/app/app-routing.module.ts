import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: 'lista', component: ListaComponent },
  { path: 'navbar', component: NavbarComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
