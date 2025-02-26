import {Component, OnInit} from '@angular/core';
import {BrandService} from '../../../services/brand.service';
import {Brand} from '../../../models/brand.model';
import {NgForOf} from '@angular/common';
import {MatFormField} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-brand-filter',
  imports: [
    NgForOf,
    MatFormField,
    MatInputModule,
    MatSelect,
    MatOption
  ],
  templateUrl: './brand-filter.component.html',
  standalone: true,
  styleUrl: './brand-filter.component.scss'
})
export class BrandFilterComponent implements OnInit {
  brands: Brand[] = [];
  selectedBrand: number | null = null;
  constructor(protected brandService: BrandService) {
  }

  ngOnInit() {
    this.brandService.findAll().subscribe(
      (brands: Brand[]) => {
        this.brands = brands
      }
    )
  }

}
