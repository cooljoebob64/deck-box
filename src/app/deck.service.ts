import { Injectable } from '@angular/core';
import { Deck } from './deck';
import { DECKS } from './mock-decks';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  constructor() {}

  getDecks(): Observable<Deck[]> {
    return of(DECKS);
  }
}
