import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { availableCommands } from '../../shared/data/commands.data';
import { availableThemes } from '../../shared/data/utils.data';
import { ThemeService } from '../../shared/services/theme.service';
import { ECommandType } from '../../shared/models/commands.model';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-themes',
  imports:[NgIf, NgFor, CommonModule],
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemesComponent implements OnInit {
  @Input() command!: ECommandType;
  themes = availableThemes;
  childCommands = availableCommands
    .filter((command) => command.parent === ECommandType.THEMES)
    .map((command) => command.name);

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.switchTheme();
  }

  get showThemes(): boolean {
    return this.command.trimEnd() === ECommandType.THEMES;
  }

  get showOnlyUsage() {
    return (
      this.command.startsWith(ECommandType.THEMES) &&
      this.command.length > 7 &&
      !this.childCommands.includes(this.command)
    );
  }

  switchTheme() {
    if (!this.childCommands.includes(this.command)) {
      return;
    }
    const theme = this.command.split(' ').at(-1);
    this.themeService.switchTheme(theme);
  }
}