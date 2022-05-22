import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./app/component/home/home.component";
import {RouterModule, Routes} from "@angular/router";
import {KotlinGeneratorComponent} from "./app/component/kotlin-component/kotlin-generator.component";
import {FaqComponent} from "./app/component/faq/faq.component";



const routes:Routes = [
  {path:'', component: HomeComponent},
  {path:'generate', component: KotlinGeneratorComponent},
  {path:'faq', component: FaqComponent}
  ]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
