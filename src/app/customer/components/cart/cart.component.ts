import { DemoAngularMaterialModule } from './../../../DemoAngularMaterialModule';
import { CustomerService } from './../../services/customer.service';
import { CustomerComponent } from './../../customer.component';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [DemoAngularMaterialModule, CommonModule, ReactiveFormsModule, RouterOutlet],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
increaseQuantity(arg0: any) {
throw new Error('Method not implemented.');
}
decreaseQuantity(arg0: any) {
throw new Error('Method not implemented.');
}
applyCoupon() {
throw new Error('Method not implemented.');
}
couponForm: FormGroup<any>;
placeOrder() {
throw new Error('Method not implemented.');
}

  cartItems: any[] = [];
  order: any;

  constructor(private CustomerService: CustomerService,
    private snackba: MatSnackBar,
    private fb: FormBuilder,
    public dialog: MatDialog,){}

    ngOnInit(): void {
      this.getCart();
    }


    getCart(){
      this.cartItems = [];
      this.CustomerService.getCartByUserId().subscribe(res => {
        this.order = res;
        res.cartItems.forEach(element => {
          element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
          this.cartItems.push(element);
        });
      })
    }

}
