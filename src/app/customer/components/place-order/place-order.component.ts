import { DemoAngularMaterialModule } from './../../../DemoAngularMaterialModule';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../../services/customer.service';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-place-order',
  standalone: true,
  imports: [DemoAngularMaterialModule, ReactiveFormsModule, CommonModule],
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.scss'
})
export class PlaceOrderComponent {

  orderForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private customerService: CustomerService,
    private router: Router,
    private dialog: MatDialog
  ){}

  ngOnInit(){
    this.orderForm = this.fb.group({
      address: [null, [Validators.required]],
      orderDescription: [null],
    })
  }

  placeOrder(){
    this.customerService.placeOrder(this.orderForm.value).subscribe(res => {
      if (res.id != null){
        this.snackBar.open("Order placed successfully", "Close", { duration: 5000})
        this.router.navigateByUrl("/customer/my-orders");
        this.closeForm();
      }else{
        this.snackBar.open("Something went wrong", "Close", { duration: 5000})
      }
    })
  }

  closeForm(){
    this.dialog.closeAll();
  }

}
