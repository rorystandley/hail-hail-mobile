import { Component, Input } from '@angular/core';
import { Fixture } from "../../models/fixture";

@Component( {
	selector: 'app-fixture',
	templateUrl: 'fixture.html'
} )
export class FixtureComponent {

	@Input() data: Fixture;

	constructor() {
	}

	reverse( input ) {
		let result = "";
		input = input || "";
		for ( let i = 0; i < input.length; i++ ) {
			result = input.charAt( i ) + result;
		}
		return result;
	}

}
