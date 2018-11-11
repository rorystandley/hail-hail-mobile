import { Component, Input } from '@angular/core';
import { Article } from "../../models/article";
import { Platform } from "ionic-angular";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { NewsProvider } from "../../providers/news/news";

@Component( {
	selector: 'app-article',
	templateUrl: 'article.html'
} )
export class ArticleComponent {

	@Input() data: Article;

	constructor( public _platform: Platform,
	             private _inAppBrowser: InAppBrowser,
	             public _news: NewsProvider ) {
	}

	/**
	 * Open the browser
	 * @type {InAppBrowserObject}
	 */
	openLink( url, id ) {
		if ( this._platform.is( 'cordova' ) ) {
			const browser = this._inAppBrowser.create( url, '_blank' );
			browser.show();
			/**
			 * Now we want to increment our hit count for this article
			 */
			this._news.incrementCount( id ).subscribe( count => {
			} );
		}
	}

}
