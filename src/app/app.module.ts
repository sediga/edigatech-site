
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EdigaHomeComponent } from './ediga-home/ediga-home.component';

@NgModule({
  declarations: [AppComponent, EdigaHomeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
