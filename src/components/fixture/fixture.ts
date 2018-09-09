import { Component, Input } from '@angular/core';

@Component( {
	selector: 'app-fixture',
	templateUrl: 'fixture.html'
} )
export class FixtureComponent {

	@Input() data: any;

	constructor() {
	}

}
