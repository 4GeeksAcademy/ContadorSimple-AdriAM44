import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import ContadorSimple from "./ContadorSimple";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<ContadorSimple />

		</div>
	);
}

export default Home;