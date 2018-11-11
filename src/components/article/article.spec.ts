// Core files and modules
import { TestBed, ComponentFixture } from '@angular/core/testing';

// Components
import { ArticleComponent } from "./article";

// Variables
let component: ArticleComponent;
let fixture: ComponentFixture<ArticleComponent>;

describe( 'Article Component', () => {
	beforeEach( () => {
		TestBed.configureTestingModule( {
			imports: [],
			declarations: [ ArticleComponent ],
			providers: [],
			schemas: []

		} );

		fixture = TestBed.overrideComponent( ArticleComponent, {
			set: {
				template: ''
			}
		} ).createComponent( ArticleComponent );
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
