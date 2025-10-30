import '../css/Projects.css'
// import Particle from '../components/Particles'
import WebDevelopment from '../components/Web Development';
import Cybersecurity  from '../components/Cybersecurity';

function Projects(){
    return (
        <div className='projects-container'>
            <section  className="projectsAndSkills">
                <div className='button-container'>
                    <h3>Web development</h3>
                </div>
                <WebDevelopment/>
                <div className='button-container'>
                    <h3>Cybersecurity</h3>
                </div>
                <Cybersecurity/>
                {/* <Particle/> */}

            </section>
        </div>
    )
}

export default Projects;