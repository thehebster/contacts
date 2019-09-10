import React from "react";
import { Route } from "react-router-dom";
import "./styles/App.css";

function App() {
	return (
		<div className="App">
			<Route exact path="/" render={() => <h1>Home page</h1>} />
			<Route path="/login" render={() => <h1>Login!</h1>} />
			<Route path="/signup" render={() => <h1>Hit the sign up route!</h1>} />
			<Route
				exact
				path="/contacts"
				render={() => (
					<h1>This will show the contacts for the person signed in</h1>
				)}
			/>
			<Route
				exact
				path="/contacts/add"
				render={() => <h1>This will be the add contact page</h1>}
			/>
			<Route
				exact
				path="/contacts/:id"
				render={(props) => <h1>This will show a specific contact</h1>}
			/>
			<Route
				exact
				path="/contacts/:id/edit"
				render={(props) => (
					<h1>This will show a specific contact edit form</h1>
				)}
			/>
		</div>
	);
}

export default App;
