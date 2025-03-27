import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Brand} from '../models/brand.model';
import {ModelGeneration} from '../models/model-generation.model';

@Injectable({
  providedIn: 'root'
})
export class ModelGenerationService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiURL
  }
  findAll(filterBrandId: number | null, minCyl: number, maxCyl: number): Observable<ModelGeneration[]> {
    return this.http.get<ModelGeneration[]>(`${this.apiUrl}/model_generations?brandId=${filterBrandId == null ? "" : filterBrandId}&minCyl=${minCyl}&maxCyl=${maxCyl}`);
  }
}
