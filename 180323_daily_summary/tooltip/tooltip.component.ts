import { Component, OnInit, Output } from '@angular/core';
import { TooltipDirective } from '../tooltip.directive';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {
  placement: string;

  constructor() { }

  ngOnInit() {
  }

}
