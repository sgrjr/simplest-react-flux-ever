import React from 'react';
import { Link } from 'react-router';

class GithubNote extends React.Component {
	
  render() { 
	let note = this.props.note;

	return (
		<Link to={note.path}>{note.name}</Link>
		);
	}

}

module.exports = GithubNote;