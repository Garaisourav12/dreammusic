import artist from "../assets/artist.png";

const Banner = () => (
	<div className="px-[6rem] py-4 flex flex-col">
		<div className="mx-1">
			<img src={artist} className="w-full" alt="Michael Jackson" />
		</div>
	</div>
);

export default Banner;
