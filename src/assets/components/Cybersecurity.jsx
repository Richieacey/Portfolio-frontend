import "../css/Web Development.css"

export default function Cybersecurity() {
    return (
        <>
            <h1 className="projects-title">My Reports</h1>
            <div className="cyber-container">

                <div className="project-card">
                    <img src="https://tctvhz9naf0vr1sb.public.blob.vercel-storage.com/images/SecurityTesting.png" alt="Network security" />
                    <h3>Virtualized Lab</h3>
                    <p>Networking and Security testing in a Lab environment</p>
                    <div className="project-links">
                        <a href="https://drive.google.com/file/d/1rrrKnxlJLYm0pZ1pguw4zXfU7Bl4cBuo/view" target="_blank" rel="noopener noreferrer">
                            Google Drive
                        </a>
                    </div>
                </div>
                <div className="project-card">
                    <img src="./src/assets/images/Cisco.png" alt="Networking in Cisco" />
                    <h3>Network Simulation</h3>
                    <p>Network Simulation of VLANs in Cisco packet tracer</p>
                    <div className="project-links">
                        <a href="https://drive.google.com/file/d/1XIAihTED-ExThxLxlOFM1yaRjOm5v2Y7/view" target="_blank" rel="noopener noreferrer">
                            Google Drive
                        </a>
                    </div>
                </div>
            </div>
        </>



    )
}