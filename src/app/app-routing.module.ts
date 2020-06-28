import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TutorsListComponent } from './tutors-list/tutors-list.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'tutors-list', component: TutorsListComponent },
  { path: '', redirectTo: '/home-page', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

