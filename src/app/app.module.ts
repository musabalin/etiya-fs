import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DemoComponent } from './components/demo/demo.component';
import { ExampleComponent } from './components/example/example.component';
import { CssWorkshopComponent } from './pages/css-workshop/css-workshop.component';
import { FirstWorkshopComponent } from './pages/first-workshop/first-workshop.component';

@NgModule({
  declarations: [AppComponent, DemoComponent, ExampleComponent, CssWorkshopComponent, FirstWorkshopComponent],
  imports: [BrowserModule, AppRoutingModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
