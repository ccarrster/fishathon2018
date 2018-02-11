import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public index = 0;
  public baseref = 'https://canifish.co/';
  public fishDesired: string;

  public fishlist: Array<any> = [
    'Trout',
    'North Pike',
    'beer',
    'Bass'
  ];
  public geopoints: Array<any> = [
    {
      index: 0,
      name: 'Mary',
      lat: -80.4984,
      long: 43.4513,
    },
    {
      index: 1,
      name: 'Lee',
      lat: -81.4984,
      long: 42.7,
    },
    {
      index: 2,
      name: 'Joe',
      lat: -80.4984,
      long: 43.7
    },
    {
      index: 3,
      name: 'Dave',
      lat: -81.4984,
      long: 43.7
    },
    {
      index: 4,
      name: 'Alex',
      lat: -75.4984,
      long: 44.7
    },
  ];

  public geopoint: any = {
    lat: 0,
    long: 0
  };

  constructor(private http: HttpClient) {
  }


  ngOnInit() {
    this.getData(this.geopoint);
  }

  updateFish(fish) {
    this.fishDesired = fish;
    console.log(this.fishDesired);
  }

  updatePoint(person) {
    console.log('person %s', person);
    if (person === 'Mary') {
      this.index = 0;
    }
    else if (person === 'Lee') {
      this.index = 1;
    }
    else if (person === 'Joe') {
      this.index = 2;
    }
    else if (person === 'Dave') {
      this.index = 3;
    }
    else if (person === 'Alex') {
      this.index = 4;
    }
    else {
      this.index = 0;
    }
  }

  getData(value) {
    //['Browser', 'Operating Systems', 'Language', 'Cities'];
    //value = value.replace(/ /, '');
    let url = this.baseref;
    this.http.get(url)
      .subscribe(
        (data: any[]) => {
          this.filterData(data);
        }
      );
  }

  filterData(data) {

  }

}
