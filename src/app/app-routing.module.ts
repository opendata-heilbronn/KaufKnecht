import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component' 
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingpageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
