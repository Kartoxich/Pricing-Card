import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingCardComponent } from './pricing-card.component';
import { PricingPlan } from '../interfaces/pricing-plan.interface';

@Component({
  selector: 'app-pricing-section',
  standalone: true,
  imports: [CommonModule, PricingCardComponent],
  template: `
    <section class="min-h-screen bg-gray-900 py-16 px-4 flex items-center">
      <div class="max-w-7xl mx-auto w-full">
        <h1 class="text-5xl font-bold text-white text-center mb-16">Pricing</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          <app-pricing-card
            *ngFor="let plan of pricingPlans"
            [plan]="plan.plan"
            [price]="plan.price"
            [features]="plan.features"
            [isFeatured]="plan.isFeatured || false"
            class="sm:mb-6 md:mb-0"
          ></app-pricing-card>
        </div>
      </div>
    </section>
  `,
  styles: []
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