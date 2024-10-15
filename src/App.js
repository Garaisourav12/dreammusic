import React, { useMemo, useState } from "react";
import PlayList from "./components/PlayList";
import SideBarLeft from "./components/SideBarLeft";
import SideBarRight from "./components/SideBarRight";
import PlayerProvider from "./playerContext/PlayerProvider";
import song1image from "../src/assets/1.png";
import song2image from "../src/assets/2.png";
import song3image from "../src/assets/3.png";
import song4image from "../src/assets/4.png";
import song5image from "../src/assets/5.png";

const songs = [
	{
		id: "1",
		thumbnail: song1image,
		title: "Billie Jean",
		playing: "1.040.811.084",
		time: "4:18",
		album: "Thriller 25 Super Hits",
	},
	{
		id: "2",
		thumbnail: song2image,
		title: "Beat It",
		playing: "643.786.045",
		time: "4:18",
		album: "Thriller 25 Super Hits",
	},
	{
		id: "3",
		thumbnail: song3image,
		title: "Smooth Criminal - 2012 Remap",
		playing: "407.234.004",
		time: "4:17",
		album: "Thriller 25 Super Hits",
	},
	{
		id: "4",
		thumbnail: song4image,
		title: "Don't Stop 'Til You Get Enough",
		playing: "316.391.952",
		time: "6:05",
		album: "Bad 25th Anniversary",
	},
	{
		id: "5",
		thumbnail: song5image,
		title: "Rock with You - Single Version",
		playing: "268.187.218",
		time: "3:40",
		album: "Off the Wall",
	},
];

const getSongOrderConfig = (songs) => {
	return songs.reduce((prev, curr) => {
		prev[curr.id] = curr;
		return prev;
	}, {});
};

function App() {
	const [orders, setOrders] = useState(() => songs.map((s) => s.id));
	const songOrderConfig = useMemo(() => getSongOrderConfig(songs), [songs]);

	return (
		<main className="app flex bg-gradient-to-b from-[--bg-top] to-[--bg-bottom] text-[--text-2]">
			<SideBarLeft />
			<PlayList
				songOrderConfig={songOrderConfig}
				orders={orders}
				setOrders={setOrders}
			/>
			<PlayerProvider>
				<SideBarRight
					songOrderConfig={songOrderConfig}
					orders={orders}
				/>
			</PlayerProvider>
		</main>
	);
}

export default App;
