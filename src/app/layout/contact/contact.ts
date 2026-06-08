import { Component, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

// Email pattern: requires an "@", a dot, and a TLD of at least 2 letters.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private fb = inject(FormBuilder);

  submitted = signal(false);

  form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    privacyAccepted: [false, Validators.requiredTrue],
  });

  get name(): AbstractControl {
    return this.form.controls['name'];
  }

  get email(): AbstractControl {
    return this.form.controls['email'];
  }

  get message(): AbstractControl {
    return this.form.controls['message'];
  }

  get privacyAccepted(): AbstractControl {
    return this.form.controls['privacyAccepted'];
  }

  /** A field shows an error once it was touched or the form was submitted. */
  showError(control: AbstractControl): boolean {
    return control.invalid && (control.touched || this.submitted());
  }

  showSuccess(control: AbstractControl): boolean {
    return control.valid;
  }

  togglePrivacy(): void {
    this.privacyAccepted.setValue(!this.privacyAccepted.value);
    this.privacyAccepted.markAsTouched();
  }

  onSubmit(): void {
    this.submitted.set(true);
    if (this.form.invalid) return;
    // TODO: send logic here
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
