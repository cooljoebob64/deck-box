import { Component, OnInit } from '@angular/core';
import { Deck } from '../deck';
import { DECKS } from '../mock-decks';
import { DeckService } from "../deck.service";

@Component({
  selector: 'app-decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.css'],
})
export class DecksComponent implements OnInit {
  decks : Deck[];
  selectedDeck?: Deck;

  constructor(private deckService: DeckService) {}

  onSelect(deck: Deck): void {
    this.selectedDeck = deck;
  }

  getDecks(): void{
    this.deckService.getDecks().subscribe(decks => this.decks = decks);
  }

  ngOnInit(): void {
    this.getDecks();
  }
}
