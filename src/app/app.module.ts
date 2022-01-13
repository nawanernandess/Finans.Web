import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MatTableModule } from '@angular/material/table';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './site/home/home.component';
import { ContentComponent } from './site/home/content/content.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { BenefitsComponent } from './site/benefits/benefits.component';
import { PriceComponent } from './site/price/price.component';
import { ClientModule } from './areas/client/client.module';
import { AdminModule } from './areas/admin/admin.module';
import { SharedModule } from './shared/shared.module';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    FooterComponent,
    NavbarComponent,
    BenefitsComponent,
    PriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    MatTableModule,
    HttpClientModule,
    ClientModule,
    AdminModule,
    ClientModule,
    SharedModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
