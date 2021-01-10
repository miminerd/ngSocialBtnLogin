import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleLoginComponent } from './components/google-login/google-login.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'google',      component: GoogleLoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
