import { Component, inject } from '@angular/core';
import { TcgCardComponent } from "../../components/tcg-card/tcg-card.component";
import { TcgService } from '../../services/tcg.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TcgCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private _tcgService = inject(TcgService);
  cards: any[] = [];
  constructor() { 
    this._tcgService.getCards().subscribe((cardsAnswer: any) => {
      this.cards = cardsAnswer.data;
    });
  }
}
