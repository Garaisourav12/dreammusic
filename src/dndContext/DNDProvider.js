import React, { useState } from "react";
import dndContext from "./dndContext";

function DNDProvider({ children }) {
	const [activeId, setActiveId] = useState(null);
	const [overId, setOverId] = useState(null);
	const reorder = (orders, activeIndex, targetIndex) => {
		// If active is before target then place it after target and if active is after target then place it before target
		if (activeIndex > targetIndex) {
			return [
				...orders.slice(0, targetIndex),
				orders[activeIndex],
				...orders.slice(targetIndex, activeIndex),
				...orders.slice(activeIndex + 1),
			];
		} else {
			return [
				...orders.slice(0, activeIndex),
				...orders.slice(activeIndex + 1, targetIndex + 1),
				orders[activeIndex],
				...orders.slice(targetIndex + 1),
			];
		}
	};
	return (
		<dndContext.Provider
			value={{ activeId, setActiveId, overId, setOverId, reorder }}
		>
			{children}
		</dndContext.Provider>
	);
}

export default DNDProvider;
