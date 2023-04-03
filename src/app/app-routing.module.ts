import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DetaliComponent } from './detali/detali.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: "/list" },
  { path: 'list', component: ListComponent },
  { path: 'detail/:id', component: DetaliComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
