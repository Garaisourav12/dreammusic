import React, { useContext } from "react";
import PlayerCard from "./PlayerCard";
import playerContext from "../playerContext/playerContext";

function SideBarRight({ songOrderConfig, orders }) {
	const { songIndex, setSongIndex } = useContext(playerContext);
	return (
		<div className="min-h-screen flex-1 bg-[--bg-right]">
			{true && <PlayerCard song={songOrderConfig[orders[1]]} />}
		</div>
	);
}

export default SideBarRight;
