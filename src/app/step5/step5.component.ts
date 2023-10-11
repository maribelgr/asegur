import { Component } from '@angular/core';

@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.scss']
})
export class Step5Component {

  selectedCard: number | null = null;

  constructor() { }

  selectCard(event: MouseEvent, cardNumber: number): void {
    event.stopPropagation();

    if (this.selectedCard === cardNumber) {
      this.selectedCard = null;
    } else {
      this.selectedCard = cardNumber;
    }

    console.log('Tarjeta seleccionada:', this.selectedCard);
  }

  handleLabelClick(event: MouseEvent): void {
    event.stopPropagation();
  }

  isSelected(cardNumber: number): boolean {
    return this.selectedCard === cardNumber;
  }
}

