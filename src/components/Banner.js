import artist from "../assets/artist.png";

const Banner = () => (
	<div className="px-[6.5rem] py-4 flex flex-col">
		<div className="">
			<img src={artist} className="w-full" alt="Michael Jackson" />
		</div>
	</div>
);

export default Banner;
