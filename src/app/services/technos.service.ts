import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TechnosService {
  constructor(private http: HttpClient) {}

  async findTechnosByCategoryId(id: number) {
    const result = await firstValueFrom(
      this.http.get(
        `http://localhost:1337/api/technos?filters[categories][id][$eq]=${id}&populate=image`
      )
    );
    console.log(result);
  }
}
