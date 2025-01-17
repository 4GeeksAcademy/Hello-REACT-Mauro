import React from "react"; // Import React

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// 6 & 7 >> Import Element.jsx to the Home and Use it
import NavBar from "./NavBar.jsx"; // Import Element with "export default"

import { Footer } from "./Footer.jsx"; // Import Element with "export const"

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<NavBar />
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			
			<Footer />
		</div>
	);
};

export default Home;
