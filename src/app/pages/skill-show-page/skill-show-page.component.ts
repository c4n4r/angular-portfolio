import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Skill } from 'src/app/models/skills';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skill-show-page',
  templateUrl: './skill-show-page.component.html',
  styleUrls: ['./skill-show-page.component.scss'],
})
export class SkillShowPageComponent implements OnInit {
  selectedId: number | null = null;
  selectedSkill: Skill | null = null;
  constructor(
    private route: ActivatedRoute,
    private skillsService: SkillsService
  ) {
    this.selectedId = route.snapshot.params['id'];
  }
  async ngOnInit() {
    //récupérer toutes les infos de ma skill
    this.selectedSkill = await this.skillsService.findSkillById(
      this.selectedId as number
    );
  }
}
