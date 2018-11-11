// Core files and modules
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { App } from "ionic-angular";
import { mockAppPlatform } from "../../../test-config/mocks-ionic";

// Components
import { PlayerArticleComponent } from "./player-article";

// Variables
let component: PlayerArticleComponent;
let fixture: ComponentFixture<PlayerArticleComponent>;

describe( 'Player Article Component', () => {
	beforeEach( () => {
		TestBed.configureTestingModule( {
			imports: [],
			declarations: [ PlayerArticleComponent ],
			providers: [
				{ provide: App, useClass: mockAppPlatform },
			],
			schemas: []

		} );

		fixture = TestBed.overrideComponent( PlayerArticleComponent, {
			set: {
				template: ''
			}
		} ).createComponent( PlayerArticleComponent );
		component = fixture.componentInstance;

	} );

	afterEach( () => {
		fixture.destroy();
		component = null;
	} );

	it( 'expect component to be truthy', () => {
		expect( component ).toBeTruthy();
	} );

} );
