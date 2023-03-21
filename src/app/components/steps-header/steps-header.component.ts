import { Component, OnInit } from '@angular/core';
import { Wizardinterface } from '../../interfaces/wizard-interface';

@Component({
  selector: 'app-steps-header',
  templateUrl: './steps-header.component.html',
  styleUrls: ['./steps-header.component.scss'],
})
export class StepsHeaderComponent  implements OnInit {

  public setComponentRoute: Array<Wizardinterface> = [];

  constructor() { }

  ngOnInit() {
    this.setComponentRoute = [{
      title: 'Bienvenido',
      pageNumber: 0,
      active: true,
    },
    {
      title: 'Datos Generales',
      pageNumber: 1,
      active: false,
    },
    {
      title: 'Facephi',
      pageNumber: 2,
      active: false,
    }
  ];
  }

}
