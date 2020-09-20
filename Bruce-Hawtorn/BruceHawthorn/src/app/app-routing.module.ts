import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AboutComponent } from "./about/about.component";
import { CodeProdjectsComponent } from "./code-prodjects/code-prodjects.component";
import { ExperienceComponent } from "./experience/experience.component";
import { HobbysComponent } from "./hobbys/hobbys.component";
import { ReferancesComponent } from "./referances/referances.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";



const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "code",
    component: CodeProdjectsComponent
  },
  {
    path: "hobbies",
    component: HobbysComponent
  },
  {
    path: "experience",
    component: ExperienceComponent
  },

  {
    path: "references",
    component: ReferancesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
