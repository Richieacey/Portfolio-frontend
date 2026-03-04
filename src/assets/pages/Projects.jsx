import '../css/Projects.css'
import Particle from '../components/Particles'
import WebDevelopment from '../components/Web Development';
import Cybersecurity from '../components/Cybersecurity';

function Projects() {
    return (
        <div className="projects-page-wrapper">
            <div className="projects-bg">
                {/* Glowing decorative orbs */}
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
                <div className="glow-orb orb-3"></div>

                <div className="projects-content">
                    <WebDevelopment />
                    <Cybersecurity />
                </div>
            </div>
            <Particle />
        </div>
    )
}

export default Projects;