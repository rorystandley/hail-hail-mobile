import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { TapticEngine } from "@ionic-native/taptic-engine";
import { LoadingController, Platform } from "ionic-angular";

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
	device: string;

	constructor( public _news: NewsProvider,
	             private _inAppBrowser: InAppBrowser,
	             public _haptic: TapticEngine,
	             private _loadingCtrl: LoadingController,
	             public _platform: Platform ) {
	}

	ngOnInit() {
		this.getData( null, false, true );
		if ( this._platform.is( 'tablet' ) ) {
			this.device = 'tablet';
		} else {
			this.device = 'mobile';
		}
	}

	/**
	 * Get our data from the API
	 * @param scroll
	 * @param {boolean} reset
	 * @param {boolean} customLoader
	 * @param {string} method
	 */
	getData( scroll?, reset = false, customLoader = false, method = 'get' ) {
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
		this._news[ method ]( this.page, this.type ).subscribe( resp => {
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

	/**
	 * Pull to refresh
	 * @param refresher
	 */
	doRefresh( refresher ) {
		/**
		 * Give the user haptic feedback
		 */
		this._haptic.selection();
		/**
		 * Refresh the data
		 */
		this.getData( refresher, true, false, 'reset' );
	}

	/**
	 * Infinite scrolling
	 * @param infiniteScroll
	 */
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
