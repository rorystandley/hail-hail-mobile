import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Observable } from "rxjs/Observable";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import 'rxjs/add/observable/of';
import { NavController } from "ionic-angular";

export class teamProviderMockSucess {
	public get(): any {
		return Observable.of( {} );
	}

	public getPlayer( id ): any {
		return Observable.of( {} );
	}
}

export class newsProviderMockSucess {
	public get( id, type = 'posts' ): any {
		return Observable.of( [] );
	}

	public incrementCount( id ): any {
		return Observable.of( {} );
	}
}

export class teamProviderMockFail {
	public get(): any {
		return new ErrorObservable( false );
	}

	public getPlayer( id ): any {
		return new ErrorObservable( false );
	}
}

export class PlatformMock {
	public ready(): Promise<string> {
		return new Promise( ( resolve ) => {
			resolve( 'READY' );
		} );
	}

	public getQueryParam() {
		return true;
	}

	public registerBackButtonAction( fn: Function, priority?: number ): Function {
		return (() => true);
	}

	public hasFocus( ele: HTMLElement ): boolean {
		return true;
	}

	public doc(): HTMLDocument {
		return document;
	}

	public is(): boolean {
		return true;
	}

	public getElementComputedStyle( container: any ): any {
		return {
			paddingLeft: '10',
			paddingTop: '10',
			paddingRight: '10',
			paddingBottom: '10',
		};
	}

	public onResize( callback: any ) {
		return callback;
	}

	public registerListener( ele: any, eventName: string, callback: any ): Function {
		return (() => true);
	}

	public win(): Window {
		return window;
	}

	public raf( callback: any ): number {
		return 1;
	}

	public timeout( callback: any, timer: number ): any {
		return setTimeout( callback, timer );
	}

	public cancelTimeout( id: any ) {
		// do nothing
	}

	public getActiveElement(): any {
		return document[ 'activeElement' ];
	}
}

export class StatusBarMock extends StatusBar {
	styleDefault() {
		return;
	}
}

export class SplashScreenMock extends SplashScreen {
	hide() {
		return;
	}
}

export class NavMock {

	public pop(): any {
		return new Promise( function ( resolve: Function ): void {
			resolve();
		} );
	}

	public push(): any {
		return new Promise( function ( resolve: Function ): void {
			resolve();
		} );
	}

	public getActive(): any {
		return {
			'instance': {
				'model': 'something',
			},
		};
	}

	public setRoot(): any {
		return true;
	}

	public registerChildNav( nav: any ): void {
		return;
	}

}

export class navParamsMock {
	static returnParam = null;

	public get( key ): any {
		if ( navParamsMock.returnParam ) {
			return navParamsMock.returnParam
		}
		if ( key === 'profile' ) {
			return 'pii';
		}
		return '';
	}

	static setParams( value ) {
		navParamsMock.returnParam = value;
	}
}

export class mockLoading {
	public static instance(): any {
		let instance = jasmine.createSpyObj( 'Loading', [ 'present', 'dismiss', 'setContent', 'setSpinner', 'create' ] );
		instance.present.and.returnValue( Promise.resolve() );

		return instance;
	}
}

export class mockLoadingController {
	public static instance( loading?: mockLoading ): any {

		let instance = jasmine.createSpyObj( 'LoadingController', [ 'create' ] );
		instance.create.and.returnValue( loading || mockLoading.instance() );

		return instance;
	}
}

export class mockNav {
	public pop(): any {
		return new Promise( function ( resolve: Function ): void {
			resolve();
		} );
	}

	public push(): any {
		return new Promise( function ( resolve: Function ): void {
			resolve();
		} );
	}

	public getActive(): any {
		return NavController;
	}

	public getActiveNavs(): any {
		return [ {
			setRoot() {
			}
		} ];
	}

	public setRoot(): any {
		return true;
	}

	public getViews(): any {
		return [];
	}
}

export class mockAppPlatform {
	public getActiveNavs(): mockNav {
		return new mockNav().getActiveNavs();
	}

	public getActiveNavContainers() {
		return [
			{
				_views: [
					{}
				]
			}
		]
	}
}

export class DeepLinkerMock {

}