import React from "react";
import LatestRealizations from "../LatestRealizations";

import Card from "../ui/Card.jsx";
import { REALIZATIONS } from "../../data/realizations";

function RealisationsPage() {
  return (
    <main className="px-4 py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* HEADER */}
        <header className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">
            Réalisations
          </p>
          <h1 className="text-2xl sm:text-3xl font-medium text-slate-900">
            Quelques chantiers réalisés par Entreprise AZ.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
            Découvrez nos interventions : appartements, maisons, salles de bain,
            cuisines, rénovations complètes et locaux professionnels.
          </p>
        </header>

        {/* GRID DE TOUTES LES RÉALISATIONS */}
        <div
          className="
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {REALIZATIONS.map((item) => (
            <Card
              key={item.id}
              eyebrow={item.category}      // ex : "Salle de bain • Paris 15"
              title={item.title}           // titre du chantier
              description={item.description} // description courte
              image={item.image}           // image du chantier
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default RealisationsPage;
