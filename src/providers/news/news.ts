import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Cacheable, CacheBuster } from 'ngx-cacheable';

@Injectable()
export class NewsProvider {

	constructor( public _http: HttpClient ) {

	}

	/**
	 * Get news articles
	 * @param {number} page
	 * @param {string} type
	 * @returns {Observable<any>}
	 */
	@Cacheable( { maxAge: 3600000 } )
	get( page = 1, type = 'posts' ): Observable<any> {
		return this._http.get( 'https://hailhail.club/wp-json/wp/v2/' + type + '/?page=' + page );
	}

	/**
	 * Get news articles and bust our cache
	 * @param {number} page
	 * @param {string} type
	 * @returns {Observable<any>}
	 */
	@CacheBuster()
	reset( page = 1, type = 'posts' ): Observable<any> {
		return this._http.get( 'https://hailhail.club/wp-json/wp/v2/' + type + '/?page=' + page );
	}

	incrementCount( id ): Observable<any> {
		return this._http.post( 'https://hailhail.club/wp-json/wp/v2/count/' + id, null )
	}

}
