import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TodosComponent } from './components/todos/todos.component';
import { EnsureAuthenticatedService } from './services/ensure-authenticated.service';
import { AlreadyLoggedService } from './services/already-logged.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AlreadyLoggedService],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AlreadyLoggedService],
  },

  {
    path: 'todos',
    component: TodosComponent,
    canActivate: [EnsureAuthenticatedService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
