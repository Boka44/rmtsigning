import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HomeComponent } from './home/home.component';
import { IdChecklistComponent } from './id-checklist/id-checklist.component';
import { LoanSigningsComponent } from './loan-signings/loan-signings.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', 
    component: NavigationComponent,
    children: [
      { 
        path: 'home', 
        component: HomeComponent,
        data: {
          title: "Home",
          description: "RMT Signing is a leading San Diego Notary service specilizing in speed, accuracy, and customer service."
        } 
      },
      { 
        path: 'id-checklist', 
        component: IdChecklistComponent,
        data: {
          title: "ID Checklist",
          description: "Checklist for valid identification needed for notary stamps."
        } 
      },
      { 
        path: 'loan-signings', 
        component: LoanSigningsComponent,
        data: {
          title: "Loan Signings",
          description: "We are also certified loan signing agents. We can handle all of your needs."
        } 
      },
      { 
        path: 'faqs', 
        component: FaqsComponent,
        data: {
          title: "FAQS",
          description: "Frequently asked questions and answers regarding the notarization process."
        } 
      },
      { 
        path: 'contact', 
        component: ContactComponent,
        data: {
          title: "Contact Us",
          description: "Contact us for immediate assistance with your notarization needs."
        } 
      },
      { 
        path: 'page-not-found', 
        component: PageNotFoundComponent,
        data: {
          title: "Oops!",
          description: ""
        }
      },
      { path: '',   redirectTo: 'home', pathMatch: 'full' },
    ]
  },
  // { path: '',   redirectTo: 'home', pathMatch: 'full' }, 
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', useHash: false, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
