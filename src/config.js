export const apiUrl =
	window.location.hostname === 'localhost'
		? 'http://localhost:8000'
		: 'https://my-heroku-app-name.herokuapp.com';
