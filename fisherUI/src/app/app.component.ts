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
  public baseRef: string = "https://canifish.co";
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
      lat: -80.4984,
      long: 33,
    },
    {
      index: 2,
      name: 'Joe',
      lat: 80.4984,
      long: 33
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
    else {
      this.index = 0;
    }


  }

  getData(value) {
    //['Browser', 'Operating Systems', 'Language', 'Cities'];
    let url = this.baseRef + value + 'Data';
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
