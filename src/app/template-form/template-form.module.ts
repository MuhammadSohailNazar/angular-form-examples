import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { TemplateFormRoutingModule } from './template-form-routing.module';



@NgModule({
  declarations: [
    CustomerSignupComponent
  ],
  imports: [
    CommonModule,
    TemplateFormRoutingModule
  ]
})
export class TemplateFormModule { }
