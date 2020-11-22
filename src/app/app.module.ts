import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

import { AppComponent } from './app.component';
import { FanMenuContainerComponent } from './components/fan-menu-container/fan-menu-container.component';
import { FanGooeyMenuModule } from './fan-gooey-menu/fan-gooey-menu.module';


@NgModule({
  declarations: [
    AppComponent,
    FanMenuContainerComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,

    FanGooeyMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
