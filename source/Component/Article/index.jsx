import React from 'react';
import ReactDOM from 'react-dom';

import styles from './style.css';

export default function Article(props) {
	return (
		<article className={styles.myClass}>
			<h2>{props.title}</h2>
		    <p>{props.description}</p>
		    <a href={props.link}>{props.link}</a>
		</article>
	);
}