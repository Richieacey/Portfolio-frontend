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
                            I’m <span>Richard Uwumwonse</span> a developer and <span>cybersecurity specialist</span> with a deep fascination for <span>offensive security</span> and building software that refuses to break. With five years of <span>Python</span> under my belt, I don’t just write code; I engineer solutions that are fast, secure, and purpose driven.
                            <br /><br />
                            My playground spans <span>full-stack development</span> and <span>cybersecurity tooling</span> from crafting sleek, dynamic user interfaces to building automated <span>OSINT</span> and <span>penetration-testing tools</span> that uncover what others miss. Curiosity fuels everything I do. One day I’m diving into the intricacies of a new JavaScript framework, the next I’m dissecting the anatomy of a security vulnerability just to understand how it ticks.
                            <br /><br />
                            Clean, efficient code is my standard not an afterthought.
                            <br /><br />
                            When I’m not deep in code or security research, you’ll probably find me sketching, reading, or chasing new ideas and perspectives that stretch both my creativity and my thinking as a developer and as a person.
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