import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi-cal',
  templateUrl: './bmi-cal.component.html',
  styleUrls: ['./bmi-cal.component.scss']
})
export class BmiCalComponent implements OnInit {


  BMI: string = null;

  constructor() { }

  ngOnInit(): void {
  }

  BMI_Metric_Calculator(KG: number, CM: number) {
    if (KG && CM)
      this.BMI = (KG / Math.pow(CM / 100, 2)).toString();
  }

  BMI_Imperial_Calculator(LB: number, IN: number) {
    if (LB && IN)
      this.BMI = ((LB / Math.pow(IN, 2)) * 703).toString();
  }
}
