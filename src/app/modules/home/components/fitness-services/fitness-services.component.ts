import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fitness-services',
  templateUrl: './fitness-services.component.html',
  styleUrls: ['./fitness-services.component.scss']
})
export class FitnessServicesComponent implements OnInit {

  services = [
    {
      "Title": "Psycho Training",
      "ImageSrc": "https://firebasestorage.googleapis.com/v0/b/befit-96585.appspot.com/o/Images%2FServices%2Fpsycho_training.jpg?alt=media&token=41fa7d54-fabd-4b52-a8f9-bfdcf85ec6a6",
      "Info": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure perspiciatis quam autem eos corporis exprovident! Ad voluptas labore ex?"
    },
    {
      "Title": "Self Defence",
      "ImageSrc": "https://firebasestorage.googleapis.com/v0/b/befit-96585.appspot.com/o/Images%2FServices%2Fself_defense.jpg?alt=media&token=1fc79209-02b9-40d4-96e9-0841d625afef",
      "Info": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure perspiciatis quam autem eos corporis exprovident! Ad voluptas labore ex?"
    },
    {
      "Title": "Yoga",
      "ImageSrc": "https://firebasestorage.googleapis.com/v0/b/befit-96585.appspot.com/o/Images%2FServices%2Fyoga.jpg?alt=media&token=cbe9610c-5d82-4eb8-9c3e-920cf14fb705",
      "Info": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure perspiciatis quam autem eos corporis exprovident! Ad voluptas labore ex?"
    },
    {
      "Title": "Boxing",
      "ImageSrc": "https://firebasestorage.googleapis.com/v0/b/befit-96585.appspot.com/o/Images%2FServices%2Fboxing.jpg?alt=media&token=d2f1d209-36c7-401f-8230-8166c79d6f81",
      "Info": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure perspiciatis quam autem eos corporis exprovident! Ad voluptas labore ex?"
    },
    {
      "Title": "Cardio Training",
      "ImageSrc": "https://firebasestorage.googleapis.com/v0/b/befit-96585.appspot.com/o/Images%2FServices%2Fcardio_training.jpg?alt=media&token=bf379046-3734-4fd8-9bd8-e18536264f48",
      "Info": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure perspiciatis quam autem eos corporis exprovident! Ad voluptas labore ex?"
    },
    {
      "Title": "Nutrition Advice",
      "ImageSrc": "https://firebasestorage.googleapis.com/v0/b/befit-96585.appspot.com/o/Images%2FServices%2Fnutrition_advice.jpg?alt=media&token=59974f38-5380-4224-9912-b792c147f280",
      "Info": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure perspiciatis quam autem eos corporis exprovident! Ad voluptas labore ex?"
    }
  ];

  constructor() {

  }

  ngOnInit(): void { }

}
