import OrderCourseButton from "./OrderCourseButton";
import useInView from '../hooks/useInView'; 


const WhyPickUs = () => {
    
    const [reasonRef, reasonInView] = useInView({ threshold: 0.15 });
    const [resultsRef, resultsInView] = useInView({ threshold: 0.15 });



    return (

        

        <section id="why-pick-us" className="section orb-container component-padding-top" >

            <div className="section-content-wrapper" style={{ gap: "20px", flexDirection: "column" }}>


                <div ref={ reasonRef } className={`reason-container ${reasonInView ? 'animate-in' : 'animate-out'}`}>
                    <div className="default-heading">
                        Waarom kiezen voor een recruitment agency?
                    </div>
                    <div className="gradient-line"></div>

                    <div className="reason-item-container">

                        

                            <div className="reason-item">
                                <span className="item-icon">
                                    <i className="fa-solid fa-tags"></i>
                                </span>
                                <div className="item-header">
                                    <h4>Lage investering</h4>
                                </div>
                                <p>Je hebt alleen een laptop en internet nodig.</p>
                            </div>

                            <div className="reason-item">
                                <span className="item-icon">
                                    <i className="fa-solid fa-chart-line"></i>
                                </span>
                                <div className="item-header">
                                    <h4>Hoog rendement</h4>
                                </div>
                                <p>Één kandidaat kan je tot €3.000 per maand opleveren.</p>
                            </div>

                            <div className="reason-item">
                                <span className="item-icon">
                                    <i className="fa-solid fa-couch"></i>
                                </span>
                                <div className="item-header">
                                    <h4>Passief inkomen</h4>
                                </div>
                                <p>Plaats kandidaten één keer en ontvang elke maand opnieuw je marge.</p>
                            </div>

                            <div className="reason-item">
                                <span className="item-icon">
                                    <i className="fa-solid fa-user-group"></i>
                                </span>
                                <div className="item-header">
                                    <h4>1-op-1 coaching</h4>
                                </div>
                                <p>Persoonlijke begeleiding bij elke stap.</p>
                            </div>

                            <div className="reason-item">
                                <span className="item-icon">
                                    <i className="fa-solid fa-calendar-days"></i>
                                </span>
                                <div className="item-header">
                                    <h4>Flexibel</h4>
                                </div>
                                <p>Werk parttime naast je baan of fulltime voor snelle groei.</p>
                            </div>

                            <div className="reason-item">
                                <span className="item-icon">
                                    <i className="fa-solid fa-graduation-cap"></i>
                                </span>
                                <div className="item-header">
                                    <h4>Geen diploma nodig</h4>
                                </div>
                                <p>Alles wat je moet weten leer je hier.</p>
                            </div>

                            </div>
                </div>
                


                    <div 
                    ref={resultsRef} 
                    className={` component-padding-top results-section ${resultsInView ? 'animate-in' : 'animate-out'}`}>
                    <div className="results-grid">
                        {/* LEFT SIDE – RESULTS */}
                        <div className="results-card">
                            <h2 className="card-header">Resultaten & bewijs</h2>
                            <div className="gradient-line"></div>
                        <ul>
                            <li>
                            Een cursist die ik begeleidde had in de eerste twee weken al gesprekken met 5 opdrachtgevers.
                            </li>
                            <li>
                            Mijn eigen bureau bereikte in het eerste jaar tientallen opdrachtgevers en ruim 50 sollicitatiegesprekken voor kandidaten.
                            </li>
                            <li>
                            Met mijn 1-op-1 coaching help ik jou dezelfde stappen te zetten – direct, praktisch en zonder omwegen.
                            </li>
                        </ul>
                        </div>

                        {/* RIGHT SIDE – BENEFITS */}
                        <div className="results-card accent">
                            <h2 className="card-header">Wat ontvang ik?</h2>
                            <div className="gradient-line"></div>
                        <ul>
                            <li>Een volledig traject dat je stap voor stap begeleidt.</li>
                            <li>Alle kennis over sales, recruitment, kandidaten, opdrachtgevers en wetgeving.</li>
                            <li>Praktische scripts, strategieën en voorbeelden die je direct kunt toepassen.</li>
                            <li>Persoonlijke 1-op-1 coaching en begeleiding bij je eerste stappen.</li>
                            <li>Toegang tot mijn community van gelijkgestemden.</li>
                        </ul>
                        
                        </div>
                        
                    </div>
                    
                </div>
                <div className="why-us-button-container">
                    <OrderCourseButton
                         onClick={() => window.open("https://form.typeform.com/to/C38vkZ7t", "_blank")}
                    />  
                </div>
                

                    
                        
            </div>
            

        </section>
    )
}

export default WhyPickUs