import { Component } from '@angular/core';
import { InAppBrowser } from "@ionic-native/in-app-browser";

@Component( {
	selector: 'page-about',
	templateUrl: 'about.html'
} )
export class AboutPage {

	data: any = [];
	type: string = 'posts';
	page: number = 1;

	constructor( public _inAppBrowser: InAppBrowser ) {
	}

	/**
	 * Open a link in the InAppBrowser
	 * @param url
	 */
	openLink( url ) {
		const browser = this._inAppBrowser.create( url, '_blank' );
		browser.show();
	}

}
