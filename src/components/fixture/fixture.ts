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

}
