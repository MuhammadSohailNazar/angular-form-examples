import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';

const routes: Routes = [
  {path:'template/customersignup',component: CustomerSignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateFormRoutingModule { }
