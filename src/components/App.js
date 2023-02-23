import React, { useState } from 'react';
import './../styles/App.css';
import { states } from './Data';
import State from './State';

// Do not alter the states const and values inside it.

function App() {
	return (
		<div id="main">
			<State states={states} />
		</div>
	);
}

export default App;
