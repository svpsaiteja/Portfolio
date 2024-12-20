import {
  FaAngular,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaSass,
  FaReact,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si"; // Import TypeScript icon

export interface Skill {
  name: string;
  percentage: string;
  icon: React.ReactNode;
}

export const skills: Skill[] = [
  { name: "Angular", percentage: "90%", icon: <FaAngular /> },
  { name: "TypeScript", percentage: "90%", icon: <SiTypescript /> },
  { name: "JavaScript", percentage: "90%", icon: <FaJs /> },
  { name: "SCSS", percentage: "75%", icon: <FaSass /> },
  { name: "CSS", percentage: "75%", icon: <FaCss3Alt /> },
  { name: "HTML", percentage: "75%", icon: <FaHtml5 /> },
];
