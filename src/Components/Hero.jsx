// src/Hero.jsx
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";
import SecondaryLink from "./ui/SecondaryLink";


const titleLines = [
  "Rénovation de A à Z,",
  "claire, cadrée, maîtrisée.",
  "Sans stress. Sans surprise."
];

const bullets = [
  "Devis détaillé, étapes définies",
  "Délais cadrés, suivi régulier",
  "Finitions nettes, contrôle qualité"
];

const trustChips = ["Devis transparent", "Suivi chantier", "Finitions soignées"];

function Hero() {
  const heroRef = useRef(null);
  const navigate = useNavigate();


  useEffect(() => {
    if (!heroRef.current) return;

    const chars = heroRef.current.querySelectorAll(".hero-char");
    const groups = heroRef.current.querySelectorAll("[data-hero-group]");
    const media = heroRef.current.querySelector("[data-hero-media]");

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 1) Titre (chars)
    tl.fromTo(
      chars,
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 0.5, stagger: 0.02 }
    );

    // 2) Groupes texte (kicker, bullets, chips, CTA)
    tl.fromTo(
      groups,
      { y: 14, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.45, stagger: 0.12 },
      "-=0.25"
    );

    // 3) Media (vidéo/cadre)
    tl.fromTo(
      media,
      { y: 18, opacity: 0, scale: 0.98 },
      { y: 0, opacity: 1, scale: 1, duration: 0.55 },
      "-=0.35"
    );

    return () => tl.kill();
  }, []);

  return (
    <section
      ref={heroRef}
      className="bg-white px-4 py-14 md:py-20"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* LEFT */}
          <div className="lg:col-span-6">
            {/* Kicker */}
            <p
              data-hero-group
              className="text-xs tracking-[0.18em] uppercase text-slate-500"
            >
              Rénovation intérieure • Paris & Île-de-France
            </p>

            {/* Title */}
            <h1
              id="hero-title"
              className="mt-4 text-4xl sm:text-5xl md:text-5xl font-medium tracking-tight leading-[1.05]"
            >
              {titleLines.map((line, lineIndex) => (
                <span key={lineIndex} className="block overflow-hidden">
                  {line.split("").map((char, charIndex) => (
                    <span key={charIndex} className="inline-block hero-char">
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </span>
              ))}
            </h1>

            {/* Bullets */}
            <div data-hero-group className="mt-6 max-w-xl">
              <ul className="space-y-3 text-base text-slate-700">
                {bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    {/* icon simple (cercle) — tu peux remplacer par une vraie icône */}
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust chips */}
            <div data-hero-group className="mt-6 flex flex-wrap gap-2">
              {trustChips.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTA row */}
           <div data-hero-group className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
  <Button variant="secondary" size="sm">
    Cadrer mon projet (15 min)
  </Button>

  <SecondaryLink
    onClick={() => {
      document.getElementById("realisations")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }}
  >
    Voir les réalisations
  </SecondaryLink>
</div>

            {/* Micro-copy */}
            <p data-hero-group className="mt-3 max-w-xl text-sm text-slate-500">
              Un échange simple pour clarifier budget, délais et priorités — puis on vous
              dit exactement ce qu’on peut faire.
            </p>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-6">
            <div
              data-hero-media
              className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900"
            >
              {/* Vidéo */}
              <video
                src="./hero.mov"
                autoPlay
                loop
                muted
                playsInline
                className="h-[360px] w-full object-cover opacity-90 sm:h-[420px] lg:h-[520px]"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />

              {/* Overlay top */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />

              {/* Floating card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="rounded-2xl bg-white/95 p-4 backdrop-blur">
                  <p className="text-sm font-medium text-slate-900">
                    Chantier cadré, résultat propre.
                  </p>
                  <p className="mt-1 text-xs text-slate-600">
                    Suivi régulier, décisions claires, finitions contrôlées.
                  </p>
                </div>
              </div>

              {/* Tiny label */}
              <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs text-white/90">
                  Rénovation • Intérieur
                </span>
              </div>
            </div>
          </div>
          {/* /RIGHT */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
