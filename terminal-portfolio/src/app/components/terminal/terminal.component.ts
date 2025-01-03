import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  QueryList,
  ViewChildren
} from '@angular/core';
import { Subscription } from 'rxjs';
import { availableCommands, parentCommands } from '../../shared/data/commands.data';
import { cvURL, email, linkedInProfileURL } from '../../shared/data/utils.data';
import { ECommandType, ICommandItem } from '../../shared/models/commands.model';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from '../../commands/about/about.component';
import { ThemesComponent } from '../../commands/themes/themes.component';
import { EducationComponent } from '../../commands/education/education.component';
import { HelpComponent } from '../../commands/help/help.component';
import { NotFoundComponent } from '../../commands/not-found/not-found.component';
import { WorkComponent } from '../../commands/work/work.component';


@Component({
  selector: 'app-terminal',
  imports: [NgIf, NgFor, FormsModule, 
    AboutComponent,
    ThemesComponent,
    EducationComponent,
    HelpComponent,
    NotFoundComponent,
    WorkComponent
  ],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TerminalComponent {
  @ViewChildren('commandInputs') commandInputs!: QueryList<ElementRef>;
  commandItems: ICommandItem[] = [
    {
      id: 0,
      disabled: true,
      command: ECommandType.WELCOME,
      exists: true,
      entered: true
    },
    {
      id: 1,
      disabled: false,
      command: ECommandType.EMPTY,
      exists: true,
      entered: false
    }
  ];
  currentCommandId = 1;
  hints: ECommandType[] = [];
  currentHintIndex = 0;
  autoFocusSubscription!: Subscription;

  @HostListener('document:keydown.arrowdown', ['$event'])
  onArrowDown(event: KeyboardEvent) {
    event.preventDefault();
    this.focusOnInputField();
    this.goToNextStep();
  }

  @HostListener('document:keydown.arrowup', ['$event'])
  onArrowUp(event: KeyboardEvent) {
    event.preventDefault();
    this.focusOnInputField();
    this.goToPreviousStep();
  }

  @HostListener('document:keydown.control.l', ['$event'])
  onControlL(event: KeyboardEvent) {
    event.preventDefault();
    this.focusOnInputField();
    this.clearTerminal();
  }

  ngAfterViewInit(): void {
    this.autoFocusSubscription = this.commandInputs.changes.subscribe(() => {
      if (this.commandInputs.length) this.commandInputs.last.nativeElement.focus();
    });
  }

  getHints(id: number) {
    this.currentHintIndex = 0;
    const commandItem = this.findCommandItemById(id);
    if (!commandItem) {
      return;
    }

    if (commandItem.command === '') {
      this.hints = [];
      return;
    }

    this.hints = availableCommands
      .filter((command) => command.name.startsWith(commandItem.command))
      .map((command) => command.name as ECommandType);
  }

  autoComplete(id: number) {
    if (this.currentHintIndex >= this.hints.length) {
      return;
    }

    const commandItem = this.findCommandItemById(id);
    if (!commandItem) {
      return;
    }

    commandItem.command = this.hints[this.currentHintIndex];
    this.currentHintIndex += 1;
  }

  executeCommand(id: number): void {
    const commandItem = this.findCommandItemById(id);
    if (!commandItem) {
      return;
    }

    const givenCommand = commandItem.command;
    if (givenCommand === ECommandType.CLEAR) {
      this.clearTerminal();
      return;
    } else if (givenCommand === ECommandType.CV) {
      this.downloadCV();
    } else if (givenCommand === ECommandType.EMAIL) {
      this.mailMe();
    } else if (givenCommand === ECommandType.LINKEDIN) {
      this.goToLinkedin();
    }

    commandItem.disabled = true;
    commandItem.entered = true;
    commandItem.exists = this.checkIfCommandExists(givenCommand);
    this.currentCommandId = this.commandItems.length;

    this.commandItems.push({
      id: this.currentCommandId,
      disabled: false,
      command: ECommandType.EMPTY,
      exists: true,
      entered: false
    });
  }

  findCommandItemById(id: number): ICommandItem | undefined {
    return this.commandItems.find((item) => item.id === id);
  }

  checkIfCommandExists(command: ECommandType): boolean {
    for (const parentCommand of parentCommands) {
      if (command.startsWith(parentCommand)) return true;
    }
    return Object.values(ECommandType).includes(command);
  }

  goToPreviousStep() {
    if (this.currentCommandId > 0) {
      this.currentCommandId -= 1;
      this.getLastCommand().command = this.commandItems[this.currentCommandId].command;
    }
  }

  goToNextStep() {
    if (this.currentCommandId < this.commandItems.length - 1) {
      this.currentCommandId += 1;
      this.getLastCommand().command =
        this.currentCommandId == this.commandItems.length - 1
          ? ECommandType.EMPTY
          : this.commandItems[this.currentCommandId].command;
    }
  }

  getLastCommand() {
    return this.commandItems[this.commandItems.length - 1];
  }

  focusOnInputField() {
    this.commandInputs.last.nativeElement.focus();
  }

  clearTerminal() {
    this.commandItems = [
      {
        id: 0,
        disabled: false,
        command: ECommandType.EMPTY,
        exists: true,
        entered: false
      }
    ];
  }

  downloadCV() {
    window.open(cvURL, '_blank');
  }

  mailMe() {
    const mailText = `mailto:${email}`;
    window.location.href = mailText;
  }

  goToLinkedin() {
    window.open(linkedInProfileURL, '_blank');
  }

  ngOnDestroy(): void {
    this.autoFocusSubscription?.unsubscribe();
  }

}
