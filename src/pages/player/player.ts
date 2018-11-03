import { Component, OnInit } from '@angular/core';
import { LoadingController, NavParams } from "ionic-angular";

// Providers
import { TeamProvider } from "../../providers/team/team";

@Component( {
	selector: 'page-player',
	templateUrl: 'player.html'
} )
export class PlayerPage implements OnInit {

	id: string;
	player: any;

	constructor( public _teamProvider: TeamProvider,
	             private _navParams: NavParams,
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
		this._teamProvider.getPlayer( this._navParams.get( 'id' ) ).subscribe( resp => {
			this.player = resp;
			loading.dismiss();
		}, error => {
			loading.dismiss();
			/**
			 * TODO - Show error message that there gas been an issue
			 */
		} );
	}

}
