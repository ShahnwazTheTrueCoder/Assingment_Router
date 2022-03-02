import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNoteFoundComponent } from './page-note-found/page-note-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  {
    path: 'home',component:HomeComponent
  },
  {
    path:'' , redirectTo:'home',pathMatch:'full'
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
path:'products',
component:ProductsComponent
  },
  {
    path:'product-details/:id',
    component:ProductDetailsComponent
  },
  {
    path:'template-driven-form',
    component:TemplateDrivenFormComponent
  },
  {
    path:'reactive-form',
    component:ReactiveFormComponent
  },
  {
    path:"**",
    component:PageNoteFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
