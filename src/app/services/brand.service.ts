import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Brand} from '../models/brand.model';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiURL
  }
  findAll(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${this.apiUrl}/brands`);
  }
}
