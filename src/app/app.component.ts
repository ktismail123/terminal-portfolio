import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TerminalComponent } from './components/terminal/terminal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TerminalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'terminal-portfolio';
}
