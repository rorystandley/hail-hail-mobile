import { Component, Input } from '@angular/core';
import { PlayerArticle } from "../../models/player-article";

@Component( {
	selector: 'app-player-article',
	templateUrl: 'player-article.html'
} )
export class PlayerArticleComponent {

	@Input() data: PlayerArticle

	constructor() {
	}

}
