import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';  // Import the FooterModule here

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
