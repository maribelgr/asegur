import { Component, AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements AfterViewInit {
  @ViewChild('nextButton', { static: true }) nextButton!: ElementRef;
  @ViewChild('nextStepButton', { static: true }) nextStepButton!: ElementRef;
  @ViewChildren('blocks') blocks!: QueryList<ElementRef>;
  @ViewChildren('checkboxes') checkboxes!: QueryList<ElementRef>;

  currentStep = 0;

  ngAfterViewInit(): void {
    this.checkboxes.forEach(checkbox => {
      checkbox.nativeElement.addEventListener('change', (event: Event) => {
        const target = event.target as HTMLInputElement;
        this.checkboxes.forEach(c => {
          if (c.nativeElement !== target) {
            c.nativeElement.checked = false;
          }
        });
      });
    });

    this.nextButton.nativeElement.addEventListener('click', () => {
      //TODO: next button logic
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        this.nextButton.nativeElement.click();
      }
    });

    this.nextStepButton.nativeElement.addEventListener('click', () => {
      const blocksArray = this.blocks.toArray();
      if (this.currentStep < blocksArray.length) {
        blocksArray[this.currentStep].nativeElement.classList.add('completed');
        this.currentStep++;
      }
    });
  }
}
