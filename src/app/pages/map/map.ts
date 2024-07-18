import { Component, ElementRef, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

import { ConferenceData } from '../../providers/conference-data';
import { Platform } from '@ionic/angular';
import { DOCUMENT} from '@angular/common';

import { darkStyle } from './map-dark-style';
declare var google;
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  styleUrls: ['./map.scss']
})
export class MapPage implements AfterViewInit {
  @ViewChild('mapCanvas', { static: true }) mapElement: ElementRef;
  coordinates;
  markers: any = [];
  constructor(
    @Inject(DOCUMENT) private doc: Document,
    public confData: ConferenceData,
    public platform: Platform) {
       
    }

    ngAfterViewInit(): void {
      
    }

  async ionViewWillEnter() {
    this.coordinates = Geolocation.getCurrentPosition();
    const appEl = this.doc.querySelector('ion-app');
    let isDark = false;
    let style = [];
    if (appEl.classList.contains('ion-palette-dark')) {
      style = darkStyle;
    }

    const googleMaps = await getGoogleMaps(
      'AIzaSyDnLmkJWaS8uCs3sw0IuJrvPysb4i5HIhA'
    );

    let map;
    Geolocation.getCurrentPosition().then((location)=>{
      console.log('location',location);
      const mapEle = this.mapElement.nativeElement;
      const coordinates = {
        lat: location.coords.latitude,
        lng: location.coords.longitude
      };
      map = new googleMaps.Map(mapEle, {
        center: coordinates,
        zoom: 16,
        styles: style
      });

      googleMaps.event.addListenerOnce(map, 'idle', () => {
        mapEle.classList.add('show-map');
      });

    });
    // this.confData.getMap().subscribe((mapData: any) => {
    //   const mapEle = this.mapElement.nativeElement;
    //   const coordinates = {
    //     lat: this.coordinates.__zone_symbol__value.coords.latitude,
    //     lng: this.coordinates.__zone_symbol__value.coords.longitude
    //   };
    //   map = new googleMaps.Map(mapEle, {
    //     center: coordinates,
    //     zoom: 16,
    //     styles: style
    //   });

    //   mapData.forEach((markerData: any) => {
    //     const infoWindow = new googleMaps.InfoWindow({
    //       content: `<h5>${markerData.name}</h5>`
    //     });

    //     const marker = new googleMaps.Marker({
    //       position: markerData,
    //       map,
    //       title: markerData.name
    //     });

    //     marker.addListener('click', () => {
    //       infoWindow.open(map, marker);
    //     });
    //   });

    //   googleMaps.event.addListenerOnce(map, 'idle', () => {
    //     mapEle.classList.add('show-map');
    //   });
    // });

    // const observer = new MutationObserver((mutations) => {
    //   mutations.forEach((mutation) => {
    //     if (mutation.attributeName === 'class') {
    //       const el = mutation.target as HTMLElement;
    //       isDark = el.classList.contains('ion-palette-dark');
    //       if (map && isDark) {
    //         map.setOptions({styles: darkStyle});
    //       } else if (map) {
    //         map.setOptions({styles: []});
    //       }
    //     }
    //   });
    // });
    // observer.observe(appEl, {
    //   attributes: true
    // });
  }
}






function getGoogleMaps(apiKey: string): Promise<any> {
  const win = window as any;
  const googleModule = win.google;
  if (googleModule && googleModule.maps) {
    return Promise.resolve(googleModule.maps);
  }

  return new Promise((resolve, reject) => {

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    script.onload = () => {
      const googleModule2 = win.google;
      if (googleModule2 && googleModule2.maps) {
        resolve(googleModule2.maps);
      } else {
        reject('google maps not available');
      }
    };
  });
}



