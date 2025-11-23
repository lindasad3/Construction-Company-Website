import React from "react";

function BlogPage() {
  return (
    <main className="px-4 py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">
            Blog
          </p>
          <h1 className="text-2xl sm:text-3xl font-medium text-slate-900">
            Conseils & inspirations rénovation.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
            Plus tard : des articles sur la rénovation, les matériaux, les erreurs à éviter, etc.
          </p>
        </header>
      </div>
    </main>
  );
}

export default BlogPage;
