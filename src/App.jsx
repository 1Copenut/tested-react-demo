import axios from 'axios';
import React, { Component } from 'react';
import gh from './config/constants';
import UserSearch from './components/organisms/UserSearch';
import './styles/App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			errorMsg: '',
			errorBool: false,
			userRepos: [],
			searchInput: undefined,
		};
	}

	// Handle the form submit
	handleFormSubmit = (e) => {
		e.preventDefault();

		let userName = this.state.searchInput;

		axios.get(`${gh.GITHUB_USER_STRING}${userName}/repos`)
			.then(res => {
				const userRepos = res.data;

				this.setState({
					errorMsg: '',
					errorBool: false,
					userRepos
				});
			})
			.catch(err => {
				this.setState({
					errorMsg: 'Something went wrong. Please try a new search.',
					errorBool: true
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
						errorState={this.state.errorBool}
						inputVal={this.state.inputVal}
						labelId="con-searchbox-id"
						name="searchInput"
						userRepos={this.state.userRepos}
						searchString={this.state.searchInput}
						submitVal={this.handleFormSubmit}
						updateVal={this.handleInputChange}
					/>
				</div>
			</div>
		);
	}
}

export default App;

