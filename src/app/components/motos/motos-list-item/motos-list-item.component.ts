import {Component, Input} from '@angular/core';
import {ModelGeneration} from '../../../models/model-generation.model';
import {CurrencyPipe, NgIf} from '@angular/common';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {MatButton, MatFabButton, MatMiniFabButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';
import localeFr from '@angular/common/locales/fr';

@Component({
  selector: 'app-motos-list-item',
  imports: [
    NgIf,
    MatGridList,
    MatGridTile,
    MatIcon,
    MatMiniFabButton,
    MatTooltip,
    MatFabButton,
    MatButton,
    CurrencyPipe
  ],
  standalone: true,
  templateUrl: './motos-list-item.component.html',
  styleUrl: './motos-list-item.component.scss'
})
export class MotosListItemComponent {
  @Input({required: true}) moto?: ModelGeneration = undefined;

}
