import React, { Component, useState } from 'react';
import './../styles/App.css';

// Do not alter the states const and values inside it.
const states = [
	{
		name: 'Madhya Pradesh',
		cities: [
			{
				name: 'Indore',
				towns: [
					{
						name: 'Mhow',
					},
					{
						name: 'Dewas',
					},
				],
			},
			{
				name: 'Bhopal',
				towns: [
					{
						name: 'Manit',
					},
					{
						name: 'Berasia',
					},
				],
			},
			{
				name: 'Gwalior',
				towns: [
					{
						name: 'Ajaypur',
					},
				],
			},
		],
	},
	{
		name: 'Jharkhand',
		cities: [
			{
				name: 'Dhanbad',
				towns: [
					{
						name: 'IIT(ISM) Dhanbad',
					},
					{
						name: 'Hirapur',
					},
				],
			},
			{
				name: 'Wasseypur',
				towns: [
					{
						name: "Sardar khan's",
					},
					{
						name: "Faizal khan's",
					},
				],
			},
			{
				name: 'Mirzapur',
				towns: [
					{
						name: "Kaleen bhaiya's",
					},
					{
						name: "Guddu bhaiya's",
					},
				],
			},
		],
	},
	{
		name: 'Assam',
		cities: [
			{
				name: 'Guwhati',
				towns: [
					{
						name: 'Amin',
					},
					{
						name: 'Jalah',
					},
				],
			},
			{
				name: 'Jungle1',
				towns: [
					{
						name: 'Tiger found at IIT Guwahati',
					},
					{
						name: 'Leopard found in IIT Guwahati',
					},
				],
			},
			{
				name: 'Tezpur',
				towns: [
					{
						name: 'Dibrugarh',
					},
					{
						name: 'Silchar',
					},
				],
			},
		],
	},
	{
		name: 'Bihar',
		cities: [
			{
				name: 'Patna',
				towns: [
					{
						name: 'Sonpur',
					},
					{
						name: 'Maner',
					},
				],
			},
			{
				name: 'Gaya',
				towns: [
					{
						name: 'Bakraur',
					},
					{
						name: 'Barachatti',
					},
				],
			},
			{
				name: 'Darbhanga',
				towns: [
					{
						name: 'Singhwara',
					},
					{
						name: 'Jale',
					},
				],
			},
		],
	},
];

function App() {
	// const [curCity, setCurCity] = useState(false);
	return (
		<div
			id="main"
			onClick={e => {
				e.target.classList.toggle('none');
				console.log(e.target.classList);
			}}>
			{states.map(state => (
				<ul>
					<li>{state.name}</li>
					{state.cities.map(city => (
						<ul>
							<li>{city.name}</li>
							{city.towns.map(town => (
								<ul>
									<li>{town.name}</li>
								</ul>
							))}
						</ul>
					))}
				</ul>
			))}
		</div>
	);
}

export default App;
