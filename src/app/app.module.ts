import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DeckComponent } from './deck/deck.component';
import { DeckDetailComponent } from './deck-detail/deck-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckComponent,
    DeckDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
