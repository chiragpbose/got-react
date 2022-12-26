import React from "react";

export default function Cards(props) {
	return (
		<div className="card-container flex flex-wrap justify-between">
			{props.data.map((houses) => {
				return houses.people.map((person) => {
					return (
						<div className="card bg-green-400 border border-indigo-600 m-10 w-1/4 flex flex-col items-center		justify-between p-5 rounded-md">
							<img
								className="h-14 w-14 rounded-full"
								src={person.image}
								alt=""
							/>
							<h1>{person.name}</h1>
							<p>{person.description}</p>
							<button className="bg-black text-white	p-1">
								<a href={person.wikiLink}>KNOW MORE!</a>
							</button>
						</div>
					);
				});
			})}
		</div>
	);
}
