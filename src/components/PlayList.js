import React from "react";
import MusicTable from "./MusicTable";
import Banner from "./Banner";
import DNDProvider from "../dndContext/DNDProvider";
import Navbar from "./Navbar";

function PlayList({ songOrderConfig, orders, setOrders }) {
	return (
		<div className="w-[1000px] min-h-screen">
			<Navbar />
			<Banner />
			<div className="text-[--text-1] flex justify-between px-[6.5rem] py-2">
				<h3>Popular</h3>
				<h3>See All</h3>
			</div>
			<DNDProvider>
				<MusicTable
					songOrderConfig={songOrderConfig}
					orders={orders}
					setOrders={setOrders}
				/>
			</DNDProvider>
		</div>
	);
}

export default PlayList;
