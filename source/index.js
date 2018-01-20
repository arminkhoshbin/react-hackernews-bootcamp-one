  // document.body.innerHTML =
  //   `
  //     <div>
  //       Hello Hacker News
  //     </div>
  //   `;


import React from 'react';
import ReactDOM from 'react-dom';

const hello = 'Hello Hacker News';

const _getStyles = function() {
	return {
		fontSize: 36,
		color: 'green'
	};
};

const onClickEvent = function() {
	window.alert(hello);
};

const element = 
	<div 
		style={_getStyles()}
		onClick={onClickEvent} >
			{hello}
	</div>
;

ReactDOM.render(
	element,
	document.getElementById('root')
);