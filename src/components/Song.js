import React, { useContext, useMemo } from "react";
import playerContext from "../playerContext/playerContext";

function Song(props) {
	const { song: selectedSong, setSong } = useContext(playerContext);
	const {
		song,
		index,
		activeId,
		setActiveId,
		overId,
		setOverId,
		orders,
		onDrop,
	} = props;

	const handleDragStart = (e) => {
		setActiveId(song.id);
	};

	const handleDragEnd = (e) => {
		setActiveId(null);
	};

	const handleDragOver = (e) => {
		e.preventDefault();
		if (activeId === song.id) return;
		setOverId(song.id);
	};

	const handleDragLeave = (e) => {
		e.preventDefault();
		setOverId(null);
	};

	const handleDrop = (e) => {
		e.preventDefault();
		onDrop();
	};

	const activeIndex = useMemo(
		() => orders.indexOf(activeId),
		[activeId, orders]
	);

	const handleClick = () => {
		if (!selectedSong || song.id != selectedSong.id) {
			setSong(song);
		} else {
			setSong(null);
		}
	};

	return (
		<div
			className={`px-[5.5rem] border-x-[transparent] border-x-[.5rem] relative hover:border-s-[--song-hover-border] hover:bg-[--song-hover-bg] ${
				song.id === selectedSong?.id &&
				"border-s-[--song-hover-border] bg-[--song-hover-bg]"
			}`}
			onClick={handleClick}
			draggable
			onDragStart={handleDragStart}
			onDragEnd={handleDragEnd}
			onDragOver={handleDragOver}
			onDragLeave={handleDragLeave}
			onDrop={handleDrop}
		>
			<div className="grid grid-cols-[1fr,2fr,12fr,6fr,4fr,6fr] items-center">
				<div className="py-1 px-1">{index + 1}</div>
				<div className="py-1 px-1">
					<img src={song.thumbnail} alt="cover" />
				</div>
				<div className="py-1 px-1 truncate">{song.title}</div>
				<div className="py-1 px-1 truncate">{song.playing}</div>
				<div className="py-1 px-1">{song.time}</div>
				<div className="py-1 px-1 text-end truncate">{song.album}</div>
			</div>
			{overId === song.id && (
				<div
					className={`absolute w-[calc(100%+1rem)] -left-[.5rem] border-t-2 border-dashed border-[--text-2] ${
						activeIndex > index ? "top-0" : "bottom-0"
					}`}
				/>
			)}
		</div>
	);
}

export default Song;
