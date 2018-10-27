import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppCenterPush } from '@ionic-native/app-center-push';

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

	constructor( public platform: Platform,
	             public splashScreen: SplashScreen,
	             public _appCenterPush: AppCenterPush
	) {
		this.initializeApp();

		// used for an example of ngFor and navigation
		this.pages = [
			{
				icon: 'icon-newspaper',
				title: 'News',
				component: NewsPage,
				description: 'All the latest news about Celtic F.C.'
			},
			{
				icon: 'icon-calendar',
				title: 'Fixtures',
				component: FixturesPage,
				description: 'All the latest fixtures and scores.'
			},
			{
				icon: 'icon-group',
				title: 'Team',
				component: TeamPage,
				description: 'Find out about the Celtic, first team.'
			},
		];

	}

	initializeApp() {
		this.platform.ready().then( () => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.splashScreen.hide();
			this._appCenterPush.setEnabled( true ).then( () => {
				(<any>window).AppCenter.getInstallId( success => {
					/**
					 * TODO - Do something with the ID
					 */
					console.log(success)
				});
				this._appCenterPush.addEventListener( 'notificationReceived' ).subscribe( pushNotification => {
					console.log( 'Recived push notification', pushNotification );
				} );
			} );
		} );
	}

	openPage( page ) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.nav.setRoot( page.component );
	}
}
