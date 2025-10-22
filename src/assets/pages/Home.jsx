import "../css/Home.css";
import Particle from '../components/Particles'

function Home(){
    return(
        <div>
            
            <div className="page home-bg">
            
                <section className="home">
                    <h2>Hi,</h2>
                    <h2>I'm <span>Richard</span></h2>
                    <h1>Web <span>Developer & Tech</span> Enthusiast</h1>
                    <p>I build clean, responsive websites that solve real-world problems.</p>
                    <a href="/projects" className="cta-button">View My Work</a>
                </section>
                <section className="quote">
                    <img src="https://tctvhz9naf0vr1sb.public.blob.vercel-storage.com/images/workflow.png" className="bottom-image" alt="" />
                    <img src="https://tctvhz9naf0vr1sb.public.blob.vercel-storage.com/images/Style%3DOutline.svg" className="abstract" alt="" />
                    <h3>"Do or Do not, There is no try" - <span>Master Yoda "Star Wars"</span></h3>
                </section>
                <section className="social-container">
                    <div className="line"></div>
                    <a href="https://linkedin.com/in/richard-uwumwonse" className="icon"><img src="https://tctvhz9naf0vr1sb.public.blob.vercel-storage.com/images/Linkedin.svg" alt="Twitter"/></a>
                    <a href="https://github.com/Richieacey" className="icon"><img src="https://tctvhz9naf0vr1sb.public.blob.vercel-storage.com/images/Github.svg" alt="Instagram"/></a>
                    <a href="https://x.com/RichieAce2" className="icon"><img src="https://tctvhz9naf0vr1sb.public.blob.vercel-storage.com/images/Twitter.svg" alt="LinkedIn"/></a>
                </section>
            </div>
            <Particle/>
        </div>
        
       
    )
}

export default Home;