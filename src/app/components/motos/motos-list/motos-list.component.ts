import {Component, Input} from '@angular/core';
import {ModelGeneration} from '../../../models/model-generation.model';
import {NgForOf} from '@angular/common';
import {MotosListItemComponent} from '../motos-list-item/motos-list-item.component';

@Component({
  selector: 'app-motos-list',
  imports: [
    MotosListItemComponent
  ],
  standalone: true,
  templateUrl: './motos-list.component.html',
  styleUrl: './motos-list.component.scss'
})
export class MotosListComponent {
  @Input({required: true}) motoList: ModelGeneration[] = [];
  protected readonly JSON = JSON;
}
