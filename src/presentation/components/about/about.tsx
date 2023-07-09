import React from "react";
import "./about-styles.css";

const About: React.FC = () => {
	return (
		<div className="about-contianer">
			<div className="me">
				<img className="me-img" src="assets/raponikt.png" alt="raponikt" />
				<div className="me-description">
					<h2 className="me-title">rapon1kt</h2>
					<p className="me-text">
						Hi, my name is Gustavo Raponi Silva. I am a high school programmer
						who is always looking to acquire more knowledge in technology and
						new challenges. At the age of 15 I coordinated a programming project
						at school, we were the most noticed by the companies in the city.
						These days I'm in focus on{" "}
						<a href="https://joy-coffe.bohr.io" className="me-link">
							Joy Coffee
						</a>
						.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
