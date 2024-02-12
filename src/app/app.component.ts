import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HousesComponent } from './houses/houses.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,HeaderComponent,RouterLink,RouterLinkActive,RouterModule,HousesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hogwarts-app';
}
