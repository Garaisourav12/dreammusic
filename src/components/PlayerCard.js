import React, { useContext, useRef, useState } from "react";
import playerContext from "../playerContext/playerContext";

function PlayerCard({ song }) {
	const { songIndex, setSongIndex } = useContext(playerContext);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const audioRef = useRef();

	return (
		<div className="bg-[--card-bg] p-4 fixed bottom-[1rem] right-[1rem] rounded-[1rem] text-center w-[12.5rem]">
			<h2 className="text-[--text-1] text-[.8rem] font-semibold mb-4">
				Now Playing
			</h2>
			<div>
				<img
					className="object-cover rounded-lg mb-4 w-full h-[6rem]"
					src={song.thumbnail}
					alt={song.title}
				/>
			</div>
			<div>
				<h3 className="font-semibold text-[--text-1]">{song.title}</h3>
				<p className="text-[.8rem]">{song.artist || song.album}</p>
			</div>

			{/* Time Played and Remaining */}
			<div className="flex justify-between items-center mt-4 gap-1">
				<p className="played-time text-[.8rem]">2:13</p>
				<input
					type="range"
					className="w-[70%] h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
				/>
				<p className="remaining-time text-[.8rem]">3:20</p>
			</div>

			{/* Playback Controls with customized handler size */}
			<div className="flex justify-between mt-4">
				<button className="text-lg p-1">🔁</button>{" "}
				{/* Loop (Rotate) Button */}
				<button className="text-lg p-1">⏮️</button>{" "}
				{/* Previous Button */}
				<button className="text-lg p-1">▶️</button> {/* Play Button */}
				<button className="text-lg p-1">⏭️</button> {/* Next Button */}
				<button className="text-lg p-1">🔀</button>{" "}
				{/* Shuffle Button */}
			</div>
		</div>
	);
}

export default PlayerCard;
