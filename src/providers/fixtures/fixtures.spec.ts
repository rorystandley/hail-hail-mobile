import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FixturesProvider } from "./fixtures";

describe( 'OpportunityProvider', () => {

	let injector: TestBed;
	let provider: FixturesProvider;
	let httpMock: HttpTestingController;

	beforeEach( () => {
		TestBed.configureTestingModule( {
			imports: [
				HttpClientTestingModule
			],
			providers: [
				FixturesProvider
			]
		} );
		injector = getTestBed();
		provider = injector.get( FixturesProvider );
		httpMock = TestBed.get( HttpTestingController );
	} );

	afterEach( () => {
		httpMock.verify();
	} );

	it( 'expect get() to be called with the proper arguments', () => {
		provider.get().subscribe( ( response ) => {
			expect( response ).toBeDefined();
		} );

		const sent = httpMock.expectOne( 'http://hailhail.club/wp-json/wp/v2/fixtures' );
		expect( sent.request.method ).toEqual( 'GET' );
		sent.flush( {} );
	} );

} );