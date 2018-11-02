import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Cacheable } from "ngx-cacheable";

@Injectable()
export class TeamProvider {

	constructor( public _http: HttpClient ) {

	}

	/**
	 * Get all the members of the team
	 * @returns {Observable<any>}
	 */
	@Cacheable({ maxAge: 604800000 })
	get(): Observable<any> {
		return this._http.get( 'https://hailhail.club/wp-json/wp/v2/team' )
	}

	/**
	 * Get a single player by id
	 * @param id
	 * @returns {Observable<any>}
	 */
	@Cacheable({ maxAge: 604800000 })
	getPlayer( id ): Observable<any> {
		return this._http.get( 'https://hailhail.club/wp-json/wp/v2/team/' + id )
	}

}
