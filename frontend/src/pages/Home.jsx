import React from "react";
import "./Home.css";

const Home = () => {
  return (
    
    <div className="home">
      <section className="home-section">

        
        <h1>About Department</h1>
        <p>
          The ECE Department has a legacy of excellence in education, research, and innovation.
          Offering undergraduate, postgraduate, and research programs, it fosters industry collaboration,
          state-of-the-art labs, and outcome-based learning for holistic student development.
        </p>
      </section>

      <section className="home-section">
        <h1>Department Profile</h1>
        <p>
          Established in 1971, the department has grown from 60 to 420 UG students with three PG programs
          and recognized research centers. It is accredited under the NBA TIER-1 framework, striving
          toward academic and research excellence.
        </p>
      </section>

      <div className="vision-mission-container">
        <section className="vision">
          <h1>Vision</h1>
          <p>
            To emerge as a center of academic excellence in electronics, communication and related domains
            through knowledge acquisition, knowledge dissemination and knowledge generation meeting global
            needs and standards.
          </p>
        </section>

        <section className="mission">
          <h1>Mission</h1>
          <p>
            Imparting quality education through state of the art curriculum, conducive learning environment
            and research with scope for continuous improvement leading to overall professional success.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
