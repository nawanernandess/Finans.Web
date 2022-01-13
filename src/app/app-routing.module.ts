import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './site/home/content/content.component';
import { BenefitsComponent } from './site/benefits/benefits.component';
import { PriceComponent } from './site/price/price.component';
import { ResourcesComponent } from './site/resources/resources.component';
import { LoginComponent } from './site/login/login.component';
import { UserRegisterComponent } from './site/user-register/user-register.component';

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
  ,{
    path: "login",
    component: LoginComponent
  }
  ,{
    path: "user-register",
    component: UserRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
