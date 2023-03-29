import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {SecuredPageComponent} from "./pages/secured-page/secured-page.component";
import {AuthorizedGuard} from "./guards";

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: LoginPageComponent },
  { path: 'secured', component: SecuredPageComponent, canActivate: [AuthorizedGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
