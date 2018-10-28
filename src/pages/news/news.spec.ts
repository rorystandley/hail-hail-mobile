// Core files and modules
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { LoadingController } from "ionic-angular";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { TapticEngine } from "@ionic-native/taptic-engine";

// Pages
import { NewsPage } from "./news";

// Providers
import { NewsProvider } from "../../providers/news/news";

// Mocks
import { newsProviderMockSucess, mockLoadingController } from "../../../test-config/mocks-ionic";

// Variables
let component: NewsPage;
let fixture: ComponentFixture<NewsPage>;

describe( 'News: Success', () => {
	beforeEach( () => {
		TestBed.configureTestingModule( {
			imports: [],
			declarations: [ NewsPage ],
			providers: [
				{ provide: NewsProvider, useClass: newsProviderMockSucess },
				InAppBrowser,
				TapticEngine,
				{ provide: LoadingController, useFactory: () => mockLoadingController.instance() },
			],
			schemas: []

		} );

		fixture = TestBed.overrideComponent( NewsPage, {
			set: {
				template: ''
			}
		} ).createComponent( NewsPage );
		component = fixture.componentInstance;

	} );

	afterEach( () => {
		fixture.destroy();
		component = null;
	} );

	it( 'expect ngOninit() to request news data', () => {
		spyOn( component, 'getData' );
		component.ngOnInit();
		expect( component.getData ).toHaveBeenCalled();
	} );

	it( 'expect doInfinite() to request news data', () => {
		spyOn( component, 'getData' );
		component.doInfinite( false );
		expect( component.getData ).toHaveBeenCalled();
	} );

} );

// describe( 'News: Error', () => {
// 	beforeEach( () => {
// 		TestBed.configureTestingModule( {
// 			imports: [],
// 			declarations: [ PlayerPage ],
// 			providers: [
// 				{ provide: NewsProvider, useClass: newsProviderMockSucess },
// 				InAppBrowser,
// 				TapticEngine,
// 				{ provide: LoadingController, useFactory: () => mockLoadingController.instance() },
// 			],
// 			schemas: []
//
// 		} );
//
// 		fixture = TestBed.overrideComponent( PlayerPage, {
// 			set: {
// 				template: ''
// 			}
// 		} ).createComponent( PlayerPage );
// 		component = fixture.componentInstance;
//
// 	} );
//
// 	afterEach( () => {
// 		fixture.destroy();
// 		component = null;
// 	} );
//
// 	it( 'expect ngOninit() to request player data and fail', () => {
// 		spyOn( component._teamProvider, 'getPlayer').and.callThrough();
// 		component.ngOnInit();
// 		expect( component._teamProvider.getPlayer ).toHaveBeenCalled();
// 	} );
//
// } );
