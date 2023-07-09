import { About, Navbar, Skills, Divisor } from "../../components";
import "./portfolio-styles.css";

function Portfolio() {
	return (
		<div className="portfolio-container">
			<Navbar />
			<Divisor section="About" />
			<About />
			<Divisor section="Skills" />
			<Skills />
		</div>
	);
}

export default Portfolio;
