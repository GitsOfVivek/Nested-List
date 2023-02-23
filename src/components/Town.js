import React from 'react';

const Town = ({ towns }) => {
	return (
		<ul>
			{towns.map((town, idx) => (
				<li key={Math.random()} id={'town' + (idx + 1)}>
					{town.name}
				</li>
			))}
		</ul>
	);
};

export default Town;
