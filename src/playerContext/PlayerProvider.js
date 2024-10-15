import React, { useState } from "react";
import playerContext from "./playerContext";

function PlayerProvider({ children }) {
	const [song, setSong] = useState(null);
	return (
		<playerContext.Provider value={{ song, setSong }}>
			{children}
		</playerContext.Provider>
	);
}

export default PlayerProvider;
