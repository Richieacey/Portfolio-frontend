import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "../css/Web Development.css";

const projects = [
    {
        title: "Weather now",
        description: "A website for getting live weather updates and forecasts from different places, built with React, Tailwind css, open mateo API, and ipinfo API",
        image: "https://tctvhz9naf0vr1sb.public.blob.vercel-storage.com/images/weathernow.jpeg",
        github: "https://github.com/Richieacey/weather-now",
        live: "https://weather-now-web-app.vercel.app/",
    },
    {
        title: "Easybank",
        description: "Simple bank website",
        image: "https://tctvhz9naf0vr1sb.public.blob.vercel-storage.com/images/easybank.png",
        github: "https://github.com/Richieacey/Easybank-landing-page",
        live: "https://easybank-landing-page-plum-three.vercel.app/",
    },
    {
        title: "Room",
        description: "Furniture company website",
        image: "https://tctvhz9naf0vr1sb.public.blob.vercel-storage.com/images/Room.png",
        github: "https://github.com/Richieacey/Room-homepage",
        live: "https://room-homepage-tan-psi.vercel.app/",
    },
    {
        title: "MovieBase",
        description: "A database of your favorite trending movies built with React and moviedb API",
        image: "https://tctvhz9naf0vr1sb.public.blob.vercel-storage.com/images/MovieBase.png",
        github: "https://github.com/Richieacey/MovieBase",
        live: "https://movie-base-topaz.vercel.app/",
    },
];

export default function WebDevelopment() {
    return (
        <div className="projects-page">
            <h1 className="projects-title animate-title">My Projects</h1>

            <div className="carousel-container">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                    navigation
                    pagination={{ clickable: true }}
                    grabCursor
                    loop
                    centeredSlides
                    effect="coverflow"
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 120,
                        modifier: 2,
                        slideShadows: false,
                    }}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    speed={1000}
                    className="projects-carousel"
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 20 },
                        640: { slidesPerView: 1.5, spaceBetween: 30 },
                        1024: { slidesPerView: 3, spaceBetween: 40 },
                    }}
                >

                    {projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <div className="project-card">
                                <img src={project.image} alt={project.title} />
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        GitHub
                                    </a>
                                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
