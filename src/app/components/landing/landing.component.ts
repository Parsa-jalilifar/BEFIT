import { Component, OnInit } from '@angular/core';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  faDumbbell = faDumbbell;

  constructor() { }

  ngOnInit(): void {
  }

}
