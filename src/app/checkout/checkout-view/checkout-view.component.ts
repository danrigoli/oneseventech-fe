import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from 'src/app/shared/interfaces/payment.interface';
import { PaymentsService } from 'src/app/shared/services/payments.service';
import { ToastrService } from 'ngx-toastr';
import { Country } from 'src/app/shared/interfaces/country.interface';
import { CountriesService } from 'src/app/shared/services/countries.service';

@Component({
  selector: 'app-checkout-view',
  templateUrl: './checkout-view.component.html',
  styleUrls: ['./checkout-view.component.scss']
})
export class CheckoutViewComponent implements OnInit {
  year = new Date().getFullYear();
  checkoutForm = this.formBuilder.group({
    name: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    address: [null, Validators.required],
    city: [null, Validators.required],
    state: [null, Validators.required],
    country: [null, Validators.required],
    zip: [null, Validators.required],
    cardNumber: ["4242424242424242", [Validators.required, Validators.max(9999999999999999), Validators.min(1000000000000000)]],
    expiryMonth: [null, [Validators.required, Validators.max(12), Validators.min(1)]],
    expiryYear: [null, [Validators.required, Validators.min(this.year)]],
    cvc: [null, [Validators.required, Validators.minLength(3)]]
  });;

  payment!: Payment;
  countries: Country[] = []
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private paymentsService: PaymentsService,
    private countriesService: CountriesService,
    private toastr: ToastrService
    ) {}

  ngOnInit(): void {
    this.paymentsService.getPayment(this.route.snapshot.params['id']).subscribe((data) => {
      this.payment = data;      
    });
    this.countriesService.getAll().subscribe((data) => {
      this.countries = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
    });
  }

  isInvalid(control: string) {
    return this.checkoutForm.get(control)?.invalid && this.checkoutForm.get(control)?.touched;
  }

  onSubmit() {
    this.loading = true;
    if (this.checkoutForm.valid) {      
      this.paymentsService.confirmPayment(this.route.snapshot.params['id'], this.checkoutForm.value).subscribe({ 
      next: (data) => {
        this.router.navigate(['/checkout/success/' + this.route.snapshot.params['id']]);
      }, 
      error: (error) => {
        this.toastr.error(error.error.message);
        this.loading = false;
        }
      });
    } else {
      for (const control in this.checkoutForm.controls) {
        console.log(this.checkoutForm.get(control)?.errors)
      }
      this.toastr.error('Please fill out the form correctly');
      this.checkoutForm.markAllAsTouched();      
      this.loading = false;
    }
  }

}
