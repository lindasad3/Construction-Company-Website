import React from "react";

function Card({ eyebrow, title, description, image }) {
  return (
    <article className="group relative rounded-3xl overflow-hidden bg-slate-900 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      
      {/* IMAGE */}
      <div className="h-56 sm:h-64 md:h-72 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* OVERLAY GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none" />

      {/* TEXTE SUPERPOSÉ */}
      <div className="absolute bottom-0 p-5 sm:p-6 space-y-1 text-amber-50">
        {eyebrow && (
          <div className="text-xs font-semibold tracking-[0.18em] uppercase opacity-90">
            {eyebrow}
          </div>
        )}

        <h3 className="text-lg sm:text-xl font-semibold">
          {title}
        </h3>

        {description && (
          <p className="text-sm text-slate-100/90 max-w-xs leading-snug">
            {description}
          </p>
        )}
      </div>
    </article>
  );
}

export default Card;
