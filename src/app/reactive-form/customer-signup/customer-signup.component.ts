import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.scss']
})
export class CustomerSignupComponent implements OnInit {
  customerForm: FormGroup;
  customer = new Customer();
  constructor(private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      emailGroup: this.fb.group(
        {
          email: ['', [Validators.required, Validators.email]],
          confirmEmail: ['', [Validators.required]]
        }, {
        validators: emailMatcher
      }
      ),
      phone: '',
      notification: 'email',
      sendCatalog: true,
      rating: ['', ratingRange(1, 5)]
    });
  }

  ngOnInit() { }

  save(): void {
    console.log(this.customerForm);
    console.log(`Saved: ${JSON.stringify(this.customerForm?.valid)}`)
  }

  populateTestValue() {
    this.customerForm?.setValue({
      firstName: 'sohail',
      lastName: 'nazar',
      emailGroup: { email: 'sohai@tcig.co', confirmEmail: 'sohail@tcig.co' },
      sendCatalog: false,
      phone: '35221122',
      notification: 'email',
      rating: 3
    });
  }

  populateTestNameValue() {
    this.customerForm?.patchValue({
      firstName: 'Sohail'
    });
  }

  setNotification(notifyVia: string): void {
    const phoneControl = this.customerForm?.get('phone');
    if (notifyVia == "text") {
      phoneControl?.setValidators(Validators.required);
    } else {
      phoneControl?.clearValidators();
    }
    phoneControl?.updateValueAndValidity();
  }

}

function ratingRange(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (c.value != undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
      return { range: true };
    } else {
      return null;
    }
  }
}

function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  let emailControl = c.get('email');
  let confirmControl = c.get("confirmEmail");
  if (emailControl?.pristine || emailControl?.pristine) return null;
  else if (emailControl?.value === confirmControl?.value) return null;
  else return { match: true };
}
