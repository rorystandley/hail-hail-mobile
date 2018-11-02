import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Cacheable } from 'ngx-cacheable';

@Injectable()
export class NewsProvider {

	constructor( public _http: HttpClient ) {

	}

	@Cacheable()
	get( page = 1, type = 'posts' ): Observable<any> {
		return this._http.get( 'https://hailhail.club/wp-json/wp/v2/' + type + '/?page=' + page );
	}

	incrementCount( id ): Observable<any> {
		return this._http.post( 'https://hailhail.club/wp-json/wp/v2/count/' + id, null )
	}

}
