import { Component, computed, input, output, Signal, signal } from '@angular/core';
import { FaqItem } from '../models/faq.model';

@Component({
  selector: 'app-faq-item',
  standalone: true,
  imports: [],
  templateUrl: './faq-item.component.html',
  styleUrl: './faq-item.component.css'
})
export class FaqItemComponent {

  faq      = input<FaqItem>();
  selfId   = input<number | undefined>();           // This item’s ID
  activeId = input<Signal<number | null>>();  // The parent’s active ID
  opened   = output<number | null>();  

  isOpen = computed(() => this.activeId()?.() === this.selfId());

  toggle = () =>  {
    const id = this.selfId();
    if (id === undefined) return;
 
    if (!this.isOpen()) {
      this.opened.emit(id);
    } else {
      this.opened.emit(null)// Open the item
    }
  }
}
