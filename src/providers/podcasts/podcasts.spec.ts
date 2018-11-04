import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PodcastsProvider } from "./podcasts";

describe( 'OpportunityProvider', () => {

	let injector: TestBed;
	let provider: PodcastsProvider;
	let httpMock: HttpTestingController;

	beforeEach( () => {
		TestBed.configureTestingModule( {
			imports: [
				HttpClientTestingModule
			],
			providers: [
				PodcastsProvider
			]
		} );
		injector = getTestBed();
		provider = injector.get( PodcastsProvider );
		httpMock = TestBed.get( HttpTestingController );
	} );

	afterEach( () => {
		httpMock.verify();
	} );

	it( 'expect get() to be called with the proper arguments', () => {
		provider.get(1, 'posts').subscribe( ( response ) => {
			expect( response ).toBeDefined();
		} );

		const sent = httpMock.expectOne( 'https://hailhail.club/wp-json/wp/v2/posts/?page=1' );
		expect( sent.request.method ).toEqual( 'GET' );
		sent.flush( {} );
	} );

	it( 'expect reset() to be called with the proper arguments', () => {
		provider.reset(1, 'posts').subscribe( ( response ) => {
			expect( response ).toBeDefined();
		} );

		const sent = httpMock.expectOne( 'https://hailhail.club/wp-json/wp/v2/posts/?page=1' );
		expect( sent.request.method ).toEqual( 'GET' );
		sent.flush( {} );
	} );

} );