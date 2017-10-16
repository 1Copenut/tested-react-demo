import axios from 'axios';
import React, { Component } from 'react';
import gh from './config/constants';
import UserSearch from './components/UserSearch';
import './styles/App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			errorMsg: '',
			repos: [],
			searchInput: undefined,
		};
	}

	// Handle the form submit
	handleFormSubmit = (e) => {
		e.preventDefault();

		let userName = this.state.searchInput;

		axios.get(`${gh.GITHUB_USER_STRING}${userName}/repos`)
			.then(res => {
				const repos = res.data;

				this.setState({
					errorMsg: '',
					repos
				});
			})
			.catch(err => {
				this.setState({
					errorMsg: 'Something went wrong. Please try a new search.'
				});
			});
	}

	// Handle updating state HERE, instead of the input
	handleInputChange = (e) => {
		const name = e.target.name;

		this.setState({ [name]: e.target.value });
	}

	render() {
		return (
			<div className="App">
				<div className="App-block">
					<UserSearch
						errorMsg={this.state.errorMsg}
						labelId="con-searchbox-id"
						inputVal={this.state.inputVal}
						repoLen={this.state.repos}
						submitVal={this.handleFormSubmit}
						updateVal={this.handleInputChange}
					/>
				</div>
			</div>
		);
	}
}

export default App;

