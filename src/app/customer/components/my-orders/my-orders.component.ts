import { DemoAngularMaterialModule } from './../../../DemoAngularMaterialModule';
import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-my-orders',
  standalone: true,
  imports: [DemoAngularMaterialModule, DatePipe, RouterOutlet, RouterLink, CommonModule],
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.scss'
})
export class MyOrdersComponent {

  myOrders: any;

  constructor(private customerService: CustomerService){}

  ngOnInit(){
    this.getMyOrders();
  }

  getMyOrders(){
    this.customerService.getOrdersByUserId().subscribe(res => {
      this.myOrders = res;
    })
  }

}
