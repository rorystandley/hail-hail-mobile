import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TeamProvider } from "./team";

describe( 'OpportunityProvider', () => {

	let injector: TestBed;
	let provider: TeamProvider;
	let httpMock: HttpTestingController;

	beforeEach( () => {
		TestBed.configureTestingModule( {
			imports: [
				HttpClientTestingModule
			],
			providers: [
				TeamProvider
			]
		} );
		injector = getTestBed();
		provider = injector.get( TeamProvider );
		httpMock = TestBed.get( HttpTestingController );
	} );

	afterEach( () => {
		httpMock.verify();
	} );

	it( 'expect get() to be called with the proper arguments', () => {
		provider.get().subscribe( ( response ) => {
			expect( response ).toBeDefined();
		} );

		const sent = httpMock.expectOne( 'https://hailhail.club/wp-json/wp/v2/team' );
		expect( sent.request.method ).toEqual( 'GET' );
		sent.flush( {} );
	} );

	it( 'expect getPlayer() to be called with the proper arguments', () => {
		provider.getPlayer( 1 ).subscribe( ( response ) => {
			expect( response ).toBeDefined();
		} );

		const sent = httpMock.expectOne( 'https://hailhail.club/wp-json/wp/v2/team/1' );
		expect( sent.request.method ).toEqual( 'GET' );
		sent.flush( {} );
	} );

} );