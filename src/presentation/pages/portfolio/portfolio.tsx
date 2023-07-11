import { About, Navbar, Skills, Divisor, Footer } from "../../components";
import "./portfolio-styles.css";

function Portfolio() {
	return (
		<div className="portfolio-container">
			<Navbar />
			<Divisor section="About" />
			<About />
			<Divisor section="Skills" />
			<Skills />
			<Footer />
		</div>
	);
}

export default Portfolio;
