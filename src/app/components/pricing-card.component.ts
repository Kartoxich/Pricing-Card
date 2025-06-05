import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingPlan } from '../interfaces/pricing-plan.interface';

@Component({
  selector: 'app-pricing-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="pricing-card"
      [class.featured]="isFeatured"
      [attr.tabindex]="0"
      role="region"
      [attr.aria-label]="plan + ' pricing plan'"
    >
      <div class="card-header">
        <h3 class="plan-name">{{ plan }}</h3>
        <div class="price">{{ price }}</div>
      </div>
      
      <div class="features-section">
        <ul class="features-list">
          <li *ngFor="let feature of features" class="feature-item">
            {{ feature }}
          </li>
        </ul>
      </div>
      
      <div class="card-footer">
        <button 
          class="subscribe-button"
          [class.featured-button]="isFeatured"
          type="button"
          [attr.aria-label]="'Subscribe to ' + plan + ' plan'"
        >
          SUBSCRIBE
        </button>
      </div>
    </div>
  `,
  styles: [`
    .pricing-card {
      width: 100%;
      max-width: 320px;
      margin: 0 auto;
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      transition: all 0.3s ease;
      position: relative;
    }

    .pricing-card:focus {
      outline: none;
      box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.5);
    }

    .pricing-card:hover {
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
      transform: translateY(-4px);
    }

    .pricing-card.featured {
      background: #475569;
      color: white;
      transform: scale(1.05);
      z-index: 10;
    }

    .card-header {
      padding: 2rem;
      text-align: center;
    }

    .plan-name {
      font-size: 1.25rem;
      font-weight: 500;
      margin-bottom: 1rem;
      color: #6b7280;
    }

    .featured .plan-name {
      color: white;
    }

    .price {
      font-size: 3rem;
      font-weight: bold;
      color: #111827;
    }

    .featured .price {
      color: white;
    }

    .features-section {
      padding: 0 2rem 1.5rem;
    }

    .features-list {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .feature-item {
      text-align: center;
      color: #6b7280;
      font-size: 1rem;
      padding: 0.75rem 0;
      border-bottom: 1px solid #e5e7eb;
    }

    .featured .feature-item {
      color: white;
      border-bottom-color: #64748b;
    }

    .card-footer {
      padding: 0 2rem 2rem;
    }

    .subscribe-button {
      width: 100%;
      padding: 0.75rem 1.5rem;
      background: transparent;
      border: 1px solid #9ca3af;
      color: #6b7280;
      font-weight: 600;
      font-size: 0.875rem;
      letter-spacing: 0.05em;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .subscribe-button:hover {
      background: #f9fafb;
    }

    .subscribe-button:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(107, 114, 128, 0.5);
    }

    .subscribe-button.featured-button {
      border-color: white;
      color: white;
    }

    .subscribe-button.featured-button:hover {
      background: white;
      color: #475569;
    }

    .subscribe-button.featured-button:focus {
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
    }

    @media (max-width: 639px) {
      .pricing-card {
        max-width: none;
        margin-bottom: 1.5rem;
      }
      
      .pricing-card.featured {
        transform: scale(1);
      }
    }
  `]
})
export class PricingCardComponent {
  @Input() plan: string = '';
  @Input() price: string = '';
  @Input() features: string[] = [];
  @Input() isFeatured: boolean = false;
} 