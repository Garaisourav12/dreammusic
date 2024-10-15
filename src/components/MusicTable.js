import React, { useCallback, useContext, useMemo, useState } from "react";
import { throttle } from "lodash";
import Song from "./Song";
import dndContext from "../dndContext/dndContext";

function MusicTable({ songOrderConfig, orders, setOrders }) {
	const { activeId, setActiveId, overId, setOverId, reorder } =
		useContext(dndContext);

	const onDrop = useCallback(() => {
		if (!activeId || !overId) {
			return;
		}
		const activeIndex = orders.indexOf(activeId);
		const overIndex = orders.indexOf(overId);
		setOrders(reorder(orders, activeIndex, overIndex));
		setOverId(null);
	}, [activeId, overId, orders]);

	return (
		<div className="mb-4 text-[.8rem]">
			<div className="grid grid-cols-[1fr,2fr,12fr,6fr,4fr,6fr] px-[6rem] text-[--text-1]">
				<div className="py-2 px-1">#</div>
				<div className="py-2 px-1"></div>
				<div className="py-2 px-1">TITLE</div>
				<div className="py-2 px-1">PLAYING</div>
				<div className="py-2 px-1">TIME</div>
				<div className="py-2 px-1 text-end">ALBUM</div>
			</div>
			{orders.map((order, index) => {
				const song = songOrderConfig[order];

				return (
					song && (
						<Song
							key={song.id}
							song={song}
							index={index}
							activeId={activeId}
							setActiveId={setActiveId}
							overId={overId}
							setOverId={setOverId}
							orders={orders}
							onDrop={throttle(onDrop, 20)}
						/>
					)
				);
			})}
		</div>
	);
}

export default MusicTable;
