import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
  AppComponent,
  FooterComponent,
  HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap:[AppComponent]
})
export class AppModule { }
