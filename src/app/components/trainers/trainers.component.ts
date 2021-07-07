import { Component, OnInit } from '@angular/core';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent implements OnInit {

  // social media icons
  instaIcon = faInstagram;
  linIcon = faLinkedinIn;
  facebookIcon = faFacebookF;
  twitterIcon = faTwitter;

  trainers = [
    {
      "Name": "Gloria John",
      "Profession": "Crossfit Expert",
      "ImageSrc": "https://firebasestorage.googleapis.com/v0/b/befit-96585.appspot.com/o/Images%2FTrainers%2FT1.jpg?alt=media&token=c69f195d-c39c-4804-b2b5-ac3ca74318a1",
    },
    {
      "Name": "William Dixon",
      "Profession": "Bodybuilding Coach",
      "ImageSrc": "https://firebasestorage.googleapis.com/v0/b/befit-96585.appspot.com/o/Images%2FTrainers%2FT2.jpg?alt=media&token=3ae11308-9081-4205-ba77-492d630bd8fc",
    },
    {
      "Name": "Ron Hendrix",
      "Profession": "Power&Strength Trainer",
      "ImageSrc": "https://firebasestorage.googleapis.com/v0/b/befit-96585.appspot.com/o/Images%2FTrainers%2FT3.jpg?alt=media&token=d271a5cb-cfad-49c7-9116-473396000877",
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
