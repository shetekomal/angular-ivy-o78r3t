import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HighlightText } from './Directives/HighlightText.directive';
import { AlternateIf } from './Directives/AlternateIf.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, HighlightText, AlternateIf],
  bootstrap: [AppComponent],
})
export class AppModule {}
