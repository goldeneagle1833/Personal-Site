import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ReferancesComponent } from './referances/referances.component';
import { HobbysComponent } from './hobbys/hobbys.component';
import { CodeProdjectsComponent } from './code-prodjects/code-prodjects.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PicturesComponent } from './pictures/pictures.component';
import { AboutHomeComponent } from './landing-page/about-home/about-home.component';
import { ExperiencesHomeComponent } from './landing-page/experiences-home/experiences-home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExperienceComponent,
    ReferancesComponent,
    HobbysComponent,
    CodeProdjectsComponent,
    LandingPageComponent,
    NavBarComponent,
    PicturesComponent,
    AboutHomeComponent,
    ExperiencesHomeComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
