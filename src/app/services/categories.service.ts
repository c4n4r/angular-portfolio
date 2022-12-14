import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
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

    const categories: Category[] = [];

    //adapt
    result.data.map((element: any) => {
      const category: Category = {
        id: element.id,
        name: element.attributes.name,
      };
      categories.push(category);
    });
    return categories;
  }
}
