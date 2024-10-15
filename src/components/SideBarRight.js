import React, { useContext } from "react";
import PlayerCard from "./PlayerCard";
import playerContext from "../playerContext/playerContext";

function SideBarRight({ songOrderConfig, orders }) {
	const { song, setSong } = useContext(playerContext);
	return (
		<div className="h-screen flex-1 bg-[--bg-right] sticky top-0 right-0">
			{song && (
				<PlayerCard song={song} setSong={setSong} orders={orders} />
			)}
		</div>
	);
}

export default SideBarRight;
