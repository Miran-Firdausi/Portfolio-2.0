import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <main className="home-page">
        <div className="hero-section">
          Hi, My name is <span className="hero-section__first-name">Miran</span>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
