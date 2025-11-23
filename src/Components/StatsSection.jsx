// src/Components/StatsSection.jsx
import React from "react";

const STATS = [
  {
    label: "Chantiers livrés",
    value: "120+",
    detail: "Appartements, maisons, commerces et restaurants rénovés.",
  },
  {
    label: "Satisfaction client",
    value: "97%",
    detail: "De nos clients recommanderaient l’entreprise à un proche.",
  },
  {
    label: "Avis moyens",
    value: "4,8/5",
    detail: "Basé sur les retours de clients en Île-de-France.",
  },
  {
    label: "Années d’expérience",
    value: "10+",
    detail: "Dans la rénovation intérieure et la maçonnerie.",
  },
];

function StatsSection() {
  return (
    <section
      className="px-4 py-16 bg-slate-50"
      aria-labelledby="stats-title"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        {/* HEADER */}
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <p
            id="stats-title"
            className="text-xs sm:text-sm font-semibold tracking-[0.20em] uppercase text-slate-500"
          >
            Statistiques & preuves sociales
          </p>
          <h2 className="text-xl sm:text-2xl font-medium text-slate-900">
            Une entreprise de bâtiment choisie pour sa fiabilité.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Quelques chiffres pour vous aider à juger notre sérieux avant même
            de nous rencontrer.
          </p>
        </div>

        {/* GRID DES STATS */}
        <div className="grid gap-6 md:grid-cols-4">
          {STATS.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col gap-2 text-center md:text-left"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {item.label}
              </p>
              <p className="text-2xl sm:text-3xl font-semibold text-blue-900">
                {item.value}
              </p>
              <p className="text-xs sm:text-sm text-slate-600">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
