// src/app/app.component.ts
import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router'; // 👈 Importa RouterOutlet

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet], // 👈 Reemplaza ProductListComponent por RouterOutlet
  template: `
    <app-header></app-header>
    <div class="container">
      <router-outlet></router-outlet> </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}