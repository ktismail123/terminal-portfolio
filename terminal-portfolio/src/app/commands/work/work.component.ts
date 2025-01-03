import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { workEx } from '../../shared/data/utils.data';

@Component({
  selector: 'app-work',
  imports: [NgFor],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  workExperience = workEx;
}
