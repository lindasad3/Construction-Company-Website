import React from "react";
import Hero  from "../Hero";
import Services from "../Services";
import LatestRealizations from "../LatestRealizations";  
import Contact from "../Contact";  
import AvisClientsPage from "./AvisClientsPage";
import ProcessSteps from "../ProcessSteps";
 import StatsSection from "../StatsSection";

function HomePage() {
  return (
    
    <>
      {/* 1. HERO : identité + gros CTA */}
      <Hero />

      {/* 2. BANDE AVANTAGES (comme Maisons Pierre mais version rénovation) */}
      <StatsSection  />

      {/* 3. PREUVES VISUELLES */}
      <LatestRealizations />

      {/* 4. DOMAINES D’INTERVENTION */}
      <Services />

      {/* 5. PROCESS DE CHANTIER */}
      <ProcessSteps />

      {/* 6. AVIS CLIENTS */}
      <AvisClientsPage />

      {/* 7. CONTACT / DEVIS */}
      <Contact />
    </>
  );
}

export default HomePage;
