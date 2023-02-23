import React, { useState } from 'react';
import Town from './Town';

const City = ({ cities }) => {
	const [flag, setFlag] = useState(false);

	return (
		<ul>
			{cities.map((city, idx) => (
				<>
					<li onClick={() => setFlag(!flag)} id={'city' + (idx + 1)}>
						{city.name}
					</li>
					{flag && <Town towns={city.towns} />}
				</>
			))}
		</ul>
	);
};

export default City;
