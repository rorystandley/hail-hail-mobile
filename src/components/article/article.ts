import { Component, Input } from '@angular/core';
import { Article } from "../../models/article";

@Component( {
	selector: 'app-article',
	templateUrl: 'article.html'
} )
export class ArticleComponent {

	@Input() data: Article;

	constructor() {
	}

}
