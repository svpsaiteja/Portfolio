import { FaLinkedinIn, FaGithub, FaFileAlt } from "react-icons/fa";
import "./Profile.css"; // Import the CSS file for styling
import profileImage from "../assets/profile-pic.jpeg"; // Import the profile image

const Profile = () => {
  return (
    <>
      <div className="d-flex flex-column gap-3">
        <img src={profileImage} alt="Profile" className="profile-pic" />
        <a
          className="btn btn-outline-primary"
          href="https://linkedin.com/in/venkata-phani-saiteja-sami-337059a7"
          target="_blank"
        >
          <FaLinkedinIn /> LinkedIn
        </a>
        <a
          className="btn btn-outline-primary"
          href="https://github.com/svpsaiteja"
          target="_blank"
        >
          <FaGithub /> Github
        </a>
      </div>
    </>
  );
};

export default Profile;
