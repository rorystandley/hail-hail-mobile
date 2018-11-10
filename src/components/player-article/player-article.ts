import { Component, Input, OnInit } from '@angular/core';
import { PlayerArticle } from "../../models/player-article";
import { PlayerPage } from "../../pages/player/player";
import { App } from "ionic-angular";

@Component( {
	selector: 'app-player-article',
	templateUrl: 'player-article.html'
} )
export class PlayerArticleComponent implements OnInit {

	@Input() data: PlayerArticle;
	nav: any;

	constructor( public _app: App ) {
	}

	ngOnInit() {
		/**
		 * @type {NavControllerBase}
		 */
		this.nav = this._app.getActiveNavs()[ 0 ];
	}

	/**
	 * Link through to the single player-article page with id provided
	 * @param id
	 */
	pushPage( id ) {
		this.nav.push( PlayerPage, { id: id } );
	}

}
