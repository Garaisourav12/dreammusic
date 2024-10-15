import search from "../assets/search.png";

const Navbar = () => {
	return (
		<nav className="flex flex-col-reverse sm:flex-row gap-4 items-center justify-between px-[6.25rem] py-4 sticky top-0">
			<ul className="flex gap-4 w-full justify-center sm:justify-start">
				<li>Music</li>
				<li>Podcast</li>
				<li>Live</li>
				<li>Radio</li>
			</ul>
			<div className="relative w-full h-9">
				<input
					type="search"
					className="h-full bg-[--bg-right] px-4 rounded-full w-full"
				/>
				<div className="h-full absolute top-[25%] right-4">
					<img className="h-[50%]" src={search} alt="search" />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
