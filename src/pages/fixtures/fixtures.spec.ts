// Core files and modules
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { LoadingController, Platform } from "ionic-angular";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { TapticEngine } from "@ionic-native/taptic-engine";

// Pages
import { FixturesPage } from "./fixtures";

// Providers
import { NewsProvider } from "../../providers/news/news";

// Mocks
import {
	newsProviderMockSucess,
	mockLoadingController,
	PlatformMock,
	newsProviderMockFail, mockScrollEvent, fixturesProviderMockSucess, fixturesProviderMockFail
} from "../../../test-config/mocks-ionic";
import { FixturesProvider } from "../../providers/fixtures/fixtures";

// Variables
let component: FixturesPage;
let fixture: ComponentFixture<FixturesPage>;

describe( 'Fixtures: Success', () => {
	beforeEach( () => {
		TestBed.configureTestingModule( {
			imports: [],
			declarations: [ FixturesPage ],
			providers: [
				{ provide: FixturesProvider, useClass: fixturesProviderMockSucess },
				{ provide: LoadingController, useFactory: () => mockLoadingController.instance() },
			],
			schemas: []

		} );

		fixture = TestBed.overrideComponent( FixturesPage, {
			set: {
				template: ''
			}
		} ).createComponent( FixturesPage );
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

	it( 'expect getData() to get latest news and succeed', () => {
		spyOn( component, 'getData' ).and.callThrough();
		component.getData( new mockScrollEvent, true, true );
		expect( component.getData ).toHaveBeenCalled();
	} );

} );

describe( 'Fixtures: Fail', () => {
	beforeEach( () => {
		TestBed.configureTestingModule( {
			imports: [],
			declarations: [ FixturesPage ],
			providers: [
				{ provide: FixturesProvider, useClass: fixturesProviderMockFail },
				{ provide: LoadingController, useFactory: () => mockLoadingController.instance() },
			],
			schemas: []

		} );

		fixture = TestBed.overrideComponent( FixturesPage, {
			set: {
				template: ''
			}
		} ).createComponent( FixturesPage );
		component = fixture.componentInstance;

	} );

	afterEach( () => {
		fixture.destroy();
		component = null;
	} );

	it( 'expect getData() to get latest news and succeed', () => {
		spyOn( component, 'getData' ).and.callThrough();
		component.getData( new mockScrollEvent, true, true );
		expect( component.getData ).toHaveBeenCalled();
	} );

} );