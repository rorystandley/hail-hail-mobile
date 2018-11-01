import { Injectable } from "@angular/core";
import { LocalStorage } from "../local-storage/local-storage";
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class LocalCache {

	constructor( public _localStorage: LocalStorage ) {
	}

	/**
	 * Cache supplied value
	 @param key
	 * @param value
	 * @returns {Observable<any>}
	 */
	setValue( key: string, value: any ): Observable<any> {
		return this._localStorage.setItem( key, value );
	}

	/**
	 * Return cache values
	 * @param {string} key
	 * @returns {Observable<any>}
	 */
	getValue( key: string ) {
		return this._localStorage.getItem( key );
	}

	/**
	 * Remove a value from cache
	 * @param {string} key
	 * @returns {Observable<any>}
	 */
	removeValue( key: string ) {
		return this._localStorage.removeItem( key );
	}
}
