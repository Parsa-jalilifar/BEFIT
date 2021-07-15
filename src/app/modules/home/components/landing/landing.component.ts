import { Component, OnInit } from '@angular/core';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  menuActive: number = 1;

  faDumbbell = faDumbbell;

  constructor() { }

  ngOnInit(): void {
    this.intersectionObserver();
  }

  setMenuActive(menuDigit: number) {
    this.menuActive = menuDigit;
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
