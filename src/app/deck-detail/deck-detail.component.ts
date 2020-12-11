import { Component, OnInit, Input } from '@angular/core';
import { Deck } from '../deck';

@Component({
  selector: 'app-deck-detail',
  templateUrl: './deck-detail.component.html',
  styleUrls: ['./deck-detail.component.css'],
})
export class DeckDetailComponent implements OnInit {
  @Input() deck: Deck;
  constructor() {}

  ngOnInit(): void {}
}
