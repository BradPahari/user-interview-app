import { Component } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent {

    constructor() { }

    profile_name: string = "Brad Pahari";
    profile_pic = 'https://scontent-lga3-1.cdninstagram.com/vp/8dde86fa2630d68548b4fbb603de0848/5D77DE3A/t51.2885-19/s150x150/43360660_1145152915641232_2448509496230674432_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&se=8';
    profile_bio: string = "My name is Brad. I am me. I love bothering developer just like my name says. Brad Really Annoys Developers."

}
