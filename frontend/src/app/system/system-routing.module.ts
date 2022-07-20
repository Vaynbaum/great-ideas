import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guard/auth.guard';
import { IdeasComponent } from './ideas/ideas.component';
import { EditAccountComponent } from './profile/edit-account/edit-account.component';
import { ProfileComponent } from './profile/profile.component';
import { PublicComponent } from './public/public.component';
import { ShopComponent } from './shop/shop.component';
import { SystemComponent } from './system.component';

const routes: Routes = [
  {
    path: '',
    component: SystemComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: PublicComponent,
      },
      {
        path: 'account',
        component: ProfileComponent,
      },
      {
        path: 'account-edit',
        component: EditAccountComponent,
      },
      {
        path: 'ideas',
        component: IdeasComponent,
      },
      {
        path: 'shop',
        component: ShopComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRoutingModule {}
