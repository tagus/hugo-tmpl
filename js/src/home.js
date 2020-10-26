import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

document.addEventListener('DOMContentLoaded', function(event) {
	const [ root ] = document.getElementsByClassName('react-root');
	ReactDOM.render(<App/>, root);
});
