import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './elements/header/header.component';
import { FooterComponent } from './elements/footer/footer.component';
import { ApiModule, Configuration } from './openapi-client';
import { HttpClientModule } from '@angular/common/http';

const basePath = 'https://product-manager.cyrotech.ch';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderComponent,
    FooterComponent,
    HttpClientModule,
    ApiModule.forRoot(() => new Configuration({ basePath })),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
