import { Component, ElementRef, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

import { ConferenceData } from '../../providers/conference-data';
import { Platform } from '@ionic/angular';
import { DOCUMENT} from '@angular/common';

import { darkStyle } from './map-dark-style';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  styleUrls: ['./map.scss']
})
export class MapPage implements AfterViewInit {
  @ViewChild('mapCanvas', { static: true }) mapElement: ElementRef;
  coordinates;
  markers = [];
  constructor(
    @Inject(DOCUMENT) private doc: Document,
    public confData: ConferenceData,
    public platform: Platform) {
       
    }

  async ngAfterViewInit() {
    this.coordinates = Geolocation.getCurrentPosition();
    const appEl = this.doc.querySelector('ion-app');
    let isDark = false;
    let style = [];
    if (appEl.classList.contains('ion-palette-dark')) {
      style = darkStyle;
    }

    const googleMaps = await getGoogleMaps(
      'AIzaSyC0wJ8nigMsFcu8x400koar_v6tzr1_z0o'
    );

    let map;
    
  // let service = new googleMaps.PlacesService(map);

  // service.nearbySearch({
  //   location: this.coordinates.__zone_symbol__value.coords.latitude,
  //   radius: '5000',
  //   types: ['dementia_center']
  // }, (results, status) => {
  //   for (var i = 0; i < results.length; i++) {
  //     //this.createMarker(results[i]);
  //     this.markers = new googleMaps.Marker({
  //       map: map,
  //       position: results[i].geometry.location
  //   });
  // console.log('this.markers', this.markers);
  //   let infowindow = new googleMaps.InfoWindow();
  
  //   googleMaps.event.addListener(this.markers, 'click', () => {
  //     // this.ngZone.run(() => {
  //     //   infowindow.setContent(place.name);
  //     //   infowindow.open(this.map, this.markers);
  //     // });
  //   });

  //   }
  // });

    this.confData.getMap().subscribe((mapData: any) => {
      const mapEle = this.mapElement.nativeElement;
      const coordinates = {
        lat: this.coordinates.__zone_symbol__value.coords.latitude,
        lng: this.coordinates.__zone_symbol__value.coords.longitude
      };
      map = new googleMaps.Map(mapEle, {
        center: coordinates,
        zoom: 16,
        styles: style
      });

    //   const request = {
    //     query: "dementia center",
    //     fields: ["name", "geometry"],
    //   };
    
    //   let service = new googleMaps.maps.places.PlacesService(map);
    
    //   service.findPlaceFromQuery(
    //     request,
    //     (
    //       results: googleMap.maps.places.PlaceResult[] | null,
    //       status: google.maps.places.PlacesServiceStatus
    //     ) => {
    //       if (status === googleMaps.maps.places.PlacesServiceStatus.OK && results) {
    //         for (let i = 0; i < results.length; i++) {
    //           this.createMarker(results[i]);
    //         }
    
    //         map.setCenter(results[0].geometry!.location!);
    //       }
    //     }
    //   );
    // }
    
    // function createMarker(place) {
    //   if (!place.geometry || !place.geometry.location) return;
    
    //   const marker = new google.maps.Marker({
    //     map,
    //     position: place.geometry.location,
    //   });
    // }
    

     

      mapData.forEach((markerData: any) => {
        const infoWindow = new googleMaps.InfoWindow({
          content: `<h5>${markerData.name}</h5>`
        });

        const marker = new googleMaps.Marker({
          position: markerData,
          map,
          title: markerData.name
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      });

      googleMaps.event.addListenerOnce(map, 'idle', () => {
        mapEle.classList.add('show-map');
      });
    });

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const el = mutation.target as HTMLElement;
          isDark = el.classList.contains('ion-palette-dark');
          if (map && isDark) {
            map.setOptions({styles: darkStyle});
          } else if (map) {
            map.setOptions({styles: []});
          }
        }
      });
    });
    observer.observe(appEl, {
      attributes: true
    });
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
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.31`;
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



