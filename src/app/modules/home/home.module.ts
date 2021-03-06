import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { AboutComponent } from './components/about/about.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { FitnessServicesComponent } from './components/fitness-services/fitness-services.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { BmiCalComponent } from './components/bmi-cal/bmi-cal.component';
import { PlansComponent } from './components/plans/plans.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent,
    AboutComponent,
    SideMenuComponent,
    FitnessServicesComponent,
    TrainersComponent,
    BmiCalComponent,
    PlansComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    NgxPageScrollModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
