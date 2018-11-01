import * as localforage from 'localforage';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class LocalStorage {

	/**
	 *
	 * @param key
	 * @param value
	 * @returns {any}
	 */
	public setItem<T>( key: string, value: T ): Observable<any> {
		return Observable.fromPromise( localforage.setItem( key, value ) )
	}

	/**
	 *
	 * @param key
	 * @returns {any}
	 */
	public getItem<T>( key: string ): Observable<any> {
		return Observable.fromPromise( localforage.getItem( key ) )
	}

	/**
	 *
	 * @param key
	 * @returns {any}
	 */
	public removeItem( key: string ): Observable<any> {
		return Observable.fromPromise( localforage.removeItem( key ) )
	}
}
