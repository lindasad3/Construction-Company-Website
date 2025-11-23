// src/Components/ProcessSteps.jsx
import React from "react";

const STEPS = [
  {
    number: "1",
    title: "Prise de contact & visite",
    description:
      "Vous nous expliquez votre projet, nous visitons le lieu pour comprendre les contraintes.",
  },
  {
    number: "2",
    title: "Devis & planning",
    description:
      "Vous recevez un devis détaillé, avec un planning réaliste des travaux.",
  },
  {
    number: "3",
    title: "Travaux & suivi de chantier",
    description:
      "Nous coordonnons les corps de métier et vous tenez informé à chaque étape.",
  },
  {
    number: "4",
    title: "Réception & finitions",
    description:
      "Nous vérifions les détails avec vous, et livrons un chantier propre et terminé.",
  },
];

function ProcessSteps() {
  return (
    <section
      className="px-4 py-16 lg:py-20 bg-slate-50"
      aria-labelledby="process-title"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        {/* HEADER */}
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <p
            id="process-title"
            className="text-xs sm:text-sm font-semibold tracking-[0.20em] uppercase text-slate-500"
          >
            Comment se passe un chantier ?
          </p>
          <h2 className="text-xl sm:text-2xl font-medium text-slate-900">
            Un déroulé clair, de la première visite à la remise des clés.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Notre objectif : que vous sachiez toujours où en est votre projet,
            sans surprise ni zones floues.
          </p>
        </div>

        {/* ÉTAPES */}
        <div className="grid gap-6 md:grid-cols-4">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col gap-2"
            >
              <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-slate-900 text-amber-300 text-sm font-semibold">
                {step.number}
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSteps;
