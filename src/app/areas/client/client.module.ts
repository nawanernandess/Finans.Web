import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client.routing.module';
import { ClientService } from './client.service';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  providers: [
    ClientService,
  ]
})
export class ClientModule { }
