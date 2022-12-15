import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import {
  adaptApiToOneSkill,
  adaptApiToSkill,
} from '../models/adapters/skills.adapter';
import { Skill } from '../models/skills';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor(private http: HttpClient) {}

  async findSkillsByTechnoId(id: number): Promise<Skill[]> {
    const result = await firstValueFrom(
      this.http.get(
        `http://localhost:1337/api/skills?filters[techno][id][$eq]=${id}&populate=image`
      )
    );
    return adaptApiToSkill(result);
  }

  async findSkillById(id: number): Promise<Skill> {
    const result = await firstValueFrom(
      this.http.get(`http://localhost:1337/api/skills/${id}?populate=image`)
    );
    return adaptApiToOneSkill(result);
  }
}
