import React from "react";
import useInView from '../hooks/useInView'; 

const Testimonials = () => {

    const [testimonialRef, testimonialInView] = useInView({ threshold: 0.05 });

    return (
        <section id="testimonials-section" className="section component-padding-top" >

            <div className="section-content-wrapper">
                <div ref={ testimonialRef } className={`testimonials-container ${testimonialInView ? 'animate-in' : 'animate-out'}`}>
                    <div className="default-heading"> Testimonials</div>
                    <div className="gradient-line"></div>
                    <div className="subtitle">Wat anderen zeggen.</div>

                    <div className="user-testimonial-container">
                        <div className="user-testimonial">
                            <div className="testimonial-text"> "Dankzij de 1-op-1 begeleiding had ik in twee weken al vijf gesprekken met opdrachtgevers. Ik had dit nooit zo snel alleen kunnen berijken."</div>
                            <div className="testimonial-name"> — Dave</div>
                        </div>

                        <div className="user-testimonial">
                            <div className="testimonial-text"> "Dankzij de 1-op-1 begeleiding had ik in twee weken al vijf gesprekken met opdrachtgevers. Ik had dit nooit zo snel alleen kunnen berijken."</div>
                            <div className="testimonial-name"> — Dave</div>
                        </div>

                        <div className="user-testimonial">
                            <div className="testimonial-text"> "Dankzij de 1-op-1 begeleiding had ik in twee weken al vijf gesprekken met opdrachtgevers. Ik had dit nooit zo snel alleen kunnen berijken."</div>
                            <div className="testimonial-name"> — Dave</div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </section>
    );

    
};

export default Testimonials;