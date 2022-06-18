import { Component, Input, HostListener, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home-spinner',
  templateUrl: './home-spinner.component.html',
  styleUrls: ['./home-spinner.component.scss']
})
export class HomeSpinnerComponent{
  @Input() loaderType: number = 1;
  @Input() showLoader: boolean;
}
