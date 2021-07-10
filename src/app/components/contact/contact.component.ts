import { Component, OnInit } from '@angular/core';
import { faDumbbell, faMapPin, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // address icons
  faDumbbell = faDumbbell;
  faMapPin = faMapPin;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  // social media icon
  faInstagram = faInstagram;
  faLinkedinIn = faLinkedinIn;
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;

  constructor() { }

  ngOnInit(): void {
  }

}
