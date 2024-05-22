import { DemoAngularMaterialModule } from './../../../DemoAngularMaterialModule';
import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { CommonModule, DatePipe } from '@angular/common';
import { OrderByStatusComponent } from "./order-by-status/order-by-status.component";

@Component({
    selector: 'app-analytics',
    standalone: true,
    templateUrl: './analytics.component.html',
    styleUrl: './analytics.component.scss',
    imports: [DemoAngularMaterialModule, CommonModule, OrderByStatusComponent]
})
export class AnalyticsComponent {

  data:any;

  constructor(private adminService: AdminService){}


  ngOnInit(){
    this.adminService.getAnalytics().subscribe(res =>{
      console.log(res);
      this.data = res;
    })
  }
}
