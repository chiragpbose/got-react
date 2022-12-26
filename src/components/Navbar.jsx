import React from "react";
import { useState } from "react";
import Cards from "./Cards";
export default function Navbar(props) {
	let copyData = props.data;
	const [state, setState] = useState(copyData);
	let filter = (e) => {
		console.log(copyData);
		for (let index = 0; index < copyData.length; index++) {
			if (e.target.innerHTML === copyData[index].name) {
				setState([copyData[index]]);
			}
		}
	};
	function handleClick(e) {
		if (e.target.value == "") {
			setState(copyData);
		} else {
			let searchValue = e.target.value;
			let clone = JSON.stringify(copyData);
			clone = JSON.parse(clone);
			let dataArray = clone.map((family) => {
				family.people = family.people.filter((person) => {
					return person.name.toLowerCase().includes(searchValue.toLowerCase());
				});
				return family;
			});
			setState(dataArray);
		}
	}

	return (
		<>
			<div className="w-1/1 h-16 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center flex-col">
				<input
					className="my-5"
					type="text"
					placeholder="Search the people of GOT"
					onKeyUp={handleClick}
				/>
			</div>
			<div className="flex justify-center">
				{props.data.map((house) => {
					return (
						<button
							className="h-10  m-5 border-solid border-2 bg-red-200	 border-indigo-600"
							onClick={filter}
						>
							{house.name}
						</button>
					);
				})}
			</div>
			<Cards data={state}></Cards>
		</>
	);
}
