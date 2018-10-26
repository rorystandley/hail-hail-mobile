import { Directive, HostListener, Input } from "@angular/core";
import { AppCenterAnalytics } from "@ionic-native/app-center-analytics";

@Directive( { selector: '[buttonAction]' } )
export class ButtonAction {

	@Input() name;
	@Input() properties;

	constructor( private _appCenterAnalytics: AppCenterAnalytics ) {

	}

	@HostListener( 'click', [ '$event.target' ] )
	onClick() {
		this._appCenterAnalytics.setEnabled( true ).then( () => {
			this._appCenterAnalytics.trackEvent( this.name, this.properties ).then( () => {

			} );
		} );
	}
}