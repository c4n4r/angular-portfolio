import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  async findCategories(): Promise<any> {
    const result = await firstValueFrom(
      this.http.get('http://localhost:1337/api/categories?populate=image')
    );
    console.log(result);
  }
}
