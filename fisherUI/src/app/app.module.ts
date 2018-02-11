import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxMapboxGLModule}  from 'ngx-mapbox-gl';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';



/*
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleG1hY2tpbm5vbiIsImEiOiJjamRodHpybnkxMmQwMndwN3dqbm5hOWFvIn0.fvoLHQpY-Eqzx6V851jirQ';
var map = new mapboxgl.Map({
container: 'YOUR_CONTAINER_ELEMENT_ID',
style: 'mapbox://styles/mapbox/streets-v10'
});
 */

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxMapboxGLModule.forRoot({
          accessToken:
          'pk.eyJ1IjoiYWxleG1hY2tpbm5vbiIsImEiOiJjamRodHpybnkxMmQwMndwN3dqbm5hOWFvIn0.fvoLHQpY-Eqzx6V851jirQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
