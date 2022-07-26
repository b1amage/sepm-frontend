import React, { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="flex space-x-2 text-lg">
			<p
				onClick={() =>
					setCount((count) => (count === 0 ? 0 : count - 1))
				}
			>
				-
			</p>
			<p>{count}</p>
			<p onClick={() => setCount((count) => count + 1)}>+</p>
		</div>
	);
};

export default Counter;
