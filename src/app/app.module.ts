import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SmallCardComponent } from './custom-components/cards/small-card/small-card.component';
import { ScrollbarModule } from './custom-components/scrollbar/scrollbar.module';
import { NG_EVENT_PLUGINS } from '@tinkoff/ng-event-plugins';
import { VideoPlayerComponent } from './custom-components/video-player/video-player.component';
import { TextCardComponent } from './custom-components/cards/text-card/text-card.component';
import { SmileCardComponent } from './custom-components/cards/smile-card/smile-card.component';
import { WhyProudSmileComponent } from './pages/why-proud-smile/why-proud-smile.component';
import { ComingSoonComponent } from './custom-components/coming-soon/coming-soon.component';
import { DemoMaterialModule } from './material-module';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageTextComponent } from './custom-components/cards/image-text/image-text.component';
import { HealthComponent } from './pages/health/health.component';
import { AestheticsComponent } from './pages/aesthetics/aesthetics.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './custom-components/button/button.component';
import { TitleCardComponent } from './custom-components/cards/title-card/title-card.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { ProudSmileExperienceComponent } from './pages/why-proud-smile/proud-smile-experience/proud-smile-experience.component';
import { WhoWeAreComponent } from './pages/why-proud-smile/who-we-are/who-we-are.component';
import { DentalClinicComponent } from './pages/why-proud-smile/dental-clinic/dental-clinic.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';

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
    HealthComponent,
    AestheticsComponent,
    ButtonComponent,
    TitleCardComponent,
    ProudSmileExperienceComponent,
    WhoWeAreComponent,
    DentalClinicComponent,
    ContactPageComponent,
    PaymentPageComponent
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
    NgImageSliderModule
  ],
  providers: [NG_EVENT_PLUGINS],
  bootstrap: [AppComponent],
})
export class AppModule {}
