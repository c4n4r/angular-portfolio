import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoriesService } from './services/categories.service';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';
import { TechnosService } from './services/technos.service';
import { SkillsService } from './services/skills.service';
import { SkillShowPageComponent } from './pages/skill-show-page/skill-show-page.component';
import { CustomCardComponent } from './components/cards/custom-card/custom-card.component';
import { CountComponent } from './components/count/count.component';
import { CountService } from './services/observables/count.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    SkillsPageComponent,
    SkillShowPageComponent,
    CustomCardComponent,
    CountComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CategoriesService, TechnosService, SkillsService, CountService],
  bootstrap: [AppComponent],
})
export class AppModule {}
