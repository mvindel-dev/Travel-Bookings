import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TravelSelectorComponent } from './components/travel-selector/travel-selector.component';
import { TravelSummaryComponent } from './components/travel-summary/travel-summary.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TravelSelectorComponent,
    TravelSummaryComponent,
    HeaderComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
