import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstWorkshopComponent } from './pages/first-workshop/first-workshop.component';
import { CssWorkshopComponent } from './pages/css-workshop/css-workshop.component';

const routes: Routes = [
  { path: '', component: FirstWorkshopComponent },
  { path: 'css', component: CssWorkshopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
