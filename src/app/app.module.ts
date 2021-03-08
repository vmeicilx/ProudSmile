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
import { ScrollbarModule } from "./custom-components/scrollbar/scrollbar.module";
import { NG_EVENT_PLUGINS } from "@tinkoff/ng-event-plugins";
import { VideoPlayerComponent } from "./custom-components/video-player/video-player.component";
import { TextCardComponent } from "./custom-components/cards/text-card/text-card.component";
import { SmileCardComponent } from "./custom-components/cards/smile-card/smile-card.component";
import { WhyProudSmileComponent } from "./pages/why-proud-smile/why-proud-smile.component";
import { ComingSoonComponent } from "./custom-components/coming-soon/coming-soon.component";
import { DemoMaterialModule } from "./material-module";
import { MatNativeDateModule } from "@angular/material/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ImageTextComponent } from "./custom-components/cards/image-text/image-text.component";
import { AestheticsComponent } from "./pages/aesthetics/aesthetics.component";
import { HttpClientModule } from "@angular/common/http";
import { ButtonComponent } from "./custom-components/button/button.component";
import { TitleCardComponent } from "./custom-components/cards/title-card/title-card.component";
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
import { VgCoreModule } from "@videogular/ngx-videogular/core";
import { VgControlsModule } from "@videogular/ngx-videogular/controls";
import { VgOverlayPlayModule } from "@videogular/ngx-videogular/overlay-play";
import { VgBufferingModule } from "@videogular/ngx-videogular/buffering";
import { ImplantsComponent } from "./pages/implants/implants.component";
import { SpecialsComponent } from "./pages/specials/specials.component";
import { DropdownComponent } from "./custom-components/dropdown/dropdown.component";
import { SingleToothComponent } from "./pages/implants/single-tooth/single-tooth.component";
import { ScrollFramerComponent } from "./custom-components/scroll-framer/scroll-framer.component";
import { FulArchRehabilitationComponent } from "./pages/implants/ful-arch-rehabilitation/ful-arch-rehabilitation.component";
import { ImplantDenturesComponent } from "./pages/implants/implant-dentures/implant-dentures.component";
import { GridToFullScreenComponent } from "./custom-components/grid-to-full-screen/grid-to-full-screen.component";
import { PorcelainVeneersComponent } from './pages/aesthetics/porcelain-veneers/porcelain-veneers.component';
import { UltraThinVeneersComponent } from './pages/aesthetics/ultra-thin-veneers/ultra-thin-veneers.component';
import { SameDayVeneersComponent } from './pages/aesthetics/same-day-veneers/same-day-veneers.component';
import { InvisalignVeneerComponent } from './pages/aesthetics/invisalign-veneer/invisalign-veneer.component';
import { ZoomWhiteningComponent } from './pages/aesthetics/zoom-whitening/zoom-whitening.component';
import { FacespaFacialComponent } from './pages/aesthetics/facespa-facial/facespa-facial.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    SmallCardComponent,
    VideoPlayerComponent,
    TextCardComponent,
    SmileCardComponent,
    WhyProudSmileComponent,
    ComingSoonComponent,
    ImageTextComponent,
    AestheticsComponent,
    ButtonComponent,
    TitleCardComponent,
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
    ImplantsComponent,
    SpecialsComponent,
    DropdownComponent,
    SingleToothComponent,
    ScrollFramerComponent,
    FulArchRehabilitationComponent,
    ImplantDenturesComponent,
    GridToFullScreenComponent,
    PorcelainVeneersComponent,
    UltraThinVeneersComponent,
    SameDayVeneersComponent,
    InvisalignVeneerComponent,
    ZoomWhiteningComponent,
    FacespaFacialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ScrollbarModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgImageSliderModule,
    ClipboardModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [NG_EVENT_PLUGINS],
  bootstrap: [AppComponent]
})
export class AppModule {}
