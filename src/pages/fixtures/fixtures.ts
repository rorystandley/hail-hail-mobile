import { Component, OnInit } from '@angular/core';
import { LoadingController } from "ionic-angular";

// Providers
import { FixturesProvider } from "../../providers/fixtures/fixtures";

@Component( {
	selector: 'page-fixtures',
	templateUrl: 'fixtures.html'
} )
export class FixturesPage implements OnInit {

	data: any;

	constructor( private _fixtures: FixturesProvider,
	             private _loadingCtrl: LoadingController ) {
	}

	ngOnInit() {
		this.getData( null, false, true );
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
		this._fixtures.get().subscribe( resp => {
				console.log( resp );
				this.data = resp;
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

}
