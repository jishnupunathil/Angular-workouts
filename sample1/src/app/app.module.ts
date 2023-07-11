import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { InnerComponent } from './inner/inner.component';
import { NumberListComponent } from './number-list/number-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    InnerComponent,
    NumberListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
