import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Injectable()
export class FixturesProvider {

	constructor( public _http: HttpClient ) {

	}

	get(): Observable<any> {
		return this._http.get( 'http://hailhail.club/wp-json/wp/v2/fixtures' )
	}

}
