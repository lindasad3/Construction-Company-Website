// src/Components/Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import Button from "./ui/Button";

const NAV_LINKS = [
  { name: "Accueil", path: "/" },
  { name: "Réalisations", path: "/réalisations" },
  { name: "Services", path: "/services" },
  { name: "À propos", path: "/à-propos" },
  { name: "Blog", path: "/blog" },
  { name: "Avis clients", path: "/avis-clients" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const panelRef = useRef(null);
  const tlRef = useRef(null);

  // Timeline GSAP pour le panneau mobile
  useEffect(() => {
    if (!panelRef.current) return;

    tlRef.current = gsap.timeline({ paused: true });

    tlRef.current.fromTo(
      panelRef.current,
      { x: "100%", opacity: 0 },
      { x: 0, opacity: 1, duration: 0.35, ease: "power3.out" }
    );
  }, []);

  // Jouer / inverser selon isOpen
  useEffect(() => {
    if (!tlRef.current) return;
    if (isOpen) {
      tlRef.current.play();
    } else {
      tlRef.current.reverse();
    }
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  // Styles des liens desktop
  const desktopLinkClasses = ({ isActive }) =>
    `
      px-3 py-1.5 
      rounded-full 
      text-[10px] 
      font-medium 
      tracking-[0.18em] 
      uppercase 
      transition-all 
      duration-200
      ${
        isActive
          ? "bg-slate-900 text-white shadow-sm"
          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
      }
    `;

  // Styles des liens mobile
  const mobileLinkClasses = ({ isActive }) =>
    `
      text-sm 
      font-medium 
      tracking-[0.10em] 
      uppercase 
      transition-colors 
      duration-200
      ${
        isActive
          ? "text-slate-900"
          : "text-slate-600 hover:text-slate-900"
      }
    `;

  return (
    <>
      {/* BARRE PRINCIPALE */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-6">
          {/* LOGO + NOM ENTREPRISE */}
          <div className="flex items-center gap-3">
            {/* Si tu veux ajouter ton logo image plus tard */}
            {/* <img
              src="/AZ.png"
              alt="Logo Entreprise AZ"
              className="h-7 w-auto object-contain"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            /> */}
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-sm tracking-wide text-slate-900">
                Entreprise AZ
              </span>
              <span className="text-[11px] text-slate-500 uppercase tracking-[0.20em]">
                Rénovation &amp; Maçonnerie
              </span>
            </div>
          </div>

          {/* LIENS + CTA DESKTOP */}
          <div className="hidden lg:flex items-center gap-4">
            <nav
              className="flex items-center gap-1.5"
              aria-label="Navigation principale"
            >
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={desktopLinkClasses}
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <NavLink to="/contact">
              <Button variant="secondary" size="sm">
                Demander un devis
              </Button>
            </NavLink>
          </div>

          {/* BOUTON BURGER MOBILE / TABLETTE */}
          <button
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 bg-white shadow-sm"
            onClick={() => setIsOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <span className="sr-only">Ouvrir le menu</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-slate-900 rounded"></span>
              <span className="block h-0.5 w-5 bg-slate-900 rounded"></span>
              <span className="block h-0.5 w-5 bg-slate-900 rounded"></span>
            </div>
          </button>
        </div>
      </header>

      {/* OVERLAY + PANNEAU MOBILE */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Fond sombre */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* PANNEAU GLISSANT */}
        <div
          ref={panelRef}
          className="absolute top-0 right-0 h-full w-72 bg-white shadow-2xl p-6 flex flex-col gap-8"
        >
          {/* Header du panneau */}
          <div className="flex items-center justify-between">
            <span className="font-semibold text-base tracking-wide text-slate-900">
              Menu
            </span>
            <button
              className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-300"
              onClick={() => setIsOpen(false)}
              aria-label="Fermer le menu"
            >
              ✕
            </button>
          </div>

          {/* Liens mobile */}
          <nav
            className="flex flex-col gap-4 mt-4"
            aria-label="Navigation mobile"
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={handleLinkClick}
                className={mobileLinkClasses}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA mobile */}
          <div className="mt-auto">
            <NavLink to="/contact" onClick={handleLinkClick}>
              <Button
                variant="secondary"
                size="md"
                className="w-full justify-center"
              >
                Demander un devis
              </Button>
            </NavLink>
            <p className="mt-3 text-[11px] text-slate-400">
              Intervention en Île-de-France · Appartements, maisons, locaux pros
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
