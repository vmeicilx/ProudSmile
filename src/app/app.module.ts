import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { SmallCardComponent } from "./custom-components/cards/small-card/small-card.component";
import { DemoMaterialModule } from "./material-module";
import { MatNativeDateModule } from "@angular/material/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ButtonComponent } from "./custom-components/button/button.component";
import { NgImageSliderModule } from "ng-image-slider";
import { ProudSmileExperienceComponent } from "./pages/why-proud-smile/proud-smile-experience/proud-smile-experience.component";
import { WhoWeAreComponent } from "./pages/why-proud-smile/who-we-are/who-we-are.component";
import { DentalClinicComponent } from "./pages/why-proud-smile/dental-clinic/dental-clinic.component";
import { ContactPageComponent } from "./pages/contact-page/contact-page.component";
import { PaymentPageComponent } from "./pages/payment-page/payment-page.component";
import { ClipboardModule } from "@angular/cdk/clipboard";
import { ExtractionsComponent } from "./pages/health/extractions/extractions.component";
import { RootCanalTherapyComponent } from "./pages/health/root-canal-therapy/root-canal-therapy.component";
import { ClearBracesComponent } from "./pages/health/clear-braces/clear-braces.component";
import { InvasilignComponent } from "./pages/health/invasilign/invasilign.component";
import { AnxiousPatientsComponent } from "./pages/health/anxious-patients/anxious-patients.component";
import { SameDayCrownsComponent } from "./pages/health/same-day-crowns/same-day-crowns.component";
import { GeneralAndPreventiveCareComponent } from "./pages/health/general-and-preventive-care/general-and-preventive-care.component";
import { DvaComponent } from "./pages/health/dva/dva.component";
import { MedicareChildComponent } from "./pages/health/medicare-child/medicare-child.component";
import { MouthguardsComponent } from "./pages/health/mouthguards/mouthguards.component";
import { DentalEmergencyComponent } from "./pages/health/dental-emergency/dental-emergency.component";
import { SpecialsComponent } from "./pages/specials/specials.component";
import { DropdownComponent } from "./custom-components/dropdown/dropdown.component";
import { SingleToothComponent } from "./pages/implants/single-tooth/single-tooth.component";
import { FulArchRehabilitationComponent } from "./pages/implants/ful-arch-rehabilitation/ful-arch-rehabilitation.component";
import { ImplantDenturesComponent } from "./pages/implants/implant-dentures/implant-dentures.component";
import { PorcelainVeneersComponent } from "./pages/aesthetics/porcelain-veneers/porcelain-veneers.component";
import { UltraThinVeneersComponent } from "./pages/aesthetics/ultra-thin-veneers/ultra-thin-veneers.component";
import { SameDayVeneersComponent } from "./pages/aesthetics/same-day-veneers/same-day-veneers.component";
import { ZoomWhiteningComponent } from "./pages/aesthetics/zoom-whitening/zoom-whitening.component";
import { FacespaFacialComponent } from "./pages/aesthetics/facespa-facial/facespa-facial.component";
import { DataService } from "./shared/data-service";
import { BeforeAfterComponent } from './pages/aesthetics/before-after/before-after.component';
import { ScrollFramerFullComponent } from './custom-components/scroll-framer-full/scroll-framer-full.component';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { DropwodnGreenComponent } from './custom-components/dropwodn-green/dropwodn-green.component';
import { LandingBundallComponent } from './pages/landing-bundall/landing-bundall.component';
import { LandingPacificComponent } from './pages/landing-pacific/landing-pacific.component';
import { ComponentsModule } from "./components.module";
import { BlogComponent } from './blog/blog.component';
import { BlogArticleComponent } from './blog-article/blog-article.component';
import { GraphQLModule } from './graphql.module';
import { MarkdownModule } from 'ngx-markdown';
import { MyImgDirective } from "src/services/image.directive";
import { FacebookModule } from "ngx-facebook";
import { SafePipe } from "src/services/SafePipe";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    SmallCardComponent,
    ButtonComponent,
    ProudSmileExperienceComponent,
    WhoWeAreComponent,
    DentalClinicComponent,
    ContactPageComponent,
    PaymentPageComponent,
    ExtractionsComponent,
    RootCanalTherapyComponent,
    ClearBracesComponent,
    InvasilignComponent,
    AnxiousPatientsComponent,
    SameDayCrownsComponent,
    GeneralAndPreventiveCareComponent,
    DvaComponent,
    MedicareChildComponent,
    MouthguardsComponent,
    DentalEmergencyComponent,
    SpecialsComponent,
    DropdownComponent,
    SingleToothComponent,
    FulArchRehabilitationComponent,
    ImplantDenturesComponent,
    PorcelainVeneersComponent,
    UltraThinVeneersComponent,
    SameDayVeneersComponent,
    ZoomWhiteningComponent,
    FacespaFacialComponent,
    BeforeAfterComponent,
    ScrollFramerFullComponent,
    MobileHeaderComponent,
    DropwodnGreenComponent,
    LandingBundallComponent,
    LandingPacificComponent,
    BlogComponent,
    BlogArticleComponent,
    MyImgDirective,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgImageSliderModule,
    ClipboardModule,
    ComponentsModule,
    GraphQLModule,
    MarkdownModule.forRoot(),
    FacebookModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
