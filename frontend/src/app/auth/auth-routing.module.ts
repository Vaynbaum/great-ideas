import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth.component';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [{
  path: 'auth',
  component: AuthPageComponent,
  children: [
    {
      path: 'registration',
      component: RegistrationComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
