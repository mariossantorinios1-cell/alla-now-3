"use client";

import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="main-content">
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 0" }}>
          <h1 style={{ fontSize: 36, marginBottom: 12, color: "#fff" }}>Καλωσήρθες στο AllNow</h1>
          <p style={{ color: "#bbb" }}>
            Η αρχική σελίδα — εδώ θα εμφανίζονται τα βίντεο, τα live, τα gaming clips και το AI content.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 20,
            marginTop: 24
          }}>
            {[1,2,3,4,5,6].map(i => (
              <article key={i} style={{ background: "#0f0f0f", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ height: 150, background: "#111" }} />
                <div style={{ padding: 12 }}>
                  <h3 style={{ margin: 0, color: "#fff" }}>Demo Video #{i}</h3>
                  <p style={{ color: "#888", marginTop: 6, fontSize: 13 }}>1.2M views • 3 days</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
