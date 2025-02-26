import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BrandFilterComponent} from './components/brands/brands-list/brand-filter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BrandFilterComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'motograph-front';
}
