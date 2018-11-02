import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Cacheable } from "ngx-cacheable";

@Injectable()
export class FixturesProvider {

	constructor( public _http: HttpClient ) {

	}

	@Cacheable({ maxAge: 86400000 })
	get(): Observable<any> {
		return this._http.get( 'http://hailhail.club/wp-json/wp/v2/fixtures' )
	}

}
