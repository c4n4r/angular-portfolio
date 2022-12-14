import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoriesService } from './services/categories.service';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomePageComponent, SkillsPageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CategoriesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
