import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home/home.service';
import { Place } from 'src/app/home/place.model';

@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.page.html',
  styleUrls: ['./unit-detail.page.scss'],
})
export class UnitDetailPage implements OnInit {
  places: Place[];
  unitDetails: string[] = [
    'Homeowner Race: ',
    'Country Of Citizenship: ',
    'Decorative Style: ',
    'Extension Request: ',
    'Price: ',
    'Title Deed: ',
    'House Age: ',
    'Building Height: ',
    'No. Of Units (total): ',
    'No. Of Units (per floor): ',
    'Room Type: ',
    'Area: ',
    'No Of Rooms: ',
    'No. Of Toilets: ',
    'House Structure: ',
    'Door Facing: ',
    'Room Orientation: ',
    'Corner Unit: ',
    'Ground/Top Floor: ',
    'Western Sun: ',
    'Noisy: ',
    'Refurbished State: ',
    'Landscape From Window: ',
    'Bomb Shelter: ',
    'Open Kitchen: ',
    'Gas Management Fee: ',
    'House Tax: ',
    'Rental Status: '
  ]

  constructor(
    private homeService: HomeService,
    //private router: Router
  ) { }

  ngOnInit() {
    this.places = this.homeService.allPlaces;
  }


  handleChange(event) {
    console.log(event.detail.value);
  }


}
