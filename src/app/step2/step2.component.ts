import { Component } from '@angular/core';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component {

  userName: string = '';

  saveUserName(event: any): void {
    this.userName = event.target.value;
    console.log(this.userName);  // Opcional: solo para verificar que funciona
  }

}
