import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

// Native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { TapticEngine } from "@ionic-native/taptic-engine";
import { AppCenterAnalytics } from '@ionic-native/app-center-analytics';
import { AppCenterPush } from '@ionic-native/app-center-push';

// Components
import { FixtureComponent } from "../components/fixture/fixture";
import { ArticleComponent } from "../components/article/article";
import { PlayerArticleComponent } from "../components/player-article/player-article";

// Directive
import { ButtonAction } from "../directives/button-action/button-action";

// Pages
import { MyApp } from './app.component';
import { NewsPage } from "../pages/news/news";
import { TeamPage } from "../pages/team/team";
import { PlayerPage } from "../pages/player/player";
import { FixturesPage } from "../pages/fixtures/fixtures";
import { AboutPage } from "../pages/about/about";

// Providers
import { NewsProvider } from '../providers/news/news';
import { TimeAgoPipe } from "time-ago-pipe";
import { TeamProvider } from "../providers/team/team";
import { FixturesProvider } from "../providers/fixtures/fixtures";

@NgModule( {
	declarations: [
		MyApp,
		NewsPage,
		TeamPage,
		TimeAgoPipe,
		PlayerPage,
		FixturesPage,
		FixtureComponent,
		ButtonAction,
		AboutPage,
		ArticleComponent,
		PlayerArticleComponent
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot( MyApp ),
		HttpClientModule
	],
	bootstrap: [ IonicApp ],
	entryComponents: [
		MyApp,
		NewsPage,
		TeamPage,
		PlayerPage,
		FixturesPage,
		AboutPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		NewsProvider,
		InAppBrowser,
		TapticEngine,
		TeamProvider,
		FixturesProvider,
		AppCenterAnalytics,
		AppCenterPush,
	]
} )
export class AppModule {
}
