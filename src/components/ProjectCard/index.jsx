import PropTypes from "prop-types"; // For prop validation
import "./ProjectCard.css";

function ProjectCard({ projectImage, projectTitle, projectDescription }) {
  return (
    <div
      className="project-card"
      style={{ backgroundImage: `url('${projectImage}')` }}
    >
      <div className="project-card__about-project">
        <h3>{projectTitle}</h3>
        <p className="project-card__description">{projectDescription}</p>
      </div>
    </div>
  );
}

// Define prop types for better validation and documentation
ProjectCard.propTypes = {
  projectImage: PropTypes.string,
  projectTitle: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
};

export default ProjectCard;
