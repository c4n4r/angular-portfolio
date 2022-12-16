import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/categories';
import { CategoriesService } from 'src/app/services/categories.service';
import { CountService } from 'src/app/services/observables/count.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  categories: Category[] = [];
  count: number = 0;
  constructor(
    private categoriesService: CategoriesService,
    private countService: CountService
  ) {}

  async ngOnInit() {
    this.categories = await this.categoriesService.findCategories();
    this.countService.getCount().subscribe((value: number) => {
      this.count = value * 5;
    });
  }
}
