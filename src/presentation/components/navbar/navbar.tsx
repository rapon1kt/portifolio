import React from "react";
import AllInclusiveOutlinedIcon from "@mui/icons-material/AllInclusiveOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./navbar-styles.css";

const Navbar: React.FC = () => {
	return (
		<nav className="navbar">
			<AllInclusiveOutlinedIcon sx={{ fontSize: "4rem", color: "#8f8f8f" }} />
			<ul className="navbar-medias">
				<li className="nav-item">
					<a className="nav-link" href="https://github.com/rapon1kt">
						<GitHubIcon sx={{ fontSize: "2.4rem" }} />
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="https://www.linkedin.com/in/raponikt/">
						<LinkedInIcon sx={{ fontSize: "2.8rem" }} />
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="https://www.instagram.com/raponi_13">
						<InstagramIcon sx={{ fontSize: "2.8rem" }} />
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
