import React from "react";
import ReactDOM from "react-dom/client";
import Portifolio from "../presentation/pages/portfolio/portfolio.tsx";
import "./styles/global-styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Portifolio />
	</React.StrictMode>
);
