import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { TemplateFormRoutingModule } from './template-form-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomerSignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateFormRoutingModule
  ]
})
export class TemplateFormModule { }
