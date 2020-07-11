
import { NgModule } from '@angular/core';
import { Routes, CanActivate , RouterModule} from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { 
  AuthGuardService as AuthGuard 
} from '../_service/auth-guard.service';
import { 
  RoleGuardService as RoleGuard 
} from '../_service/role-guard.service';
export const routes: Routes = [
 
  
  { path: 'home', component: HomeComponent },
   { path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard] 
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
 
  // { path: 'user', component: BoardUserComponent },
  // { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', 
  component: AdminComponent,
  canActivate: [RoleGuard], 
  data: { 
    expectedRole: 'admin'
  } 
},
 { path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }