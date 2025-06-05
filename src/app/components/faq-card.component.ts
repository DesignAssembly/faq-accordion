import { Component, effect, signal } from '@angular/core';
import { FaqDataService } from '../services/fag-data.service';
import { FaqItemComponent } from './faq-item.component';


@Component({
  selector: 'app-faq-card',
  standalone: true,
  imports: [FaqItemComponent],
  templateUrl: './faq-card.component.html',
  styleUrl: './faq-card.component.css'
})
export class FaqCardComponent {

  readonly faqs     = this.faqDataService.getFaqs();
  readonly activeId = signal<number | null>(null);

  constructor(private faqDataService: FaqDataService) {
    effect(() => {
      const list = this.faqs();
      if (list && list.length > 0) {
        this.activeId.set(list[0].id);
      }
    });
  }
}
