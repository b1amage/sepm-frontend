import React from "react";

function useOnClickOutside(ref, handler) {
	React.useEffect(() => {
		const listener = (event) => {
			console.log(event.target);
			console.log(ref.current);
			console.log(ref.current.contains(event.target));
			// Do nothing if clicking ref's element or descendent elements
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}

			handler(event);
		};
		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);
		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [ref, handler]);
}

export default useOnClickOutside;
