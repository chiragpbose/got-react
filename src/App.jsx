import { useState } from "react";
import Navbar from "./components/Navbar";
import data from "./assets/data_2";
import Header from "./components/Header";
import Cards from "./components/Cards";
function App() {
	return (
		<div className="App">
			<Header />
			<Navbar data={data.houses} />
			{/* <Cards data={data.houses} /> */}
		</div>
	);
}

export default App;
