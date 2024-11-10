import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Typewriter from "typewriter-effect";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "../../components/ProjectCard";

import "./Home.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const contactForm = useRef();
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const sectionsRef = useRef([]);
  const paragraphRef = useRef(null);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2, // Add a slight delay between sections
        }
      );
    });
  }, []);

  useEffect(() => {
    const paragraphText = paragraphRef.current.textContent;
    const wrappedText = paragraphText
      .split(" ")
      .map(
        (char, i) =>
          `<span class="letter" style="display: inline-block; opacity: 0;">${char}</span>`
      )
      .join(" ");

    // Set the wrapped text as inner HTML of the paragraph
    paragraphRef.current.innerHTML = wrappedText;

    // Animate each letter when scrolling
    gsap.fromTo(
      ".letter",
      { opacity: 0, color: "#272727" }, // Initial state (invisible, dark)
      {
        opacity: 1,
        color: "#ffffff", // Target color when fully revealed
        stagger: 0.05, // Stagger animation of each letter
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 150%", // Start the animation when 80% of the section is visible
          end: "bottom top", // End the animation when the section is fully in view
          scrub: true, // Smooth scroll effect
        },
        duration: 1.5,
      }
    );
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_NAME,
        import.meta.env.VITE_TEMPLATE_NAME,
        contactForm.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setFeedbackMessage("Thank you! Your message has been sent.");
          contactForm.current.reset();
        },
        (error) => {
          setFeedbackMessage("Oops! Something went wrong, please try again.");
          console.error("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <Navbar />
      <main className="home-page">
        <div
          className="hero-section"
          id="heroSection"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <p className="hero-section__title">
            Hi, My name is{" "}
            <span className="hero-section__first-name">Miran</span>
          </p>
          <div className="hero-section__description">
            <p>I am a&nbsp;</p>
            <div className="hero-section__description--emphasis">
              <Typewriter
                options={{
                  strings: [
                    "Full-stack Developer",
                    "Web Desginer",
                    "Blockchain Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
        <div
          className="about-section"
          id="aboutSection"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <div className="about-section__content">
            <h2 className="about-section__heading">About Me</h2>
            <img
              className="about-section__image"
              src={`${window.location.origin}/Simple-Portfolio/Miran-Portfolio.jpg`}
            />
            <p ref={paragraphRef} className="about-section__description">
              I am a computer science enthusiast. I like learning new skills and
              staying up to date on the latest technological trends. I am
              looking to collaborate with like-minded individuals who share a
              similar vision and drive.
            </p>
            <div className="about-section__details">
              <h3 className="about-section__subheading">Education</h3>
              <ul className="about-section__education-list">
                <li>
                  <strong>
                    Bachelor of Technology (B.Tech) in Computer Science &
                    Engineering
                  </strong>
                  <br />
                  Symbiosis Institute of Technology, Pune (2022-2026)
                </li>
                <li>
                  <strong>Matriculation and Intermediate</strong>
                  <br />
                  Loyola High School, Patna (Graduated in 2022)
                </li>
              </ul>

              <h3 className="about-section__subheading">Achievements</h3>
              <ul className="about-section__achievements-list">
                <li>Bajaj HackRX5.0 Best Innovation Award Winner</li>
                <li>FOSS Hack 2024 Winner</li>
                <li>GDSC Web Weave Challenge Winner</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="project-section"
          id="projectSection"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className="project-section__heading">Projects</h2>
          <div className="projects-container">
            <ProjectCard
              projectImage="scobo.png"
              projectTitle="Scobo: A Medical Robot"
              projectDescription="Scobo is a medical robot designed to assist in surgeries and diagnostics with high precision."
            />
            <ProjectCard
              projectImage="readme.png"
              projectTitle="ReadMe.ai: Text-to-video"
              projectDescription="ReadMe is an AI-powered system designed to transform boring, static text inputs (such as brochures or PDFs) into engaging and interactive video content. In addition to video generation, it creates quizzes to test users' understanding of the content and provides detailed analytics on user engagement."
            />
            <ProjectCard
              projectImage="clipkadabra.jpg"
              projectTitle="ClipKadabra"
              projectDescription="Clip Kadabra is a powerful and intuitive video editing web application designed to cater to all your video editing needs. With a range of features from trimming and merging videos to adding filters and dubbing, Clip Kadabra aims to provide a seamless video editing experience."
            />
          </div>
        </div>
        <div
          className="contact-section"
          id="contactSection"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className="contact-section__heading">Contact Me</h2>
          <div className="contact-section__form-container">
            <form
              className="contact-form"
              ref={contactForm}
              onSubmit={sendEmail}
            >
              <input
                type="text"
                className="contact-form__input"
                placeholder="Your Name"
                name="name"
                required
              />
              <input
                type="email"
                className="contact-form__input"
                placeholder="Your Email"
                name="email"
                required
              />
              <textarea
                className="contact-form__textarea"
                placeholder="Your Message"
                rows="5"
                name="message"
                required
              ></textarea>
              <button type="submit" className="contact-form__button">
                Send Message
              </button>
            </form>
            {feedbackMessage && (
              <p className="feedback-message">{feedbackMessage}</p>
            )}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Home;
