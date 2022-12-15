import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/categories';
import { Skill } from 'src/app/models/skills';
import { Techno } from 'src/app/models/technos';
import { CategoriesService } from 'src/app/services/categories.service';
import { SkillsService } from 'src/app/services/skills.service';
import { TechnosService } from 'src/app/services/technos.service';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss'],
})
export class SkillsPageComponent implements OnInit {
  categories: Category[] = [];
  relatedTechnos: Techno[] = [];
  relatedSkills: Skill[] = [];
  constructor(
    private categoriesService: CategoriesService,
    private technoService: TechnosService,
    private skillsService: SkillsService
  ) {}

  async ngOnInit() {
    this.categories = await this.categoriesService.findCategories();
  }

  async selectCategory(category: Category) {
    this.relatedSkills = [];
    this.relatedTechnos = await this.technoService.findTechnosByCategoryId(
      category.id
    );
  }

  async selectTechno(techno: Techno) {
    this.relatedSkills = await this.skillsService.findSkillsByTechnoId(
      techno.id
    );
  }
}
