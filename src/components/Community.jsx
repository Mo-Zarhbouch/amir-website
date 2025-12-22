import React from "react";
import useInView from '../hooks/useInView'; 

import communityImage from '../assets/community.png';




const Community = () => {

  const [communityRef, communityInView] = useInView({ threshold: 0.15 });

  return (
    <section id="community-section" className="section var2-orb-container component-padding-top" >
        <div className="section-content-wrapper">
            <div ref={ communityRef } className={`community-container ${communityInView ? 'animate-in' : 'animate-out'}`}>
                {/* Tekstgedeelte */}
              <div className="text-container" style={{ gap: "20px", justifyContent: "space-between"}}>
              <h2 className="community-heading">Community én 1-op-1 begeleiding</h2>
              
              <p className="community-subtext">
                  Naast 1-op-1 coaching krijg je toegang tot een besloten community waar je met anderen ervaringen kunt delen. Zo heb je altijd een vangnet: persoonlijke hulp van mij, en inspiratie van mede-ondernemers die dezelfde reis maken.
              </p>
              </div>

              {/* Afbeelding / Carousel placeholder */}
              <div className="community-image-container">
                <div className="community-image">
                    <img src={communityImage} alt="Community" />
                </div>
              </div>
          
            </div>
          </div>
    </section>
  );
};

export default Community;
