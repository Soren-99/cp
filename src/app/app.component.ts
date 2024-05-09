import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DemoAngularMaterialModule } from './DemoAngularMaterialModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule,
    DemoAngularMaterialModule, FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
closeMenu() {
throw new Error('Method not implemented.');
}
isMenuOpen: any;
toggleMenu() {
throw new Error('Method not implemented.');
}
  title = 'cp';
}

