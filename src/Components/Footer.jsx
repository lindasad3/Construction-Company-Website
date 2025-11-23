// src/Components/Footer.jsx
import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          
          {/* GAUCHE : LOGO + NOM ENTREPRISE */}
          <div className="flex items-center gap-3">
            <img
              src="/AZ.png"
              alt="Logo Entreprise AZ"
              className="h-8 w-auto object-contain"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-sm tracking-wide text-slate-900">
                Entreprise AZ
              </span>
              <span className="text-[11px] text-slate-500 uppercase tracking-[0.22em]">
                Rénovation & Aménagement
              </span>
            </div>
          </div>

          {/* DROITE : LIENS */}
          <nav className="flex flex-wrap gap-4 text-xs text-slate-500 md:text-right">
            <NavLink to="/" className="hover:text-slate-900 transition-colors">
              Accueil
            </NavLink>
            <NavLink to="/réalisations" className="hover:text-slate-900 transition-colors">
              Réalisations
            </NavLink>
            <NavLink to="/services" className="hover:text-slate-900 transition-colors">
              Services
            </NavLink>
            <NavLink to="/contact" className="hover:text-slate-900 transition-colors">
              Contact
            </NavLink>
          </nav>
        </div>

        {/* BASELINE COPYRIGHT */}
        <div className="mt-6 text-[11px] text-slate-400 md:text-right">
          © {new Date().getFullYear()} Entreprise AZ — Réalisé par{" "}
          <span className="text-slate-600">Lynda Sadoudi</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
