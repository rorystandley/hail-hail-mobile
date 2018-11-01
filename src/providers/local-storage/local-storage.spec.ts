// Core files and modules
import { TestBed, inject } from '@angular/core/testing';

// Providers
import { LocalStorage } from './local-storage';

describe( 'LocalStorage', () => {
	beforeEach( () => {
		TestBed.configureTestingModule( {
			imports: [],
			declarations: [],
			providers: [ LocalStorage ],
			schemas: []
		} );
	} );

	it( 'expect service.setItem() to return result', inject( [ LocalStorage ], ( service: LocalStorage ) => {
		service.setItem( '', '' ).subscribe( result => expect( result.length ).toBe( 0 ) );
	} ) );

	it( 'expect service.getItem() to return result', inject( [ LocalStorage ], ( service: LocalStorage ) => {
		service.getItem( '' ).subscribe( result => expect( result.length ).toBe( 0 ) );
	} ) );

	it( 'expect service.removeItem() to return result', inject( [ LocalStorage ], ( service: LocalStorage ) => {
		service.removeItem( '' ).subscribe( result => expect( result.length ).toEqual( 0 ) );
	} ) );

} );
