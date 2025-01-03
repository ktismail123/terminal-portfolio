import { Input, ChangeDetectionStrategy, Component } from '@angular/core';
import { ECommandType } from '../../shared/models/commands.model';
@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  @Input() command!: ECommandType;
}
