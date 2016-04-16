// routes.js
import React from 'react';
import IndexRoute from 'react-router/lib/IndexRoute';
import Route from 'react-router/lib/Route';
import App from './components/App';

// Pages
import Library from './components/LibraryIndex';
import Notebook from './components/Notebook';
import Note from './components/Note';
import NoMatch from './components/NoMatch';
 
export default (
	<Route path="/library" component={App}>
		<IndexRoute component={Library}></IndexRoute>
		<Route path=":notebook" component={Notebook}></Route>
		<Route path=":notebook/:note" component={Note}></Route>
		<Route path="*" component={NoMatch}/>
	</Route>
);