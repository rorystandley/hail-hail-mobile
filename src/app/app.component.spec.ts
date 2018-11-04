import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import {
	PlatformMock,
	SplashScreenMock
} from '../../test-config/mocks-ionic';
import { AppCenterPush } from "@ionic-native/app-center-push";

describe( 'MyApp Component', () => {
	let fixture;
	let component;

	beforeEach( async( () => {
		TestBed.configureTestingModule( {
			declarations: [ MyApp ],
			imports: [
				IonicModule.forRoot( MyApp )
			],
			providers: [
				{ provide: SplashScreen, useClass: SplashScreenMock },
				{ provide: Platform, useClass: PlatformMock },
				AppCenterPush
			]
		} )
	} ) );

	beforeEach( () => {
		fixture = TestBed.overrideComponent( MyApp, {
			set: {
				template: ''
			}
		} ).createComponent( MyApp );
		component = fixture.componentInstance;
	} );

	it( 'should be created', () => {
		// component.platform.setCordovaTrue();
		// component.initializeApp();
	} );

} );
