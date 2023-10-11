import { Component } from '@angular/core';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component {

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

