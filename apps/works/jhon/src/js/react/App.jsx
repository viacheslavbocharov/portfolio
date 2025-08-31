import React from "react";
import ReactDOM from "react-dom/client";

import someImg from "@img/cover.jpg";
import Hero from "./components/hero/Hero";
import Menu from "./components/menu/Menu";

const App = () => (
	<>
		<h1 className="title">В кімнату заходить React</h1>
		<Menu/>
			{/* {
			<img
				src={someImg}
				alt="Image"
			/>
		} */}
	</>
);

// Об'єкт для виводу
const root = document.querySelector("#root")
	? document.querySelector("#root")
	: document.querySelector(".wrapper");

// Main rendering
ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
