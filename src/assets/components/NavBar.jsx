import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="navbar" ref={navRef}>
            <div className="navbar-brand">
                <img
                    src="./src/assets/images/Code_perspective_matte.png"
                    className="logo-icon"
                    alt=""
                />
                <Link to="/" className="brand">Richie.U</Link>
            </div>

            {/* Hamburger button */}
            <div
                className={`hamburger ${isOpen ? "active" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>-</span>
                <span>-</span>
                <span>-</span>
            </div>

            {/* Navigation links */}
            <div className={`navbar-links ${isOpen ? "open" : ""}`}>
                <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
                <Link to="/projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</Link>
                <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
        </nav>
    );
}
