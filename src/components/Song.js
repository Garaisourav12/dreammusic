import React, { useMemo } from "react";

function Song({
	song,
	index,
	activeId,
	setActiveId,
	overId,
	setOverId,
	orders,
	onDrop,
}) {
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

	return (
		<div
			className="px-[5.5rem] border-x-[transparent] border-x-[.5rem] hover:border-s-[--song-hover-border] relative hover:bg-[--song-hover-bg]"
			draggable
			onDragStart={handleDragStart}
			onDragEnd={handleDragEnd}
			onDragOver={handleDragOver}
			onDragLeave={handleDragLeave}
			onDrop={handleDrop}
		>
			<div className="grid grid-cols-[1fr,1fr,5fr,3fr,2fr,4fr] items-center">
				<div className="py-1 px-2">{index + 1}</div>
				<div className="py-1 px-2">
					<img src={song.thumbnail} alt="cover" />
				</div>
				<div className="py-1 px-2 truncate">{song.title}</div>
				<div className="py-1 px-2 truncate">{song.playing}</div>
				<div className="py-1 px-2">{song.time}</div>
				<div className="py-1 px-2 text-end truncate">{song.album}</div>
			</div>
			{overId === song.id && (
				<div
					className={`absolute w-full left-0 border-t-2 border-dashed border-[--text-2] ${
						activeIndex > index ? "top-0" : "bottom-0"
					}`}
				/>
			)}
		</div>
	);
}

export default Song;
