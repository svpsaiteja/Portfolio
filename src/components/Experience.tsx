import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoCodeWorkingOutline } from "react-icons/io5";

interface Experience {
  title: string;
  date: string;
  location: string;
  description?: string;
}

const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    date: "2021 - present",
    location: "Bangalore, Karnataka",
  },
  {
    title: "Software Design Engineer",
    date: "2018 - 2021",
    location: "Hyderabad, Telangana",
  },
];

const Experience = () => {
  return (
    <div className="p-3 bg-light">
      <VerticalTimeline layout="1-column">
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            date={experience.date}
            icon={<IoCodeWorkingOutline />}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              {experience.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {experience.location}
            </h4>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
