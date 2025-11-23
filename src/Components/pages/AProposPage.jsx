// src/Components/pages/AProposPage.jsx
import React from "react";
import Button from "../ui/Button";
import StatsSection from "../StatsSection";
import Services from "../Services";
import AvisClientsPage from "./AvisClientsPage";

function AProposPage() {
  return (
    <main className="px-4 py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* HERO / INTRO AGENCE */}
        <section className="space-y-6 text-center max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">
            À propos d&apos;Entreprise AZ
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 leading-tight">
            Des rénovations qui transforment{" "}
            <span className="text-blue-900">votre espace</span> et{" "}
            <span className="text-blue-900">votre quotidien</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Nous redonnons vie aux appartements, maisons et locaux d&apos;Île-de-France
            avec une méthode claire, des délais tenus et un seul objectif : votre sérénité.
          </p>
        </section>

        {/* SECTION 1 — STATS (on réutilise notre composant) */}
        <StatsSection />

        {/* SECTION 2 — QUI NOUS SOMMES + MÉTHODE */}
        <section className="space-y-12">
          {/* Qui nous sommes */}
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-medium text-slate-900">
                Une entreprise de bâtiment pensée pour les projets concrets.
              </h2>
              <p className="text-base text-slate-600">
                Nous intervenons sur des rénovations d&apos;appartements, de maisons
                et de locaux professionnels. Notre force : traduire vos idées
                (refaire une salle de bain, ouvrir un mur, moderniser un commerce)
                en un chantier réalisable, cadré et suivi.
              </p>
              <p className="text-base text-slate-600">
                Habitués aux contraintes terrain (copropriétés, délais serrés,
                locaux occupés), nous préférons dire ce qui est vraiment possible,
                proposer des solutions et tenir ce que l&apos;on annonce.
              </p>
            </div>

            {/* Mini bloc points clés */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
              <h3 className="text-sm font-semibold text-slate-900">
                Ce que nos clients apprécient :
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Des devis clairs, expliqués en langage simple.</li>
                <li>• Un seul interlocuteur pour suivre tout le chantier.</li>
                <li>• Des délais annoncés et respectés autant que possible.</li>
                <li>• Des chantiers propres, protégés et organisés.</li>
              </ul>
            </div>
          </div>

          {/* Notre méthode en 4 étapes (simplifiée) */}
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-xl sm:text-2xl font-medium text-slate-900">
                Notre méthode en 4 étapes
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
                Une façon de travailler inspirée des méthodes d&apos;agence :
                cadrage, transparence, suivi et livraison propre.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  num: "01",
                  title: "Écoute & conseil",
                  text: "Visite gratuite pour comprendre vos besoins, contraintes et priorités.",
                },
                {
                  num: "02",
                  title: "Devis transparent",
                  text: "Devis détaillé, options claires, aucun poste “flou” ou surprise cachée.",
                },
                {
                  num: "03",
                  title: "Chantier organisé",
                  text: "Planning structuré, coordination des corps de métier, chantier suivi.",
                },
                {
                  num: "04",
                  title: "Livraison & suivi",
                  text: "Finitions soignées, remise des clés et disponibilité après le chantier.",
                },
              ].map((step) => (
                <div key={step.num} className="text-center space-y-4">
                  <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto">
                    {step.num}
                  </div>
                  <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — NOS DOMAINES (on réutilise Services) */}
        <section className="space-y-4">
          <div className="space-y-2 text-center">
            <h2 className="text-xl sm:text-2xl font-medium text-slate-900">
              Nos domaines d&apos;intervention
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Rénovation complète, salle de bain, cuisine, murs porteurs, locaux
              professionnels : découvrez en détail comment nous pouvons intervenir.
            </p>
          </div>

          {/* On réutilise le composant Services existant */}
          <Services />
        </section>

        {/* SECTION 4 — ANCRAGE RÉEL / LOCAL */}
        <section className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-medium text-slate-900">
              Une entreprise ancrée dans le réel.
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Nous savons travailler dans des logements occupés, gérer les
              contraintes de copropriétés, intervenir dans des locaux
              professionnels sans tout bloquer. Chaque chantier est préparé en
              tenant compte de votre quotidien.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-sm text-slate-600 space-y-2">
            <p>
              <span className="font-semibold text-slate-900">
                Zones d&apos;intervention :
              </span>{" "}
              principalement Paris, petite couronne et Île-de-France, avec étude
              possible pour des projets spécifiques.
            </p>
            <p className="text-xs text-slate-500">
              Pour les projets plus éloignés ou de grande ampleur, nous évaluons
              chaque demande au cas par cas.
            </p>
          </div>
        </section>

        {/* SECTION 5 — TÉMOIGNAGES (on réutilise AvisClientsPage) */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-xl sm:text-2xl font-medium text-slate-900">
              Ce que disent nos clients
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Leur retour est notre meilleure carte de visite.
            </p>
          </div>

          {/* On réutilise ton composant existant */}
          <AvisClientsPage />
        </section>

        {/* SECTION 6 — CTA FINAL */}
        <section className="bg-slate-900 text-amber-50 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-medium">
              Prêt à discuter de votre projet ?
            </h2>
            <p className="text-amber-100 text-base sm:text-lg">
              Première visite gratuite et sans engagement. Nous écoutons votre
              projet et vous donnons un avis d&apos;expert sur les travaux à prévoir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="secondary" size="lg">
                📞 01 23 45 67 89
              </Button>
              <Button variant="primary" size="lg">
                ✉️ Demander un devis
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AProposPage;
