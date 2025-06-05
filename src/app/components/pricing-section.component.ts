import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingCardComponent } from './pricing-card.component';
import { PricingPlan } from '../interfaces/pricing-plan.interface';

@Component({
  selector: 'app-pricing-section',
  standalone: true,
  imports: [CommonModule, PricingCardComponent],
  template: `
    <section class="pricing-section">
      <div class="container">
        <h1 class="main-title">Pricing</h1>
        
        <div class="cards-container">
          <app-pricing-card
            *ngFor="let plan of pricingPlans"
            [plan]="plan.plan"
            [price]="plan.price"
            [features]="plan.features"
            [isFeatured]="plan.isFeatured || false"
          ></app-pricing-card>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .pricing-section {
      min-height: 100vh;
      background: #111827;
      padding: 4rem 1rem;
      display: flex;
      align-items: center;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
    }

    .main-title {
      font-size: 3rem;
      font-weight: bold;
      color: white;
      text-align: center;
      margin-bottom: 4rem;
    }

    .cards-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      max-width: 1000px;
      margin: 0 auto;
      align-items: start;
    }

    @media (min-width: 768px) {
      .cards-container {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (max-width: 639px) {
      .pricing-section {
        padding: 2rem 1rem;
      }
      
      .main-title {
        font-size: 2.5rem;
        margin-bottom: 2rem;
      }
      
      .cards-container {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
    }
  `]
})
export class PricingSectionComponent {
  pricingPlans: PricingPlan[] = [
    {
      plan: 'Standard',
      price: '$100',
      features: [
        '50,000 Requests',
        '4 contributors',
        'Up to 3 GB storage space'
      ],
      isFeatured: false
    },
    {
      plan: 'Pro',
      price: '$200',
      features: [
        '100,000 Requests',
        '7 contributors',
        'Up to 6 GB storage space'
      ],
      isFeatured: true
    },
    {
      plan: 'Expert',
      price: '$500',
      features: [
        '200,000 Requests',
        '11 contributors',
        'Up to 10 GB storage space'
      ],
      isFeatured: false
    }
  ];
} 