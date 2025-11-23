// src/Components/Services.jsx
import React from "react";
import Card from "./ui/Card";
import { SERVICES } from "../data/services";
import Button from "./ui/Button";

function Services() {
  return (
    <section
      className="px-4 py-16 lg:py-20 bg-white"
      aria-labelledby="services-title"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* HEADER DE SECTION UNIFIÉ */}
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <p
            id="services-title"
            className="text-xs sm:text-sm font-semibold tracking-[0.20em] uppercase text-slate-500"
          >
            Nos services
          </p>
          <h2 className="text-xl sm:text-2xl font-medium text-slate-900">
            Des travaux clairs, précis et réalisés dans les délais.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            De la salle de bain au mur porteur, en passant par le carrelage
            et la pose de cuisine, nous réalisons vos travaux sans mauvaises surprises.
          </p>
        </div>

        {/* GRID DES CARTES */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Card
              key={index}
              eyebrow={service.eyebrow}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>

        {/* CTA DE FIN */}
        <div className="pt-4 border-t border-slate-200 mt-6 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-slate-600 max-w-xl">
            Vous avez un projet mais vous ne savez pas par où commencer ?
            Expliquez-nous votre idée : nous vous donnons un plan simple et un devis clair.
          </p>

          <Button variant="secondary" size="md">
            Discutons de votre projet
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Services;
