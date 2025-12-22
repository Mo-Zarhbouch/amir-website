import useInView from "../hooks/useInView";
import OrderCourseButton from "./OrderCourseButton";

import AchievementImage from "../assets/yourResults.png";
import ForWhoImage from "../assets/ForWho.png";

const WhatYouAchieve = () => {
  const [achievementsRef, achievementsInView] = useInView({ threshold: 0.05 });
  const [forWhoRef, forWhoInView] = useInView({ threshold: 0.05 });

  return (
    <section id="what-you-achieve" className="section component-padding-top" >
      <div
        className="section-content-wrapper"
        style={{ gap: "40px", flexDirection: "column" }}
        >
              
        <div ref={achievementsRef} className={`achievements-container ${ achievementsInView ? "animate-in" : "animate-out" }`} >
                  
            <div className="achievements">
                <div className="default-heading">Jouw resultaten na dit traject</div>
                <div className="gradient-line"></div>

                <div className="achievements-grid">
                    <div className="achievement-card">
                    <span className="item-icon">
                        <i className="fa-solid fa-briefcase"></i>
                    </span>
                    <p>Je bouwt een eigen recruitmentbedrijf vanuit huis.</p>
                    </div>

                    <div className="achievement-card">
                    <span className="item-icon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <p>Je weet hoe je opdrachtgevers en kandidaten vindt.</p>
                    </div>

                    <div className="achievement-card">
                    <span className="item-icon">
                        <i className="fa-solid fa-bolt"></i>
                    </span>
                    <p>Je hebt een bewezen strategie die direct werkt.</p>
                    </div>

                    <div className="achievement-card">
                    <span className="item-icon">
                        <i className="fa-solid fa-coins"></i>
                    </span>
                    <p>
                        Je creëert een <span className="highlight"> <strong>stabiel passief inkomen</strong> </span> dat elke
                        maand terugkomt.
                    </p>
                    </div>

                    <div className="achievement-card">
                    <span className="item-icon">
                        <i className="fa-solid fa-user-check"></i>
                    </span>
                    <p>
                        Je staat er nooit alleen voor – dankzij mijn
                        <span className="highlight"><strong> persoonlijke 1-op-1 begeleiding.</strong></span>
                    </p>
                    </div>
                </div>
                </div>
                  
            <div className="achievement-image-container">
                <img 
                    src={AchievementImage} 
                    alt="Achievement Image" 
                    className="achievement-image"
                />
            </div>
       </div>
        

        <div ref={forWhoRef} className={`component-padding-top for-who-section ${ forWhoInView ? "animate-in" : "animate-out" }`}  >

          <div className="for-who-image-container">
                <img 
                    src={ForWhoImage} 
                    alt="For Who Image" 
                    className="for-who-image"
                />
            </div>

          <div className="target-container">
          <div className="default-heading">Voor wie is dit traject?</div>
          <div className="gradient-line"></div>
          <p className="subtitle">Voor iedereen die...</p>

          <ul className="target-list">
            <li>Een eigen bedrijf wil starten zonder hoge investering.</li>
            <li>Meer vrijheid en inkomen wil creëren.</li>
            <li>Geen zin heeft in lange opleidingen of theorie.</li>
            <li>Persoonlijke begeleiding en coaching wil bij de eerste stappen.</li>
            <li>Overal ter wereld wil werken.</li>
            <li>Ongelimiteerd passief inkomen wil verdienen.</li>
          </ul>
        </div>
       </div>
        


        <div className="order-button-right">
          <OrderCourseButton
             onClick={() => window.open("https://form.typeform.com/to/C38vkZ7t", "_blank")}
          />
        </div>
      </div>
    </section>
  );
};

export default WhatYouAchieve;
