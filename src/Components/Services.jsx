import React from "react";
import Card from "./ui/Card";
import { SERVICES } from "../data/services";
 
function Services() {
  return (
    <section
      className="px-4 py-12 lg:py-16 bg-slate-50"
      aria-labelledby="services-title"
    >
      <div className="max-w-6xl mx-auto space-y-12">

        {/* ===========================
            SECTION HEADER (titre)
        ============================ */}
        <div className="max-w-2xl mx-auto text-center">

          {/* Eyebrow */}
          <h2
            id="services-title"
            className="text-sm font-semibold tracking-[0.20em] uppercase text-slate-500"
          >
            Nos services
          </h2>

          {/* Grand titre */}
          <p className="mt-2 text-xl sm:text-2xl font-medium text-slate-900">
            Des travaux clairs, précis et réalisés dans les délais.
          </p>

          {/* Description */}
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            De la salle de bain au mur porteur, en passant par le carrelage
            et la pose de cuisine, nous réalisons vos travaux sans mauvaises surprises.
          </p>

        </div>

        {/* ===========================
            GRID DES CARTES SERVICES
        ============================ */}
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

        {/* ===========================
            CTA DE FIN DE SECTION
        ============================ */}
        <div className="pt-4 border-t border-slate-200 mt-6 flex flex-col items-center gap-4 text-center">

          <p className="text-sm text-slate-600 max-w-xl">
            Vous avez un projet mais vous ne savez pas par où commencer ?
            Expliquez-nous votre idée : nous vous donnons un plan simple et un devis clair.
          </p>

          <button
            className="
              inline-flex items-center gap-2 
              px-5 py-2.5 
              rounded-full bg-slate-900 text-amber-50 
              text-sm font-medium tracking-wide
              shadow-md hover:shadow-lg 
              hover:-translate-y-[1px] active:scale-95 
              transition-all duration-200
            "
          >
            Discutons de votre projet
          </button>

        </div>

      </div>
    </section>
  );
}

export default Services;