import React from "react";

export function LegalPage({ title }: { title: string }) {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-6 lg:px-8">
      <h1 className="text-4xl font-serif mb-8 text-gold-600">{title}</h1>
      <div className="prose prose-invert prose-gold max-w-none prose-p:leading-relaxed prose-headings:font-serif">
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
        <h2>1. Introduction</h2>
        <p>
          This is a standard template for {title}. Please replace this content
          with your actual legal documentation tailored to The Lavender Planners.
        </p>
        <h2>2. Use of Services</h2>
        <p>
          Information pertaining to the use of event management services goes
          here. All transactions and agreements are finalized offline via direct
          consultation.
        </p>
        <h2>3. Confidentiality and Data</h2>
        <p>
          Any information submitted via our WhatsApp links is covered under our
          standard data confidentiality provisions.
        </p>
        <h2>4. Revisions</h2>
        <p>
          We reserve the right to revise this {title} at any time. Changes will
          be posted to this page seamlessly.
        </p>
      </div>
    </div>
  );
}
