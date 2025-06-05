import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingPlan } from '../interfaces/pricing-plan.interface';

@Component({
  selector: 'app-pricing-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out relative focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-75 hover:shadow-xl hover:-translate-y-1"
      [class.featured]="isFeatured"
      [attr.tabindex]="0"
      role="region"
      [attr.aria-label]="plan + ' pricing plan'"
    >
      <div class="px-8 py-8 text-center">
        <h3 class="text-xl font-medium mb-4 text-gray-600" [class.text-white]="isFeatured">{{ plan }}</h3>
        <div class="text-5xl font-bold text-gray-900" [class.text-white]="isFeatured">{{ price }}</div>
      </div>
      
      <div class="px-8 pb-6">
        <ul class="list-none space-y-0">
          <li *ngFor="let feature of features" 
              class="text-center text-gray-600 text-base py-3 border-b border-gray-200"
              [class.text-white]="isFeatured"
              [class.border-gray-500]="isFeatured">
            {{ feature }}
          </li>
        </ul>
      </div>
      
      <div class="px-8 pb-8">
        <button 
          class="w-full py-3 px-6 bg-transparent border border-gray-400 text-gray-600 font-semibold text-sm tracking-wide rounded cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-75"
          [class.border-white]="isFeatured"
          [class.text-white]="isFeatured"
          [class.hover:bg-white]="isFeatured"
          [class.hover:text-slate-700]="isFeatured"
          [class.focus:ring-white]="isFeatured"
          [class.focus:ring-opacity-100]="isFeatured"
          type="button"
          [attr.aria-label]="'Subscribe to ' + plan + ' plan'"
        >
          SUBSCRIBE
        </button>
      </div>
    </div>
  `,
  styles: [`
    .featured {
      @apply bg-slate-700 text-white transform scale-105 z-10;
    }

    .featured:focus {
      @apply ring-white ring-opacity-100;
    }

    @media (max-width: 639px) {
      .featured {
        @apply scale-100;
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