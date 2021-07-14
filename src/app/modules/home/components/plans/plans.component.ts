import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  plans = [
    {
      "membership": "essential",
      "benefits": [
        "BEFIT Rewards",
        "Two classes according to your choice",
        "One day free use"
      ],
      "price": "26.99"
    },
    {
      "membership": "premium",
      "benefits": [
        "BEFIT Rewards",
        "Four classes according to your choice",
        "adds one of your family member"
      ],
      "price": "31.99"
    },
    {
      "membership": "ultimate",
      "benefits": [
        "BEFIT Rewards",
        "All classes according to your choice",
        "adds all  your family member"
      ],
      "price": "36.99"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
