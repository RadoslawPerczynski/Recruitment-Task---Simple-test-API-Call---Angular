import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BoxAndBallComponent } from './box-and-ball/box-and-ball.component';
import { AboutAuthorComponent } from './box-and-ball/about-author/about-author.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxAndBallComponent,
    AboutAuthorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
