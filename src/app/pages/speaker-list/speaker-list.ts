import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { FeedsData } from '../../providers/feeds-data';
// import { Browser } from '@capacitor/browser';
@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html',
  styleUrls: ['./speaker-list.scss'],
})
export class SpeakerListPage {
  feeds: any[] = [];

  constructor(public feedsData: FeedsData, public sanitizer: DomSanitizer) {}

  ionViewDidEnter() {
    this.feedsData.getFeeds().subscribe((feeds: any[]) => {
      this.feeds = feeds;
    });
  }

  openUrl(feedUrl) {
    //  Browser.open({ url: feedUrl });
  };

}
