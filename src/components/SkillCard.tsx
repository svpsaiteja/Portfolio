import React from "react";
import { Skill } from "../models/Skill";

interface Props {
  skill: Skill;
}

const SkillCard = ({ skill }: Props) => {
  return (
    <div className="skill">
      <p className="mb-1">
        {skill.icon}
        <span className="mx-2">{skill.name}</span>
      </p>
      <div className="progress" style={{ height: "10px" }}>
        <div className="progress-bar" style={{ width: skill.percentage }}></div>
      </div>
    </div>
  );
};

export default SkillCard;
