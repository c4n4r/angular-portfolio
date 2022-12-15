import { Component, Input } from '@angular/core';

export interface CustomCardButton {
  color: string;
  label: string;
}

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export class CustomCardComponent {
  @Input()
  image: string | undefined = '';

  @Input()
  title: string = '';

  @Input()
  content: string = '';

  @Input()
  button: CustomCardButton | undefined;
}
