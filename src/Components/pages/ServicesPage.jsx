import React from "react";
 import Card from "../ui/Card.jsx";
import { SERVICES } from "../../data/services";
function ServicesPage() {
  return (
    <main className="px-4 py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">
            Services
          </p>
          <h1 className="text-2xl sm:text-3xl font-medium text-slate-900">
            Tous nos services de rénovation & aménagement.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
            De la démolition aux finitions, découvrez ce que nous réalisons au
            quotidien pour nos clients en Île-de-France.
          </p>
        </header>
  <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Card
              key={index}
              eyebrow={service.eyebrow}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default ServicesPage;
