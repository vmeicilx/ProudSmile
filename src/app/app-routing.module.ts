import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ComingSoonComponent } from "./custom-components/coming-soon/coming-soon.component";
import { HeaderComponent } from "./header/header.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { AestheticsComponent } from "./pages/aesthetics/aesthetics.component";
import { HealthComponent } from "./pages/health/health.component";
import { WhyProudSmileComponent } from "./pages/why-proud-smile/why-proud-smile.component";
import { ProudSmileExperienceComponent } from "./pages/why-proud-smile/proud-smile-experience/proud-smile-experience.component";
import { WhoWeAreComponent } from './pages/why-proud-smile/who-we-are/who-we-are.component';
import { DentalClinicComponent } from './pages/why-proud-smile/dental-clinic/dental-clinic.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';

const routes: Routes = [
  { path: "", redirectTo: "/home-page-component", pathMatch: "full" },
  { path: "home-page-component", component: HomePageComponent },
  { path: "proud-smile-experience-component", component: ProudSmileExperienceComponent },
  { path: "who-we-are-component", component: WhoWeAreComponent },
  { path: "dental-clinic-component", component: DentalClinicComponent },
  { path: "header-component", component: HeaderComponent },
  { path: "why-proud-smile-component", component: WhyProudSmileComponent },
  { path: "health-component", component: HealthComponent },
  { path: "aesthetics-component", component: AestheticsComponent },
  { path: "coming-soon-component", component: ComingSoonComponent },
  { path: "payment-page-component", component: PaymentPageComponent },
  { path: "contact-page-component", component: ContactPageComponent },
  { path: "**", redirectTo: "/home-page-component" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
