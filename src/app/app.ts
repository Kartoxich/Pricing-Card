import { Component } from '@angular/core';
import { PricingSectionComponent } from './components/pricing-section.component';

@Component({
  selector: 'app-root',
  imports: [PricingSectionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'pricing-cards';
}
