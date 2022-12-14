import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { adaptApiToCategory } from '../models/adapters/categories.adapter';
import { Category } from '../models/categories';
@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  async findCategories(): Promise<Category[]> {
    const result: any = await firstValueFrom(
      this.http.get('http://localhost:1337/api/categories?populate=image')
    );
    return adaptApiToCategory(result);
  }
}
