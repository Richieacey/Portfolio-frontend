// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";
// import "../css/Web Development.css";

// // ✅ Import your images correctly

// const projects = [
//   {
//     title: "Bookmark",
//     description: "A personal portfolio built with React and modern UI design.",
//     image: "./src/assets/images/Bookmark.png",
//     github: "https://github.com/Richieacey/portfolio",
//     live: "https://richieacey.vercel.app",
//   },
//   {
//     title: "Easybank",
//     description: "A full-stack Django + React app for managing daily tasks.",
//     image: "./src/assets/images/easybank.png",
//     github: "https://github.com/Richieacey/taskmanager",
//     live: "#",
//   },
//   {
//     title: "Room",
//     description: "Weather forecast app using OpenWeather API and React.",
//     image: "./src/assets/images/Room.png",
//     github: "https://github.com/Richieacey/weatherapp",
//     live: "#",
//   },
//   {
//     title: "Sneakers",
//     description: "A clean e-commerce frontend built with React and Tailwind.",
//     image: "./src/assets/images/Sneakers.png",
//     github: "https://github.com/Richieacey/ecommerce",
//     live: "#",
//   },
// ];

// export default function WebDevelopment() {
//   const [open, setOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   return (
//     <div className="projects-page">
//       <h1 className="projects-title">My Projects</h1>

//       <div className="carousel-container">
//         <Swiper
//           modules={[Navigation, Pagination]}
//           navigation
//           pagination={{ clickable: true }}
//           spaceBetween={30}
//           slidesPerView={3}
//           centeredSlides
//           grabCursor
//           loop
//           className="projects-carousel"
//         >
//           {projects.map((project, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className="project-card"
//                 onClick={() => {
//                   setCurrentIndex(index);
//                   setOpen(true);
//                 }}
//               >
//                 <img src={project.image} alt={project.title} />
//                 <h3>{project.title}</h3>
//                 <p>{project.description}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Lightbox */}
//       <Lightbox
//         open={open}
//         close={() => setOpen(false)}
//         index={currentIndex}
//         slides={projects.map((project) => ({
//           src: project.image,
//           description: project.description,
//           title: project.title,
//         }))}
//         render={{
//           description: (slide) => (
//             <div className="lightbox-info">
//               <h2>{slide.title}</h2>
//               <p>{slide.description}</p>
//               <div className="lightbox-links">
//                 <a
//                   href={projects[currentIndex].github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   GitHub
//                 </a>
//                 <a
//                   href={projects[currentIndex].live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Live Demo
//                 </a>
//               </div>
//             </div>
//           ),
//         }}
//       />
//     </div>
//   );
// }

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "../css/Web Development.css";

const projects = [
    {
        title: "Bookmark",
        description: "Landing page of a bookmark website",
        image: "https://tctvhz9naf0vr1sb.public.blob.vercel-storage.com/images/Bookmark.png",
        github: "https://github.com/Richieacey/bookmark-landing-page",
        live: "https://richieacey.github.io/bookmark-landing-page/",
    },
    {
        title: "Easybank",
        description: "Landing page of bank website",
        image: "https://tctvhz9naf0vr1sb.public.blob.vercel-storage.com/images/easybank.png",
        github: "https://github.com/Richieacey/Easybank-landing-page",
        live: "https://richieacey.github.io/Easybank-landing-page/",
    },
    {
        title: "Room",
        description: "Homepage of a furniture website",
        image: "https://tctvhz9naf0vr1sb.public.blob.vercel-storage.com/images/Room.png",
        github: "https://github.com/Richieacey/Room-homepage",
        live: "https://richieacey.github.io/Room-homepage/",
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
            <h1 className="projects-title">My Projects</h1>

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
