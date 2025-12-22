import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import useInView from '../hooks/useInView'; 


const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <div className={`question ${isOpen ? "open" : ""}`}>
      <div className="question-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="question-line-container">
          <h3>{question}</h3>
          {/* <div className="gradient-line"></div> */}
        </div>

        <div className="question-arrow-wrapper">
          <div
            className="question-arrow"
            style={{
              transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          >
            <ChevronRight size={20} />
          </div>
        </div>
      </div>

      <div className={`question-text ${isOpen ? "open" : ""}`}>
        {answer}
      </div>
    </div>
  );
};

const FAQ = () => {
  const questions = [
    { question: "Heb ik een diploma nodig?", answer: "Nee, je leert alles in de cursus. Je hoeft geen speciale vooropleiding te hebben." },
    { question: "Hoeveel kost het om te starten?", answer: "Je hebt alleen een laptop, internet en deze cursus nodig. Geen hoge investeringen." },
    { question: "Hoe snel kan ik resultaat zien?", answer: "Dat verschilt per persoon. Eén cursist had binnen 2 weken al gesprekken met 5 opdrachtgevers." },
    { question: "Krijg ik persoonlijke begeleiding?", answer: "Ja, je krijgt 1-op-1 coaching en begeleiding zodat je nooit vastloopt." },
    { question: "Moet ik extra certificaten halen om te kunnen starten?", answer: "Nee. Alle wettelijke verplichtingen, regels en stappen worden in de cursus behandeld." },
    { question: "Kan ik dit traject volgen naast mijn huidige baan of studie?", answer: "Ja. Veel deelnemers starten parttime, met 5–10 uur per week. Je bepaalt zelf je tempo." },
    { question: "Hoe verdien je €3.000 per maand per kandidaat?", answer: "Wanneer je een kandidaat plaatst bij een opdrachtgever, ontvang je maandelijks een marge op hun loon." },
    { question: "Wat als ik geen ervaring heb met sales of recruitment?", answer: "Geen probleem. In de cursus leer je alle verkooptechnieken, wervingsstrategieën en gespreksscripts die je direct kunt toepassen." },
    { question: "Hoeveel opdrachtgevers heb ik nodig om winstgevend te zijn?", answer: "Met één plaatsing kun je al winstgevend zijn. Meer plaatsingen = meer terugkerende maandinkomsten." },
    { question: "Kan ik dit ook doen zonder netwerk of bestaande contacten?", answer: "Ja. Je leert precies hoe je opdrachtgevers en kandidaten vindt, ook als je nog geen netwerk hebt." },
    { question: "Moet ik ingeschreven staan bij de KvK?", answer: "Ja, uiteindelijk wel. In de cursus leg ik stap voor stap uit hoe je dat doet en waar je op moet letten." },
    { question: "Is dit traject geschikt voor mijn leeftijd?", answer: "Ja. Leeftijd speelt geen rol. Of je 20 of 50 bent, iedereen kan hiermee starten." },
    { question: "Wat als ik weinig tijd heb?", answer: "De cursus is praktisch en to-the-point. Met enkele uren per week kun je al concrete stappen zetten." },
    { question: "Wat krijg ik precies bij dit traject?", answer: "Een compleet stappenplan, 1-op-1 coaching, community-toegang en alle tools/templates." },
    { question: "Wat gebeurt er na afloop van de cursus?", answer: "Je houdt blijvend toegang tot de materialen en krijgt ondersteuning via de community." },
    { question: "Wat maakt dit traject anders dan andere opleidingen?", answer: "Dit is geen theoretische opleiding, maar een praktisch stappenplan gebaseerd op bewezen strategie." },
    { question: "Houd ik toegang en ondersteuning na afronding?", answer: "Je behoudt toegang tot de materialen. Doorlopende coaching/support kan je uitbreiden." },
    { question: "Wat als een plaatsing stopt?", answer: "Dan stopt de marge op die kandidaat. In de cursus leer je pipeline-management en opvolgstrategieën." },
  ];

  // Divide the FAQ into 3 pages dynamically
  const itemsPerPage = Math.ceil(questions.length / 3);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentQuestions = questions.slice(startIndex, startIndex + itemsPerPage);
  const [faqRef, faqInView] = useInView({ threshold: 0.05 });

  return (
    <section id="FAQ-section" className="section component-padding-top" >
       <div
          ref={faqRef}
          className={`section-content-wrapper FAQ-container ${
            faqInView ? 'animate-in' : 'animate-out'
          }`}
          style={{ flexDirection: 'column' }}
        >
        <div className="FAQ-header">
          <h2 className="default-heading">Veelgestelde vragen</h2>
          <div className="gradient-line" style={{ marginBottom: "20px" }}></div>
        </div>

        {/* Questions */}
        <div className="question-container single-column">
          {currentQuestions.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="faq-pagination">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft size={18} /> Vorige
          </button>
          <span>Pagina {currentPage} van 3</span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, 3))}
            disabled={currentPage === 3}
          >
            Volgende <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
