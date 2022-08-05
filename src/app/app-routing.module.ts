import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ComingSoonComponent } from "./custom-components/coming-soon/coming-soon.component";
import { HeaderComponent } from "./header/header.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ProudSmileExperienceComponent } from "./pages/why-proud-smile/proud-smile-experience/proud-smile-experience.component";
import { WhoWeAreComponent } from "./pages/why-proud-smile/who-we-are/who-we-are.component";
import { DentalClinicComponent } from "./pages/why-proud-smile/dental-clinic/dental-clinic.component";
import { ContactPageComponent } from "./pages/contact-page/contact-page.component";
import { PaymentPageComponent } from "./pages/payment-page/payment-page.component";
import { AnxiousPatientsComponent } from "./pages/health/anxious-patients/anxious-patients.component";
import { ClearBracesComponent } from "./pages/health/clear-braces/clear-braces.component";
import { DentalEmergencyComponent } from "./pages/health/dental-emergency/dental-emergency.component";
import { DvaComponent } from "./pages/health/dva/dva.component";
import { ExtractionsComponent } from "./pages/health/extractions/extractions.component";
import { GeneralAndPreventiveCareComponent } from "./pages/health/general-and-preventive-care/general-and-preventive-care.component";
import { InvasilignComponent } from "./pages/health/invasilign/invasilign.component";
import { MedicareChildComponent } from "./pages/health/medicare-child/medicare-child.component";
import { MouthguardsComponent } from "./pages/health/mouthguards/mouthguards.component";
import { RootCanalTherapyComponent } from "./pages/health/root-canal-therapy/root-canal-therapy.component";
import { SameDayCrownsComponent } from "./pages/health/same-day-crowns/same-day-crowns.component";
import { SpecialsComponent } from "./pages/specials/specials.component";
import { SingleToothComponent } from "./pages/implants/single-tooth/single-tooth.component";
import { FulArchRehabilitationComponent } from "./pages/implants/ful-arch-rehabilitation/ful-arch-rehabilitation.component";
import { ImplantDenturesComponent } from "./pages/implants/implant-dentures/implant-dentures.component";
import { PorcelainVeneersComponent } from "./pages/aesthetics/porcelain-veneers/porcelain-veneers.component";
import { UltraThinVeneersComponent } from "./pages/aesthetics/ultra-thin-veneers/ultra-thin-veneers.component";
import { SameDayVeneersComponent } from "./pages/aesthetics/same-day-veneers/same-day-veneers.component";
import { ZoomWhiteningComponent } from "./pages/aesthetics/zoom-whitening/zoom-whitening.component";
import { FacespaFacialComponent } from "./pages/aesthetics/facespa-facial/facespa-facial.component";
import { BeforeAfterComponent } from "./pages/aesthetics/before-after/before-after.component";
import { LandingBundallComponent } from "./pages/landing-bundall/landing-bundall.component";
import { LandingPacificComponent } from "./pages/landing-pacific/landing-pacific.component";
import { EmailComponent } from "./pages/email/email/email.component";
import { BundallEmailComponent } from "./pages/bundall-email/bundall-email.component";
import { BlogComponent } from "./blog/blog.component";
import { BlogArticleComponent } from "./blog-article/blog-article.component";

const routes: Routes = [
  { path: "", redirectTo: "/HomePage", pathMatch: "full" },
  { path: "HomePage", component: HomePageComponent },
  {
    path: "proud-smile-experience-component",
    component: ProudSmileExperienceComponent
  },
  { path: "who-we-are-component", component: WhoWeAreComponent },
  { path: "dental-clinic-component", component: DentalClinicComponent },
  { path: "header-component", component: HeaderComponent },
  { path: "AnxiousPatients", component: AnxiousPatientsComponent },
  { path: "ClearBraces", component: ClearBracesComponent },
  { path: "DentalEmergency", component: DentalEmergencyComponent },
  { path: "DVA", component: DvaComponent },
  { path: "Extractions", component: ExtractionsComponent },
  {
    path: "GeneralAndPreventiveCare",
    component: GeneralAndPreventiveCareComponent
  },
  { path: "Invisalign", component: InvasilignComponent },
  { path: "MedicareChildBenefitScheme", component: MedicareChildComponent },
  { path: "MouthguardsAndSplints", component: MouthguardsComponent },
  { path: "RootCanalTherapy", component: RootCanalTherapyComponent },
  { path: "SameDayCrowns", component: SameDayCrownsComponent },
  { path: "SingleTooth", component: SingleToothComponent },
  { path: "FullArchRehabilitation", component: FulArchRehabilitationComponent },
  { path: "ImplantDentures", component: ImplantDenturesComponent },
  { path: "PorcelainVeneers", component: PorcelainVeneersComponent },
  { path: "UltraThinVeneers", component: UltraThinVeneersComponent },
  { path: "SameDayVeneers", component: SameDayVeneersComponent },
  { path: "ZoomWhitening", component: ZoomWhiteningComponent },
  { path: "FaceSpaFacialAesthetics", component: FacespaFacialComponent },
  { path: "BeforeAndAfter", component: BeforeAfterComponent },
  { path: "Specials", component: SpecialsComponent },
  { path: "coming-soon-component", component: ComingSoonComponent },
  { path: "payment-page-component", component: PaymentPageComponent },
  { path: "LandingBundall", component: LandingBundallComponent },
  { path: "LandingPacific", component: LandingPacificComponent },
  { path: "Proudsmileopenday", component: EmailComponent },
  { path: "NewBundallProudSmile", component: BundallEmailComponent },
  { path: "Blog", component: BlogComponent },
  { path: "contact-page-component", component: ContactPageComponent },
  { path: "contact-page-component/:parameter", component: ContactPageComponent },
  { path: "BlogArticle/:parameter", component: BlogArticleComponent },
  { path: "send", redirectTo: "/send" },
  { path: "**", redirectTo: "/HomePage" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
