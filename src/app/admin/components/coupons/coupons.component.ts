import { DemoAngularMaterialModule } from './../../../DemoAngularMaterialModule';
import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { DateAdapter } from '@angular/material/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-coupons',
  standalone: true,
  imports: [DemoAngularMaterialModule, DatePipe
  ],
  templateUrl: './coupons.component.html',
  styleUrl: './coupons.component.scss'
})
export class CouponsComponent {

  coupons: any;
  constructor(private adminService: AdminService){}


  ngOnInit(){
    this.getCoupons();
  }

  getCoupons(){
    this.adminService.getCoupons().subscribe(res => {
      this.coupons = res;
    })
  }

}
