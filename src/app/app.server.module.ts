import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    //Make sure the string matches
    BrowserModule.withServerTransition({
      appId: 'my-app-id'
  }),
    AppModule,
    ServerModule,
  ],
  providers: [
    // Add server-only providers here.
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
