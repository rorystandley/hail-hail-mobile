import { Component, OnInit } from '@angular/core';
import { App, LoadingController } from "ionic-angular";

// Pages
import { PlayerPage } from "../player/player";
// Providers
import { TeamProvider } from "../../providers/team/team";

@Component( {
	selector: 'page-team',
	templateUrl: 'team.html'
} )
export class TeamPage implements OnInit {

	players: any;
	nav: any;

	constructor( private _teamProvider: TeamProvider,
	             public _app: App,
	             private _loadingCtrl: LoadingController ) {
	}

	ngOnInit() {
		/**
		 * Show the loader
		 */
		let loading = this._loadingCtrl.create( {
			spinner: 'hide',
			cssClass: 'custom-spinner-container',
			content: `
		        <img src="./assets/imgs/logo-clover.png" />
		      `
		} );
		loading.present();
		/**
		 * @type {NavControllerBase}
		 */
		this.nav = this._app.getActiveNavs()[ 0 ];
		/**
		 * Get all the players
		 */
		this._teamProvider.get().subscribe( resp => {
				this.players = resp;
				loading.dismiss();
			},
			error => {
				loading.dismiss();
			} )
	}

	/**
	 * Link through to the single player page with id provided
	 * @param id
	 */
	pushPage( id ) {
		this.nav.push( PlayerPage, { id: id } );
	}

}
