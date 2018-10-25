import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Pages
import { NewsPage } from "../pages/news/news";
import { TeamPage } from "../pages/team/team";
import { FixturesPage } from "../pages/fixtures/fixtures";

@Component( {
	templateUrl: 'app.html'
} )
export class MyApp {
	@ViewChild( Nav ) nav: Nav;

	rootPage: any = NewsPage;

	pages: Array<{ icon: string, title: string, component: any, description: string }>;

	constructor( public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen ) {
		this.initializeApp();

		// used for an example of ngFor and navigation
		this.pages = [
			{ icon: 'icon-newspaper', title: 'News', component: NewsPage, description: 'This is a description' },
			{ icon: 'home', title: 'Fixtures', component: FixturesPage, description: 'This is a description' },
			{ icon: 'home', title: 'Team', component: TeamPage, description: 'This is a description' },
		];

	}

	initializeApp() {
		this.platform.ready().then( () => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		} );
	}

	openPage( page ) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.nav.setRoot( page.component );
	}
}
