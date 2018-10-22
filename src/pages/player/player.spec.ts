// Core files and modules
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { LoadingController, NavParams } from "ionic-angular";

// Pages
import { PlayerPage } from "./player";

// Providers
import { TeamProvider } from "../../providers/team/team";

// Mocks
import { teamProviderMockSucess, teamProviderMockFail, navParamsMock, mockLoadingController } from "../../../test-config/mocks-ionic";

// Variables
let component: PlayerPage;
let fixture: ComponentFixture<PlayerPage>;

describe( 'Pages: Player Success', () => {
	beforeEach( () => {
		TestBed.configureTestingModule( {
			imports: [],
			declarations: [ PlayerPage ],
			providers: [
				{ provide: TeamProvider, useClass: teamProviderMockSucess },
				{ provide: NavParams, useClass: navParamsMock },
				{ provide: LoadingController, useFactory: () => mockLoadingController.instance() },
			],
			schemas: []

		} );

		fixture = TestBed.overrideComponent( PlayerPage, {
			set: {
				template: ''
			}
		} ).createComponent( PlayerPage );
		component = fixture.componentInstance;

	} );

	afterEach( () => {
		fixture.destroy();
		component = null;
	} );

	it( 'expect ngOninit() to request player data and succeed', () => {
		spyOn( component._teamProvider, 'getPlayer').and.callThrough();
		component.ngOnInit();
		expect( component._teamProvider.getPlayer ).toHaveBeenCalled();
	} );

} );

describe( 'Pages: Player Error', () => {
	beforeEach( () => {
		TestBed.configureTestingModule( {
			imports: [],
			declarations: [ PlayerPage ],
			providers: [
				{ provide: TeamProvider, useClass: teamProviderMockFail },
				{ provide: NavParams, useClass: navParamsMock },
				{ provide: LoadingController, useFactory: () => mockLoadingController.instance() },
			],
			schemas: []

		} );

		fixture = TestBed.overrideComponent( PlayerPage, {
			set: {
				template: ''
			}
		} ).createComponent( PlayerPage );
		component = fixture.componentInstance;

	} );

	afterEach( () => {
		fixture.destroy();
		component = null;
	} );

	it( 'expect ngOninit() to request player data and fail', () => {
		spyOn( component._teamProvider, 'getPlayer').and.callThrough();
		component.ngOnInit();
		expect( component._teamProvider.getPlayer ).toHaveBeenCalled();
	} );

} );
