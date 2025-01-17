import React from "react"; // 1. Import React

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// 2. Create your first component; Use always PascalCase!
const Home = () => {
	
	// 3. Code JS
	
	// 4. Return One and Only ONE Component
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

// 5. Export
export default Home;
