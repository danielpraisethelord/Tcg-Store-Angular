import { Component, inject } from '@angular/core';
import { TcgService } from '../../services/tcg.service';

@Component({
  selector: 'app-types',
  standalone: true,
  imports: [],
  templateUrl: './types.component.html',
  styleUrl: './types.component.css'
})
export class TypesComponent {
  private _tcgService = inject(TcgService);
  cards : any[] = [];
  constructor() {
    this._tcgService.getTypes().subscribe((typesAnswer: any) => {
      console.log(typesAnswer);
      this.cards = typesAnswer.data;
    });
  }
}
