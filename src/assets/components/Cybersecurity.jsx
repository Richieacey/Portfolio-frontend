import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "../css/Web Development.css";
import sentinelImg from "../images/Sentinel-VT.png";
import wazuhImg from "../images/Wazuh.png";

const reports = [
    {
        title: "Wazuh Endpoint",
        description: "Endpoint Security monitoring and threat analysis",
        image: wazuhImg,
        link: "https://drive.google.com/file/d/1pr41sUk0fnd1UNhQiP7rznbURLmEHrGa/view?usp=drive_link"
    },
    {
        title: "Sentinel-VT",
        description: "Cybersecurity report and analysis",
        image: sentinelImg,
        link: "https://drive.google.com/file/d/1cFHVtNYC7xwFHItY3PihLRRuOUtY5yP3/view?usp=drive_link"
    },
    {
        title: "Virtualized Lab",
        description: "Networking and Security testing in a Lab environment",
        image: "https://tctvhz9naf0vr1sb.public.blob.vercel-storage.com/images/SecurityTesting.png",
        link: "https://drive.google.com/file/d/1rrrKnxlJLYm0pZ1pguw4zXfU7Bl4cBuo/view"
    },
    {
        title: "Network Simulation",
        description: "Network Simulation of VLANs in Cisco packet tracer",
        image: "https://tctvhz9naf0vr1sb.public.blob.vercel-storage.com/images/Cisco.png",
        link: "https://drive.google.com/file/d/1XIAihTED-ExThxLxlOFM1yaRjOm5v2Y7/view"
    }
];

export default function Cybersecurity() {
    const [isVisible, setIsVisible] = useState(false);
    const titleRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Animate only once
                }
            },
            { threshold: 0.1 }
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <h1
                ref={titleRef}
                className={`projects-title ${isVisible ? "animate-title" : ""}`}
                style={{ visibility: isVisible ? "visible" : "hidden" }}
            >
                My Reports
            </h1>

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
                    {reports.map((report, index) => (
                        <SwiperSlide key={index}>
                            <div className="project-card cyber">
                                <img src={report.image} alt={report.title} />
                                <h3>{report.title}</h3>
                                <p>{report.description}</p>
                                <div className="project-links">
                                    <a href={report.link} target="_blank" rel="noopener noreferrer">
                                        Google Drive
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}