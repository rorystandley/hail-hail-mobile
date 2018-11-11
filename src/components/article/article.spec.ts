// Core files and modules
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Platform } from "ionic-angular";
import { newsProviderMockSucess, PlatformMock } from "../../../test-config/mocks-ionic";
import { InAppBrowser } from "@ionic-native/in-app-browser";

// Components
import { ArticleComponent } from "./article";

// Providers
import { NewsProvider } from "../../providers/news/news";

// Variables
let component: ArticleComponent;
let fixture: ComponentFixture<ArticleComponent>;

describe( 'Article Component', () => {
	beforeEach( () => {
		TestBed.configureTestingModule( {
			imports: [],
			declarations: [ ArticleComponent ],
			providers: [
				{ provide: Platform, useClass: PlatformMock },
				InAppBrowser,
				{ provide: NewsProvider, useClass: newsProviderMockSucess },
			],
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

	it( 'expect openLink() to open link in browser and increment the view count of the news article', () => {
		component._platform.setCordovaTrue();
		spyOn( component._news, 'incrementCount' ).and.callThrough();
		component.openLink( 'https://google.com', '1234' );
		expect( component._news.incrementCount ).toHaveBeenCalled();
	} );

} );
