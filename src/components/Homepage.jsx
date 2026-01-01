import OrderCourseButton from "./OrderCourseButton";
import HomeImage from "../assets/homeimage.png"

function Homepage() {
    return (

        
        <section id="home-section" className="section orb-container header-padding-top" style={{ paddingBottom: 50}}>

            <div className="section-content-wrapper">

                <div className="home-section-container">
                    <div class="home-section-heading">
                        Start Jouw Eigen <span class="highlight">Winstgevende Recruitment Agency Vanuit Huis</span> En Verdien Tot Wel €3.000 Per Uitzendkracht Passief!
                    </div>
                    <div className="home-image-wrapper"> 
                        <img src={ HomeImage } alt="" />
                    </div>
                    <div className="home-section-subtext">
                        Met mijn bewezen strategie bouw je vanuit huis je eigen recruitmentbedrijf. <span class="highlight">Je hebt geen diploma of hoge investering nodig,</span> en met slechts één kandidaat kun je tot <span class="highlight">€3.000 per maand passief verdienen.</span> Je staat er niet alleen voor - <span class="highlight">je krijgt persoonlijke 1-op-1 coaching en begeleiding</span> om jouw eerste resultaten snel te behalen.
                    </div>
                    <OrderCourseButton
                        onClick={() => window.open("https://form.typeform.com/to/C38vkZ7t", "_blank")}
                    />
                </div>

                
                
                
                
                
            </div>
            {/* <div class="gradient-border"></div> */}
        </section>
        
    )
}

export default Homepage