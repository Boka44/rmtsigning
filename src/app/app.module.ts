import { NgModule } from '@angular/core';
import { BrowserModule, Meta, Title } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { IdChecklistComponent } from './id-checklist/id-checklist.component';
import { LoanSigningsComponent } from './loan-signings/loan-signings.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContactService } from './contact/contact.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    IdChecklistComponent,
    LoanSigningsComponent,
    FaqsComponent,
    ContactComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ContactService,
    Title, 
    Meta
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
