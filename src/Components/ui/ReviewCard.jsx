import React from "react";

function ReviewCard({ name, city, text, rating, image, source }) {
  return (
    <div className="p-5 rounded-2xl border border-slate-200 bg-white w-80 shadow-sm hover:shadow-md transition-shadow shrink-0">
      {/* Header : avatar + nom + ville + source */}
      <div className="flex items-center gap-3 mb-3">
        <div className="h-10 w-10 rounded-full overflow-hidden bg-slate-200 flex items-center justify-center text-xs text-slate-600">
          {image ? (
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          ) : (
            <span>{name.charAt(0)}</span>
          )}
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-medium text-slate-900">
            {name}
          </span>
          <span className="text-xs text-slate-500">{city}</span>
          {source && (
            <span className="mt-1 inline-flex items-center gap-1 text-[11px] text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
              {source === "Google" && "★"}
              {source === "Google" ? "Avis Google" : "Avis client"}
            </span>
          )}
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-1 text-amber-400 text-sm mb-2">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>

      {/* Texte */}
      <p className="text-sm text-slate-700 leading-relaxed">
        “{text}”
      </p>
    </div>
  );
}

export default ReviewCard;
