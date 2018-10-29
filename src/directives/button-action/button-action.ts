import { Directive, HostListener, Input } from "@angular/core";
import { AppCenterAnalytics } from "@ionic-native/app-center-analytics";
import { TapticEngine } from "@ionic-native/taptic-engine";
import { Platform } from "ionic-angular";

@Directive( { selector: '[buttonAction]' } )
export class ButtonAction {

	@Input() name;
	@Input() properties;

	constructor(
		public platform: Platform,
		private _appCenterAnalytics: AppCenterAnalytics,
		private _haptic: TapticEngine
	) {

	}

	@HostListener( 'click', [ '$event.target' ] )
	onClick() {
		/**
		 * Make a call to app centre
		 */
		if ( this.platform.is( 'cordova' ) ) {
			this._appCenterAnalytics.setEnabled( true ).then( () => {
				this._appCenterAnalytics.trackEvent( this.name, this.properties ).then( () => {

				} );
			} );
			/**
			 * Haptics baby
			 */
			this._haptic.selection();
		}
	}
}