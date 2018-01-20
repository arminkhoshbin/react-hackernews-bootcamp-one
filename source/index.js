import React from 'react';
import ReactDOM from 'react-dom';
import getArticles from 'hacker-news-top-ten';

import NewsFeed from './View/NewsFeed';

class Container extends React.Component {
	_getStyles() {
		return {
			loadingStyle: {
				textAlign: 'center',
				color: 'green',
				fontSize: '5em'
			}
		};
	}

  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  componentWillMount() {
    getArticles().then(articles => {
    	this.setState({ articles: articles });
    })
  }

  render() {
  	const styles = this._getStyles();

    return (
    	<div>
    		{ this.state.articles.length > 0 ? (
		      <NewsFeed
		        articles={this.state.articles}
		      />
		   	) : (
		   		<h1 style={styles.loadingStyle}>Loading...</h1>
		   	)}
	     </div>
    );
  }
}


const LOREM_IPSUM =
  `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the
  1500s, when an unknown printer took a galley of type and scrambled it to
  make a type specimen book.
  `

const ARTICLES = [
  {
    description: LOREM_IPSUM,
    id: 1,
    link: 'https://google.com',
    title: 'Article 1',
  },
  {
    description: LOREM_IPSUM,
    id: 2,
    link: 'https://google.com',
    title: 'Article 2',
  },
  {
    description: LOREM_IPSUM,
    id: 3,
    link: 'https://google.com',
    title: 'Article 3',
  },
];

ReactDOM.render(
  <Container
  />
, document.getElementById('root'));
