import "../css/Bootcamp.css";
import Particle from '../components/Particles';
import { useState } from "react";
import { db } from "../../firebase";
import { ref, push, serverTimestamp } from "firebase/database";

function Bootcamp() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        reason: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Attempt to insert the data into Firebase Realtime Database
            // Note: Make sure the 'bootcamp_registrations' node exists/is allowed in your Firebase rules
            const registrationsRef = ref(db, 'bootcamp_registrations');
            const newDocRef = await push(registrationsRef, {
                full_name: formData.name,
                email: formData.email,
                phone: formData.phone,
                reason: formData.reason,
                timestamp: serverTimestamp()
            });


            // Redirect to Paystack checkout
            window.location.href = "https://paystack.shop/pay/wr66sikoqd";

        } catch (err) {
            // Error handling can be added here silently if needed
        }
    };

    return (
        <div className="bootcamp-page">
            <div className="bootcamp-bg">
                <div className="bootcamp-content">

                    {/* Hero & Info Section */}
                    <section className="bootcamp-hero">
                        <div className="badge">Starts May 2026</div>
                        <h1><span>Python</span> for Cybersecurity</h1>
                        <h2>A 1-Month Practical Bootcamp by <span>TheCyberVendetta</span></h2>

                        <div className="bootcamp-details">
                            <h3>What You Will Learn:</h3>
                            <ul>
                                <li>Master Python Fundamentals from scratch.</li>
                                <li>Build 5+ Practical Security Tools.</li>
                                <li>Automate Ethical Hacking tasks and scripting.</li>
                            </ul>

                            <div className="contact-info">
                                <p><strong>Duration:</strong> 1 Month</p>
                                <p><strong>Fee:</strong> ₦45,000</p>
                                <p><strong>Contact (WhatsApp/Call):</strong> <a href="tel:+2348109773147">+234 810 977 3147</a></p>
                                <a href="https://youtube.com/@thecybervendetta" target="_blank" rel="noopener noreferrer" className="youtube-btn">
                                    Subscribe to My YouTube Channel
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* Registration Form Section */}
                    <section className="bootcamp-form-section" id="register">
                        <div className="form-container glass-effect">
                            <h2>Reserve Your Spot</h2>
                            <p>Fill out the form below to register and proceed to payment.</p>

                            <form onSubmit={handleSubmit} className="registration-form">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number (WhatsApp)</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        placeholder="+234..."
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="reason">Why do you want to join?</label>
                                    <textarea
                                        id="reason"
                                        name="reason"
                                        rows="3"
                                        required
                                        placeholder="e.g. I want to transition into infosec..."
                                        value={formData.reason}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <button type="submit" className="pay-btn">
                                    Register & Pay ₦45,000
                                </button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
            <Particle />
        </div>
    );
}

export default Bootcamp;
