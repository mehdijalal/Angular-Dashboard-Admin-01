import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Imports for loading & configuring the in-memory web api
import { ProductData } from './products/product-data';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';

/* Feature Modules */
import { UserModule } from './user/user.module';
import { MessageModule } from './messages/message.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthModule }              from './auth/auth.module';
import {FullMaterialModule} from './material/full-material.module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UserModule,
    MessageModule,
    AppRoutingModule,
    AuthModule,
    FullMaterialModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DashboardComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
