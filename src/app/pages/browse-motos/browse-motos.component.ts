import { Component } from '@angular/core';
import {BrandFilterComponent} from '../../components/brands/brands-list/brand-filter.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {MatSidenavContainer, MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-browse-motos',
  imports: [
    BrandFilterComponent,
    MatSliderModule,

    MatSidenavModule
  ],
  templateUrl: './browse-motos.component.html',
  standalone: true,
  styleUrl: './browse-motos.component.scss'
})
export class BrowseMotosComponent {
  minYear: number= 1960;
  maxYear: number= 2025
}
