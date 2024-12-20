import React from "react";
import { skills } from "../models/Skill";
import SkillCard from "./SkillCard";

interface Skill {}

const Skills = () => {
  return (
    <div className="d-flex flex-column gap-4">
      {skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>
  );
};

export default Skills;
