import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingCardComponent } from './pricing-card.component';
import { PricingPlan } from '../interfaces/pricing-plan.interface';

@Component({
  selector: 'app-pricing-section',
  standalone: true,
  imports: [CommonModule, PricingCardComponent],
  template: `
    <section 
      #pricingSection
      class="min-h-screen bg-gray-900 py-16 px-4 flex items-center relative"
      (keydown)="onKeyDown($event)"
      tabindex="-1"
    >
      <!-- Focus trap indicator -->
      <div class="absolute top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium opacity-90 z-20">
        Use Tab/Shift+Tab to navigate between pricing cards
      </div>
      
      <div class="max-w-7xl mx-auto w-full">
        <h1 class="text-5xl font-bold text-white text-center mb-16">Pricing</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          <app-pricing-card
            *ngFor="let plan of pricingPlans; let i = index"
            [plan]="plan.plan"
            [price]="plan.price"
            [features]="plan.features"
            [isFeatured]="plan.isFeatured || false"
            class="sm:mb-6 md:mb-0"
            [attr.data-card-index]="i"
          ></app-pricing-card>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class PricingSectionComponent implements AfterViewInit, OnDestroy {
  @ViewChild('pricingSection', { static: false }) pricingSection!: ElementRef;
  
  private focusableElements: HTMLElement[] = [];
  private currentFocusIndex = 0;
  private originalBodyOverflow: string = '';

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

  ngAfterViewInit() {
    this.setupFocusableElements();
    this.setInitialFocus();
    // Prevent scrolling when focus trapped
    this.originalBodyOverflow = document.body.style.overflow;
  }

  ngOnDestroy() {
    // Restore original body overflow
    document.body.style.overflow = this.originalBodyOverflow;
  }

  private setupFocusableElements() {
    // Get all focusable elements within the pricing section
    const section = this.pricingSection.nativeElement;
    this.focusableElements = Array.from(
      section.querySelectorAll(
        'div[tabindex="0"], button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ) as HTMLElement[];
    
    // Ensure we have focusable elements
    if (this.focusableElements.length === 0) {
      // Fallback: make the section itself focusable
      section.setAttribute('tabindex', '0');
      this.focusableElements = [section];
    }
  }

  private setInitialFocus() {
    if (this.focusableElements.length > 0) {
      // Focus on the first pricing card instead of section
      setTimeout(() => {
        this.focusableElements[0].focus();
        this.currentFocusIndex = 0;
      }, 100);
    }
  }

  onKeyDown(event: KeyboardEvent) {
    // Handle Tab and Shift+Tab for focus trapping
    if (event.key === 'Tab') {
      event.preventDefault();
      
      if (event.shiftKey) {
        // Shift+Tab: Move to previous focusable element
        this.moveFocusPrevious();
      } else {
        // Tab: Move to next focusable element
        this.moveFocusNext();
      }
    }
    
    // Handle Escape to allow users to exit focus trap
    if (event.key === 'Escape') {
      event.preventDefault();
      // Focus back to the body or a safe element outside
      (document.activeElement as HTMLElement)?.blur();
    }
    
    // Handle Arrow keys for additional navigation
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      this.moveFocusNext();
    }
    
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      this.moveFocusPrevious();
    }
  }

  private moveFocusNext() {
    this.currentFocusIndex = (this.currentFocusIndex + 1) % this.focusableElements.length;
    this.focusableElements[this.currentFocusIndex].focus();
  }

  private moveFocusPrevious() {
    this.currentFocusIndex = 
      this.currentFocusIndex === 0 
        ? this.focusableElements.length - 1 
        : this.currentFocusIndex - 1;
    this.focusableElements[this.currentFocusIndex].focus();
  }
} 