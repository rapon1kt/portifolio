import React from "react";
import AllInclusiveOutlinedIcon from "@mui/icons-material/AllInclusiveOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./navbar-styles.css";

const Navbar: React.FC = () => {
	return (
		<nav className="navbar">
			<AllInclusiveOutlinedIcon
				sx={{ fontSize: "4rem", color: "#8f8f8f", width: "20%" }}
			/>
			<ul className="navbar-nav">
				<li className="nav-item">
					<a className="nav-link" href="#home">
						Home
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#about">
						About
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#skills">
						Skills
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#projects">
						Projects
					</a>
				</li>
			</ul>
			<ul className="navbar-medias">
				<li className="nav-item">
					<a className="nav-link" href="https://github.com/rapon1kt">
						<GitHubIcon sx={{ fontSize: "2rem" }} />
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="https://www.linkedin.com/in/raponikt/">
						<LinkedInIcon sx={{ fontSize: "2.4rem" }} />
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="https://www.instagram.com/raponi_13">
						<InstagramIcon sx={{ fontSize: "2.4rem" }} />
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
