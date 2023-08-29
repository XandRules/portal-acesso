import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuAuthDirective } from './menu-auth.directive';
import { AngularFireModule } from '@angular/fire/compat'

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MenuAuthDirective,
    MenuAuthDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyB9I2TNesRmI2bJJwRS0bhT9IDdVVHvbNc",
        authDomain: "portal-acesso.firebaseapp.com",
        projectId: "portal-acesso",
        storageBucket: "portal-acesso.appspot.com",
        messagingSenderId: "418187643040",
        appId: "1:418187643040:web:675475e09e699f9c43a1c5",
        measurementId: "G-GKEK1MTYKS"
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
