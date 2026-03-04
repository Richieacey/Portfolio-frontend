import '../css/About.css';

function About() {
    return (
        <div className="about-page">
            <img src="https://tctvhz9naf0vr1sb.public.blob.vercel-storage.com/images/Mask%20group.png" className='about-background-image' alt="" />
            <section className='about-container'>
                <h1 className='title'>About Me</h1>
                <div className="about-text-content">
                    <div className="text-section">
                        <p className='paragraph-style'>&lt;p&gt;</p>
                        <p className="bio-description">
                            I'm <span>Richard Uwumwonse</span>, a developer and <span>cybersecurity specialist</span> passionate about <span>offensive security</span> and secure software engineering, with five years of experience in <span>Python programming</span>.
                            <br /><br />
                            With a strong foundation in <span>full-stack web development</span>, I enjoy building everything from dynamic user interfaces to automated <span>OSINT</span> and <span>penetration testing tools</span>.
                            I'm driven by curiosity, whether that's mastering a new JavaScript framework or understanding the mechanics of a security vulnerability. I take pride in writing efficient code.
                            <br /><br />
                            Outside of tech, I enjoy sketching, reading, and exploring new perspectives that push my boundaries as both a developer and a person.
                        </p>
                        <p className='paragraph-style'>&lt;/p&gt;</p>
                    </div>
                    <div className="image-section">
                        <img src="https://tctvhz9naf0vr1sb.public.blob.vercel-storage.com/images/hero-image.png" className='hero-image' alt="Richard Uwumwonse" />
                    </div>
                </div>

            </section>

        </div>
    )
}

export default About;