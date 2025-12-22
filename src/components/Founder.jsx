import React from 'react';
import useInView from '../hooks/useInView'; 

// Image Imports
import bg from "../assets/randomImage.png";
import founder from "../assets/founderAmirWithBg.jpg";


const Founder = () => {


      const [founderRef, inView] = useInView({ threshold: 0.15 }); 

    return (
        <section id="founder-section" className="section var2-orb-container component-padding-top"  >
            <div className="section-content-wrapper">
                
                <div className={`founder-section-container ${inView ? 'animate-in' : 'animate-out'}`} ref={founderRef}>
                    <div className="text-container">
                        <div className="founder-title">
                            Van Profvoetballer Naar Succesvol Ondernemer
                        </div>
                        <div className="founder-subtext">Ik ben Amir Kaddouri. Na mijn jeugd in het profvoetbal koos ik in 2020 definitief voor ondernemerschap. Sindsdien heb ik meerdere bedrijven opgebouwd en mijn eigen recruitment agency opgericht. Al in het eerste jaar bereikte ik tientallen opdrachtgevers en organiseerde ik meer dan 50 sollicitatiegesprekken voor kandidaten. Nu deel ik mijn bewezen strategie, zodat ook jij vanuit huis een winstgevende recruitment agency kunt starten en dezelfde resultaten kunt behalen zonder hoge investeringen, zonder diploma en mét 1-op-1 begeleiding, zodat je nooit vastloopt.</div>
                    </div>
                    
                    <div className="founder-image-container">
                        <img 
                            src={founder} 
                            alt="Random dude - Amir Kaddouri" 
                            className={`founder-image ${inView ? 'animate-in' : 'animate-out'}`}
                        />
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Founder;