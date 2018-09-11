// Core files and modules
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { App, LoadingController } from "ionic-angular";

// Pages
import { TeamPage } from "./team";

// Providers
import { TeamProvider } from "../../providers/team/team";

// Mocks
import {
	teamProviderMockSucess,
	teamProviderMockFail,
	mockLoadingController,
	mockAppPlatform
} from "../../../test-config/mocks-ionic";

// Variables
let component: TeamPage;
let fixture: ComponentFixture<TeamPage>;

describe( 'Pages: Team Success', () => {
	beforeEach( () => {
		TestBed.configureTestingModule( {
			imports: [],
			declarations: [ TeamPage ],
			providers: [
				{ provide: TeamProvider, useClass: teamProviderMockSucess },
				{ provide: App, useClass: mockAppPlatform },
				{ provide: LoadingController, useFactory: () => mockLoadingController.instance() },
			],
			schemas: []

		} );

		fixture = TestBed.overrideComponent( TeamPage, {
			set: {
				template: ''
			}
		} ).createComponent( TeamPage );
		component = fixture.componentInstance;

	} );

	afterEach( () => {
		fixture.destroy();
		component = null;
	} );

	it( 'expect ngOninit() to request player data and succeed', () => {
		spyOn( component._teamProvider, 'get' ).and.callThrough();
		component.ngOnInit();
		expect( component._teamProvider.get ).toHaveBeenCalled();
	} );

} );

describe( 'Pages: Team Error', () => {
	beforeEach( () => {
		TestBed.configureTestingModule( {
			imports: [],
			declarations: [ TeamPage ],
			providers: [
				{ provide: TeamProvider, useClass: teamProviderMockFail },
				{ provide: App, useClass: mockAppPlatform },
				{ provide: LoadingController, useFactory: () => mockLoadingController.instance() },
			],
			schemas: []

		} );

		fixture = TestBed.overrideComponent( TeamPage, {
			set: {
				template: ''
			}
		} ).createComponent( TeamPage );
		component = fixture.componentInstance;

	} );

	afterEach( () => {
		fixture.destroy();
		component = null;
	} );

	it( 'expect ngOninit() to request player data and fail', () => {
		spyOn( component._teamProvider, 'get' ).and.callThrough();
		component.ngOnInit();
		expect( component._teamProvider.get ).toHaveBeenCalled();
	} );

} );
