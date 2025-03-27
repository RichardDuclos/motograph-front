import {Component, model, OnInit} from '@angular/core';
import {BrandFilterComponent} from '../../components/brands/brands-list/brand-filter.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {MatSidenavContainer, MatSidenavModule} from '@angular/material/sidenav';
import {ModelGeneration} from '../../models/model-generation.model';
import {ModelGenerationService} from '../../services/model-generation.service';
import {MotosListComponent} from '../../components/motos/motos-list/motos-list.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-browse-motos',
  imports: [
    BrandFilterComponent,
    MatSliderModule,

    MatSidenavModule,
    MotosListComponent,
    CommonModule
  ],
  templateUrl: './browse-motos.component.html',
  standalone: true,
  styleUrl: './browse-motos.component.scss'
})
export class BrowseMotosComponent implements OnInit{
  minYear: number= 1960;
  maxYear: number= 2025
  filterBrandId : number | null = null;
  motoList : ModelGeneration[] = [];
  minCyl: number = 50;
  maxCyl: number = 1600;
  constructor(protected modelGenerationService: ModelGenerationService) {

  }
  ngOnInit(): void {
    this.updateMotoList()
  }
  brandFilterUpdated = (brandId: number | null) => {
    console.log(brandId)
  this.filterBrandId = brandId;
    this.updateMotoList()
  }

  updateMotoList = () => {
    console.log("updating moto list")
    this.modelGenerationService.findAll(this.filterBrandId, this.minCyl, this.maxCyl).subscribe(
      (modelGenerations: ModelGeneration[]) => {
        modelGenerations.sort((a, b) => {
          if (a.model.name == b.model.name) {
            if (a.endYear ?? 1000 < b.endYear ?? 1000) {
              return 1
            } else {
              return -1;
            }
          }
          if (a.model.name > b.model.name) {
            return 1
          } else {
            return -1;
          }
        })
        this.motoList = modelGenerations
      }
    )
  }


}
