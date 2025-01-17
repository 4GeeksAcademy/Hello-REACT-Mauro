import React from "react"; // Import React

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// 6 & 7 >> Import Element.jsx to the Home and Use it
import NavBar from "./NavBar.jsx"; // Import Element with "export default"

import { Footer } from "./Footer.jsx"; // Import Element with "export const"
import { JumbotronButton } from "./JumbotronButton.jsx";
import { Alert } from "./Alert.jsx";
import { Spinner } from "./Spinner.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<NavBar />
			<Alert />
			<Spinner />
			<h1 className="text-center mt-5">{'Intro React'}</h1>
			<JumbotronButton />
			{/* <p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a> */}
			
			<Footer />
		</div>
	);
};

export default Home;
