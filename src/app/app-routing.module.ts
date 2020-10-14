import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AestheticsComponent } from './pages/aesthetics/aesthetics.component';
import { HealthComponent } from './pages/health/health.component';
import { WhyProudSmileComponent } from './pages/why-proud-smile/why-proud-smile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-page-component', pathMatch: 'full' },
  { path: 'home-page-component', component: HomePageComponent },
  { path: 'header-component', component: HeaderComponent },
  { path: 'why-proud-smile-component', component: WhyProudSmileComponent },
  { path: 'health-component', component: HealthComponent },
  { path: 'aesthetics-component', component: AestheticsComponent },
  { path: 'coming-soon-component', component: ComingSoonComponent },
  { path: '**', redirectTo: '/home-page-component' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
