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
        this.coordinates = Geolocation.getCurrentPosition();
    }

  async ngAfterViewInit() {
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
    

     

      // mapData.forEach((markerData: any) => {
      //   const infoWindow = new googleMaps.InfoWindow({
      //     content: `<h5>${markerData.name}</h5>`
      //   });

      //   const marker = new googleMaps.Marker({
      //     position: markerData,
      //     map,
      //     title: markerData.name
      //   });

      //   marker.addListener('click', () => {
      //     infoWindow.open(map, marker);
      //   });
      // });

      // googleMaps.event.addListenerOnce(map, 'idle', () => {
      //   mapEle.classList.add('show-map');
      // });
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

async function nearbySearch() {
  //@ts-ignore
  const { Place, SearchNearbyRankPreference } = await google.maps.importLibrary('places') as google.maps.PlacesLibrary;
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

  // Restrict within the map viewport.
  let center = new google.maps.LatLng(52.369358, 4.889258);

  const request = {
      // required parameters
      fields: ['displayName', 'location', 'businessStatus'],
      locationRestriction: {
          center: center,
          radius: 500, 
      },
      // optional parameters
      includedPrimaryTypes: ['restaurant'],
      maxResultCount: 5,
      rankPreference: SearchNearbyRankPreference.POPULARITY,
      language: 'en-US',
      region: 'us',
  };

  //@ts-ignore
  const { places } = await Place.searchNearby(request);

  if (places.length) {
      console.log(places);

      const { LatLngBounds } = await google.maps.importLibrary("core") as google.maps.CoreLibrary;
      const bounds = new LatLngBounds();

      // Loop through and get all the results.
      places.forEach((place) => {
          const markerView = new AdvancedMarkerElement({
              map,
              position: place.location,
              title: place.displayName,
          });

          bounds.extend(place.location as google.maps.LatLng);
          console.log(place);
      });

      map.fitBounds(bounds);

  } else {
      console.log("No results");
  }
}


