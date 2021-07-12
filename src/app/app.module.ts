import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { BmiCalComponent } from './components/bmi-cal/bmi-cal.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { PlansComponent } from './components/plans/plans.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    ServicesComponent,
    TrainersComponent,
    BmiCalComponent,
    PlansComponent,
    FooterComponent,
    ContactComponent,
     SideMenuComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
