import { CommonModule } from '@angular/common';
import { DemoAngularMaterialModule } from './../../../../DemoAngularMaterialModule';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-by-status',
  standalone: true,
  imports: [DemoAngularMaterialModule, CommonModule],
  templateUrl: './order-by-status.component.html',
  styleUrl: './order-by-status.component.scss'
})
export class OrderByStatusComponent {
  @Input() data:any;

}
