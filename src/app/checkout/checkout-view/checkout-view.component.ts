import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from 'src/app/shared/interfaces/payment.interface';
import { PaymentsService } from 'src/app/shared/payments.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout-view',
  templateUrl: './checkout-view.component.html',
  styleUrls: ['./checkout-view.component.scss']
})
export class CheckoutViewComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    name: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    address: [null, Validators.required],
    city: [null, Validators.required],
    state: [null, Validators.required],
    country: ["United States", Validators.required],
    zip: [null, Validators.required],
    cardNumber: ["4242424242424242", [Validators.required, Validators.max(9999999999999999), Validators.min(1000000000000000)]],
    expiryMonth: [null, Validators.required],
    expiryYear: [null, Validators.required],
    cvc: [null, [Validators.required, Validators.max(999), Validators.min(100)]]
  });;

  payment!: Payment;

  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private paymentsService: PaymentsService,
    private toastr: ToastrService
    ) {}

  ngOnInit(): void {
    this.paymentsService.getPayment(this.route.snapshot.params['id']).subscribe((data) => {
      this.payment = data;      
    });
    this.checkoutForm.get('country')?.disable();
  }

  onSubmit() {
    this.loading = true;
    if (this.checkoutForm.valid) {      
      this.paymentsService.confirmPayment(this.route.snapshot.params['id'], this.checkoutForm.value).subscribe((data) => {
        this.router.navigate(['/checkout/success/' + this.route.snapshot.params['id']]);
      }, (error) => {
        this.toastr.error(error.error.message);
        this.loading = false;
        });
    } else {
      this.toastr.error('Please fill out the form correctly');
      this.loading = false;
    }
  }

}
