import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from 'src/app/shared/interfaces/payment.interface';
import { PaymentsService } from 'src/app/shared/payments.service';

@Component({
  selector: 'app-checkout-view',
  templateUrl: './checkout-view.component.html',
  styleUrls: ['./checkout-view.component.scss']
})
export class CheckoutViewComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    name: [null, Validators.required],
    email: [null, Validators.required],
    address: [null, Validators.required],
    city: [null, Validators.required],
    country: [null, Validators.required],
    zip: [null, Validators.required],
  });;

  payment!: Payment;

  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private paymentsService: PaymentsService) {}

  ngOnInit(): void {
    this.paymentsService.getPayment(this.route.snapshot.params['id']).subscribe((data) => {
      this.payment = data;      
    });
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      console.log(this.checkoutForm.value);
      
      this.paymentsService.confirmPayment(this.route.snapshot.params['id'], this.checkoutForm.value).subscribe(() => {
        this.router.navigate(['/checkout/success/' + this.route.snapshot.params['id']]);
      });
    }
  }

}
