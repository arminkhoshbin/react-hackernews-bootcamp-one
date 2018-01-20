import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Hello Hacker News';

const _getStyles = function() {
	return {
		fontSize: 36, 
		color: 'green'
	}
}

function Element(props) {
	return (
		<div
		  >
    		{props.message}
  		</div>
	);
}

const element = <Element message = "Hello Hacker News" />

const threeElements = 
	<div>
		<Element message = "Article 1" />
		<Element message = "Article 2" />
		<Element message = "Article 3" />
	</div>

function Article(props) {
	return (
		<div>
			<h1>{props.title}</h1>
			<span>{props.desc}</span>
			<a href={props.href}>Link</a>
		</div>
	)
}

const article1 = 
	<Article 
		title="Fake Article" 
		desc="This is a fake description" 
		href="http://google.com" />

const root = document.getElementById('root');

ReactDOM.render(article1, root);