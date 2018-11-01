import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LocalCache } from "./local-cache";
import { LocalStorage } from "../local-storage/local-storage";

describe( 'LocalCacheProvider', () => {

	let injector: TestBed;
	let provider: LocalCacheProvider;
	let httpMock: HttpTestingController;

	beforeEach( () => {
		TestBed.configureTestingModule( {
			imports: [
				HttpClientTestingModule
			],
			providers: [
				LocalCache,
				LocalStorage
			]
		} );
		injector = getTestBed();
		provider = injector.get( LocalCache );
		httpMock = injector.get( LocalStorage );
	} );

	afterEach( () => {
		httpMock.verify();
	} );

	it( 'expect setValue() to store data to local storage', () => {
		spyOn( provider._localStorage, 'setItem' );
		provider.setValue( 'test', {} );
		expect( provider._localStorage.setItem ).toHaveBeenCalledWith( 'test', {} );
	} );

	it( 'expect getValue() to store data to local storage', () => {
		spyOn( provider._localStorage, 'getItem' );
		provider.getValue( 'test' );
		expect( provider._localStorage.getItem ).toHaveBeenCalledWith( 'test' );
	} );

	it( 'expect removeValue() to store data to local storage', () => {
		spyOn( provider._localStorage, 'removeItem' );
		provider.removeValue( 'test' );
		expect( provider._localStorage.removeItem ).toHaveBeenCalledWith( 'test' );
	} );

} );