import { Component } from '@angular/core';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component {

  selectedCards: { [key: number]: boolean } = {};

  constructor() { }

  selectCard(event: MouseEvent, cardNumber: number): void {
    event.stopPropagation();

    if (this.selectedCards[cardNumber]) {
      this.selectedCards[cardNumber] = false;
    } else {
      this.selectedCards[cardNumber] = true;
    }

    console.log('Tarjetas seleccionadas:', this.selectedCards);
  }

  handleLabelClick(event: MouseEvent): void {
    event.stopPropagation();
  }

  isSelected(cardNumber: number): boolean {
    return this.selectedCards[cardNumber] === true;
  }
}

