import '../css/About.css';

function About() {
    return (
        <div className="about-page">
            <img src="https://tctvhz9naf0vr1sb.public.blob.vercel-storage.com/images/Mask%20group.png" className='about-background-image' alt="" />
            <section className='about-container'>
                <h1 className='title'>About Me</h1>
                <div>
                    <p className='paragraph-style'>&lt;p&gt;</p>
                    <p className="bio-description">
                        I'm <span>Richard Uwumwonse</span>, a passionate web developer focused on building clean,
                        responsive, and dynamic web applications using <span>HTML, CSS, JavaScript, and React, Django, etc.</span>

                        I take pride in writing efficient and maintainable code while constantly exploring
                        new ways to improve my craft. I&apos;m driven by curiosity and the desire to keep learning, there&apos;s
                        always something new to master in tech.

                        When I&apos;m not coding, you&apos;ll probably find me sketching, reading something thought-provoking,
                        or experimenting with tech-driven side projects. I enjoy exploring new perspectives that challenge
                        how I think and help me grow both as a developer and as a person.
                    </p>
                    <p className='paragraph-style'>&lt;/p&gt;</p>
                </div>

            </section>
            <section>
                <img src="https://tctvhz9naf0vr1sb.public.blob.vercel-storage.com/images/hero-image.png" className='hero-image' alt="" />
            </section>

        </div>
    )
}

export default About;