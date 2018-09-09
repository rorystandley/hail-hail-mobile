import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { TapticEngine } from "@ionic-native/taptic-engine";
import { LoadingController } from "ionic-angular";

// Providers
import { NewsProvider } from "../../providers/news/news";

@Component( {
	selector: 'page-news',
	templateUrl: 'news.html'
} )
export class NewsPage implements OnInit {

	data: any = [];
	type: string = 'posts';
	page: number = 1;

	constructor( public _news: NewsProvider,
	             private _inAppBrowser: InAppBrowser,
	             private _haptic: TapticEngine,
	             private _loadingCtrl: LoadingController ) {
	}

	ngOnInit() {
		this.getData(null, false, true);
	}

	getData( scroll?, reset = false, customLoader = false ) {
		/**
		 * Show our loader
		 */
		let loading = this._loadingCtrl.create( {
			spinner: 'hide',
			cssClass: 'custom-spinner-container',
			content: `
		        <img src="./assets/imgs/logo-clover.png" />
		      `
		} );
		if ( customLoader ) {
			loading.present();
		}
		/**
		 * If we need to reset do it
		 */
		if ( reset ) {
			this.page = 1;
		}
		this._news.get( this.page, this.type ).subscribe( resp => {
				/**
				 * If we need to reset do it
				 */
				if ( reset ) {
					this.data = [];
				}
				/**
				 * Complete our infinite scroll
				 */
				if ( scroll ) {
					scroll.complete();
				}
				/**
				 * We need to loop through each post and increment the view count
				 * and add to data
				 */
				resp.forEach( post => {
					this.data.push( post );
					this._news.incrementCount( post.id ).subscribe( count => {
					} );
				} );
				/**
				 * Hide the loader
				 */
				loading.dismiss();
			},
			error => {
				/**
				 * Hide the loader
				 */
				loading.dismiss();
			} )
	}

	openLink( url, id ) {
		/**
		 * Give the user haptic feedback
		 */
		this._haptic.selection();
		/**
		 * Open the browser
		 * @type {InAppBrowserObject}
		 */
		const browser = this._inAppBrowser.create( url, '_blank' );
		browser.show();
		/**
		 * Now we want to increment our hit count for this article
		 */
		this._news.incrementCount( id ).subscribe( count => {
		} );
	}

	doRefresh( refresher ) {
		/**
		 * Give the user haptic feedback
		 */
		this._haptic.selection();
		/**
		 * Refresh the data
		 */
		this.getData( refresher, true );
	}

	doInfinite( infiniteScroll ) {
		/**
		 * Give the user haptic feedback
		 */
		this._haptic.selection();
		/**
		 * Increment our page number
		 * @type {number}
		 */
		this.page = this.page + 1;
		/**
		 * Grab our data
		 */
		this.getData( infiniteScroll );
	}

}
