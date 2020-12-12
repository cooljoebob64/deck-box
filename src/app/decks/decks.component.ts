import { Component, OnInit } from '@angular/core';
import { Deck } from '../deck';
import { DECKS } from '../mock-decks';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.css'],
})
export class DecksComponent implements OnInit {
  decks = DECKS;
  selectedDeck?: Deck;

  constructor() {}

  onSelect(deck: Deck): void {
    this.selectedDeck = deck;
  }

  ngOnInit(): void {}
}
