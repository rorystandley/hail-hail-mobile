// Core files and modules
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { InAppBrowser } from "@ionic-native/in-app-browser";

// Pages
import { AboutPage } from "./about";

// Variables
let component: AboutPage;
let fixture: ComponentFixture<AboutPage>;

describe( 'News: Success', () => {
	beforeEach( () => {
		TestBed.configureTestingModule( {
			imports: [],
			declarations: [ AboutPage ],
			providers: [
				InAppBrowser,
			],
			schemas: []

		} );

		fixture = TestBed.overrideComponent( AboutPage, {
			set: {
				template: ''
			}
		} ).createComponent( AboutPage );
		component = fixture.componentInstance;

	} );

	afterEach( () => {
		fixture.destroy();
		component = null;
	} );

	it( 'expect openLink() to open link in browser', () => {
		component.openLink( 'https://google.com' );
	} );

} );
