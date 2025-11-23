import React from "react";
import Button from "./ui/Button";

function Contact() {
  return (
    <section
      className="px-4 py-16 lg:py-20 bg-white"
      aria-labelledby="contact-title"
    >
      <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-start">

        {/* === TEXTE / INFO === */}
        <div className="space-y-6">
          <h2
            id="contact-title"
            className="text-sm font-semibold tracking-[0.22em] uppercase text-slate-500"
          >
            Contact
          </h2>

          <p className="text-2xl sm:text-3xl font-medium text-slate-900 leading-snug">
            Un projet, une rénovation, une question ?  
            <br /> Parlons-en ensemble.
          </p>

          <p className="text-sm sm:text-base text-slate-600 max-w-md">
            Nous répondons rapidement pour vous aider à comprendre votre besoin,
            estimer les coûts, et planifier une visite si nécessaire.
          </p>

          
          <div className="pt-4">
            <Button variant="secondary" size="md">
              Appeler maintenant
            </Button>
          </div>
        </div>

        {/* === FORMULAIRE === */}
        <form
          className="bg-slate-100 p-6 sm:p-8 rounded-2xl shadow-sm space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Nom */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium text-slate-800">
              Nom complet
            </label>
            <input
              id="name"
              type="text"
              className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 bg-white"
              placeholder="Votre nom"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium text-slate-800">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 bg-white"
              placeholder="votremail@example.com"
              required
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-sm font-medium text-slate-800">
              Message
            </label>
            <textarea
              id="message"
              className="p-3 h-28 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 bg-white resize-none"
              placeholder="Expliquez votre projet en quelques lignes"
              required
            ></textarea>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <Button variant="primary" size="md" type="submit" className="w-full">
              Envoyer la demande
            </Button>
          </div>
        </form>

      </div>
    </section>
  );
}

export default Contact;
