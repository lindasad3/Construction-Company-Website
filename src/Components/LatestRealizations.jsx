// src/Components/LatestRealizations.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { REALIZATIONS } from "../data/realizations";
import Card from "./ui/Card";
import Button from "./ui/Button";

function LatestRealizations() {
  const featured = REALIZATIONS; // plus tard: REALIZATIONS.filter(r => r.featured)

  return (
    <section
      className="px-4 py-16 lg:py-20 bg-white"
      aria-labelledby="latest-realizations-title"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        {/* HEADER */}
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <p
            id="latest-realizations-title"
            className="text-xs sm:text-sm font-semibold tracking-[0.20em] uppercase text-slate-500"
          >
            Dernières réalisations
          </p>
          <h2 className="text-xl sm:text-2xl font-medium text-slate-900">
            Quelques chantiers récemment terminés.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Appartements, salles de bain, cuisines et locaux professionnels :
            un aperçu de nos travaux récents en Île-de-France.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative">
          {/* Fade gauche */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white via-white/90 to-transparent" />
          {/* Fade droite */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white via-white/90 to-transparent" />

          <div
            className="
              flex 
              gap-4 
              overflow-x-auto 
              pb-2
              pt-1
              scroll-smooth
              snap-x 
              snap-mandatory
              [-webkit-overflow-scrolling:touch]
            "
          >
            {featured.map((item) => (
              <div
                key={item.id}
                className="
                  snap-start
                  min-w-[260px] 
                  sm:min-w-[280px] 
                  md:min-w-[300px]
                  flex-shrink-0
                "
              >
                <Card
                  eyebrow={item.category}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4 border-t border-slate-200 mt-2 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-slate-600 max-w-md">
            Vous souhaitez voir d’autres chantiers (appartements, maisons, locaux pros) ?
          </p>

          <NavLink to="/réalisations">
            <Button variant="secondary" size="md">
              Découvrir toutes nos réalisations
            </Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default LatestRealizations;
