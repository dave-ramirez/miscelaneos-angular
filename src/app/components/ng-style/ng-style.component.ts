import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{ 'font-size': tamano + 'px' }">
      Hola mundo
    </p>

    <button class="btn btn-primary" (click)="tamano = tamano + 5">
      <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-primary" (click)="tamano = tamano - 5">
    <i class="fa fa-minus"></i>
  </button>

   <!-- <p [style.fontSize.px]="tamano">
    Hola mundo
  </p> -->
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano = 30;

  constructor() { }

  ngOnInit() {
  }

}
