import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './section/form/form.component';

import { ListComponent } from './section/list/list.component';
import { AppComponent } from './app.component'


const routes: Routes = [
  { 
    path: 'form', 
    component: FormComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  { path: '**', component: FormComponent }


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
