import React, { useState } from "react";
import playerContext from "./playerContext";

function PlayerProvider({ children }) {
	const [songIndex, setSongIndex] = useState(-1);
	return (
		<playerContext.Provider value={{ songIndex, setSongIndex }}>
			{children}
		</playerContext.Provider>
	);
}

export default PlayerProvider;
