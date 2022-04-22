import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgePipe } from './age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AgePipe
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    AgePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
