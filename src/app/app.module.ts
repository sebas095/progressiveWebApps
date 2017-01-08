import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { MaterialModule } from '@angular/material';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, XLargeDirective } from './app.component';


@NgModule({
  declarations: [ AppComponent, XLargeDirective ],
  imports: [
    SharedModule,
    HomeModule,
    AboutModule,
    AppRoutingModule,
    MaterialModule
  ]
})
export class AppModule {
}

export { AppComponent } from './app.component';
