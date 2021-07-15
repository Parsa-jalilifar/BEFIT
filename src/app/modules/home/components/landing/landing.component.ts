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
    this.intersectionObserver();
  }

  intersectionObserver(): void {

    const header = document.querySelector(".header");
    const landing = document.querySelector("#landing");

    const options = {};

    const headerObserver = new IntersectionObserver((entries, menuObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          header.classList.add("move");
        } else {
          header.classList.remove("move");
        }
      });
    }, options);

    headerObserver.observe(landing);
  }

}
