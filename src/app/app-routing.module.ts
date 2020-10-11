import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WhyProudSmileComponent } from './why-proud-smile/why-proud-smile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-page-component', pathMatch: 'full' },
  { path: 'home-page-component', component: HomePageComponent },
  { path: 'header-component', component: HeaderComponent },
  { path: 'why-proud-smile-component', redirectTo: '/coming-soon-component' },
  { path: 'coming-soon-component', component: ComingSoonComponent },
  { path: '**', component: ComingSoonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
