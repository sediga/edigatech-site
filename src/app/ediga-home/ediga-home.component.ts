
import { Component } from '@angular/core';

@Component({
  selector: 'app-ediga-home',
  templateUrl: './ediga-home.component.html',
  styleUrls: ['./ediga-home.component.scss']
})
export class EdigaHomeComponent {
  currentYear: number = new Date().getFullYear();
}
