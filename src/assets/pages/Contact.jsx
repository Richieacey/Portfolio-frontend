import { useState } from "react";
import '../css/Contact.css';

function Contact(){
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    });
    const [isNotSuccessful, setToTrue] = useState(false);

    const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
    };


    const handleSubmit=(e)=> {
        e.preventDefault();
        // const { name, email, course } = formData;
        fetch("https://django-api-h2xj.onrender.com/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === "success") {
            // alert("Message sent!");
            setToTrue(!isNotSuccessful)
            } else {
            alert("Error: " + data.message);
            }
        })
        .catch(err => console.error("Error:", err));

        
    }
    return (
    <div className="contact-page">
      <img src="https://tctvhz9naf0vr1sb.public.blob.vercel-storage.com/images/glasses.png" alt="" />
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
      <div className={`${isNotSuccessful ? "Successful" : "NotSuccessful"}`}>Message sent!</div>
    </div>
  );
}


export default Contact;