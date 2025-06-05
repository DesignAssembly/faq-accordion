import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaqCardComponent } from './components/faq-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaqCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
