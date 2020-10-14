import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SmallCardComponent } from './small-card/small-card.component';
import { ScrollToPlayDirective } from './scroll-to-play.directive';
import { ScrollingVideoComponent } from './scrolling-video/scrolling-video.component';
import { ScrollbarModule } from './scrollbar/scrollbar.module';
import { NG_EVENT_PLUGINS } from '@tinkoff/ng-event-plugins';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { BigCardComponent } from './big-card/big-card.component';
import { TextCardComponent } from './text-card/text-card.component';
import { SmileCardComponent } from './smile-card/smile-card.component';
import { WhyProudSmileComponent } from './pages/why-proud-smile/why-proud-smile.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { DemoMaterialModule } from './material-module';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageTextComponent } from './cards/image-text/image-text.component';
import { HealthComponent } from './pages/health/health.component';
import { AestheticsComponent } from './pages/aesthetics/aesthetics.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    SmallCardComponent,
    ScrollToPlayDirective,
    ScrollingVideoComponent,
    VideoPlayerComponent,
    BigCardComponent,
    TextCardComponent,
    SmileCardComponent,
    WhyProudSmileComponent,
    ComingSoonComponent,
    ImageTextComponent,
    HealthComponent,
    AestheticsComponent,
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
  ],
  providers: [NG_EVENT_PLUGINS],
  bootstrap: [AppComponent],
})
export class AppModule {}
