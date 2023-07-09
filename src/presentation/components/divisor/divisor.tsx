import React from "react";
import "./divisor-styles.css";

interface ISection {
	section: String;
}

const Divisor: React.FC<ISection> = ({ section }: ISection) => {
	return (
		<div className="divisor" id="about">
			<h1 className="divisor-title">{section}</h1>
			<img className="divisor-curve" src="medias/curve.svg" alt="curve" />
		</div>
	);
};

export default Divisor;
