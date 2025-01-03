import { Component } from '@angular/core';
import { availableCommands, availableControls } from '../../shared/data/commands.data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-help',
  imports: [NgFor],
  templateUrl: './help.component.html',
  styleUrl: './help.component.scss'
})
export class HelpComponent {
  availableCommands = availableCommands.filter((command) => !command.parent);
  availableControls = availableControls;

}
