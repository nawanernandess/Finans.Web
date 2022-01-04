import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './site/home/content/content.component';
import { BenefitsComponent } from './site/benefits/benefits.component';
import { PriceComponent } from './site/price/price.component';
import { ResourcesComponent } from './site/resources/resources.component';

const routes: Routes = [
  {
    path: "",
    component: ContentComponent
  },{
    path: "recursos",
    component: ResourcesComponent
  },{
    path: "beneficios",
    component: BenefitsComponent
  },{
    path: "preco",
    component: PriceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
