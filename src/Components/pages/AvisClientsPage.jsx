import React from "react";
import ReviewCard from "../ui/ReviewCard";
import { REVIEWS, GOOGLE_RATING }  from "../../data/reviews";   

function AvisClients() {
  return (
    <section
      className="px-4 py-16 lg:py-20 bg-white"
      aria-labelledby="reviews-title"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* TITRE + NOTE GOOGLE */}
        <div className="text-center space-y-3">
          <h2
            id="reviews-title"
            className="text-sm font-semibold tracking-[0.22em] uppercase text-slate-500"
          >
            Avis clients
          </h2>
          <p className="text-xl sm:text-2xl font-medium text-slate-900">
            Ils nous ont fait confiance.
          </p>

          {/* Badge Google */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full">
            <span className="text-amber-500">★</span>
            <span>
              Note Google{" "}
              <span className="font-semibold">
                {GOOGLE_RATING.value.toFixed(1)}/5
              </span>{" "}
              · {GOOGLE_RATING.count} avis
            </span>
          </div>
        </div>

        {/* CAROUSEL horizontal */}
        <div className="flex flex-nowrap overflow-x-auto space-x-4 p-2">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AvisClients;
