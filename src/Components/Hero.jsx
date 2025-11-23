// src/Hero.jsx
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const titleLines = [
  "Votre rénovation de A à Z,",
  "sans stress, sans imprévu.",
  "Juste le plaisir du résultat."
];

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const chars = heroRef.current.querySelectorAll(".hero-char");
    const subtitle = heroRef.current.querySelector(".hero-subtitle");
    const cta = heroRef.current.querySelector(".hero-cta");
    const meta = heroRef.current.querySelector(".hero-meta");

    const tl = gsap.timeline();

    tl.fromTo(
      chars,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.02
      }
    )
      .fromTo(
        subtitle,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
        "-=0.2"
      )
      .fromTo(
        cta,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
        "-=0.2"
      )
      .fromTo(
        meta,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, ease: "power3.out" },
        "-=0.2"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="px-4 py-16 md:py-20 lg:py-16 bg-white"
      aria-labelledby="hero-title"
    >
      <div
        className="
          max-w-6xl mx-auto 
          grid 
          gap-12 lg:gap-16 
          items-center
          grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))]
        "
      >
        {/* COLONNE TEXTE */}
        <div className="space-y-6 w-full mx-auto text-center md:text-left md:max-w-none">
          {/* Titre animé */}
          <h1
            id="hero-title"
            className="text-3xl sm:text-4xl md:text-4xl font-medium tracking-tight leading-snug"
          >
            {titleLines.map((line, lineIndex) => (
              <span
                key={lineIndex}
                className="block overflow-hidden"
              >
                {line.split("").map((char, charIndex) => (
                  <span
                    key={charIndex}
                    className="inline-block hero-char"
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          {/* Sous-titre */}
          <p className="hero-subtitle text-base sm:text-lg md:text-base text-slate-700 max-w-2xl mx-auto md:mx-0">
            Vous en avez assez des artisans peu fiables, des délais non tenus
            et des devis qui explosent ? Nous aussi.
          </p>

          {/* CTA + petite note */}
          <div className="space-y-3">
            <button className="hero-cta inline-flex items-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 md:px-5 md:py-2.5 rounded-full bg-blue-900 text-amber-50 text-base sm:text-lg md:text-sm font-medium tracking-wide shadow-md hover:shadow-lg hover:-translate-y-[1px] active:scale-95 transition-all duration-200">
              <span>Discutons de votre projet (gratuitement)</span>
            </button>

            <p className="hero-meta text-sm sm:text-base md:text-sm text-slate-500 max-w-xl mx-auto md:mx-0">
              30% de nos clients viennent à nous parce qu&apos;un autre artisan
              leur a fait peur. Prenons 15 minutes pour voir comment nous
              pouvons vous apporter de la sérénité.
            </p>
          </div>
        </div>

        {/* COLONNE IMAGE / VISUEL */}
        <div className="relative h-64 sm:h-80 md:h-80 rounded-3xl overflow-hidden bg-slate-900/90 w-full">
          {/* 👉 Vidéo */}
          <video
            src="./hero.mov"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />

          {/* Texte overlay */}
          <div className="absolute inset-4 flex flex-col justify-between">
            <div className="text-amber-50 text-xs font-medium tracking-[0.18em] uppercase">
              Rénovation intérieure
            </div>
            <div className="space-y-1 text-amber-50">
              <p className="text-sm font-medium">
                Ambiance chantier, précision & savoir-faire.
              </p>
              <p className="text-xs text-slate-200/80 max-w-xs">
                Une rénovation maîtrisée, visible du premier coup d'œil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;