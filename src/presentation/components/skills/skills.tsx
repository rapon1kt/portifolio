import React from "react";
import "./skills-styles.css";
import data from "../../../data/data";

interface Props {
	name: string;
	experience: string;
	img: string;
}

interface ISkills {
	skill: Props;
}

const SkillsCard: React.FC<ISkills> = ({ skill }: ISkills) => {
	return (
		<div className="skill-card-container">
			<img className="skill-card-image" src={skill?.img} alt={skill?.name} />
			<div className="skill-card-description">
				<h1 className="skill-card-title">{skill?.name}</h1>
				<p className="skill-card-experience">{skill?.experience}</p>
			</div>
		</div>
	);
};

const Skills: React.FC = () => {
	return (
		<section className="skills">
			<div className="skills-cards">
				{data.map((skill) => {
					return <SkillsCard skill={skill} key={skill.name} />;
				})}
			</div>
		</section>
	);
};

export default Skills;
