import React, { useState } from 'react';
import City from './City';

const State = ({ states }) => {
	const [flag, setFlag] = useState(false);
	return (
		<ul>
			{states.map((state, idx) => (
				<>
					<li onClick={() => setFlag(!flag)} id={'state' + (idx + 1)}>
						{state.name}
					</li>
					{flag && <City cities={state.cities} />}
				</>
			))}
		</ul>
	);
};

export default State;
