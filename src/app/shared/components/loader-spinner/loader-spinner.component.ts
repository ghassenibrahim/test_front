import { Component, Input, HostListener, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-loader-spinner',
  templateUrl: './loader-spinner.component.html',
  styleUrls: ['./loader-spinner.component.scss']
})
export class LoaderSpinnerComponent{
  @Input() loaderType: number = 1;
  @Input() showLoader: boolean;
}
