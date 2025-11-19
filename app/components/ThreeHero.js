"use client";

/**
 * ThreeHero.js
 * Lightweight CSS 3D hero (no external libs).
 * Paste as a new file: /app/components/ThreeHero.js
 */

export default function ThreeHero() {
  return (
    <section style={{ padding: 24, color: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Headline */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div>
            <h1 style={{
              margin: 0,
              fontSize: 36,
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: "-0.02em"
            }}>
              AllNow — Everything. All people. All now.
            </h1>
            <p style={{ marginTop: 8, color: "#cfcfcf" }}>
              Real-time videos, live, gaming & AI — immersive 3D UI.
            </p>
          </div>

          {/* 3D cube area */}
          <div style={{
            marginLeft: "auto",
            width: 220,
            height: 220,
            perspective: 1000,
          }}>
            <div style={{
              width: "100%",
              height: "100%",
              position: "relative",
            }}>
              {/* rotating cube */}
              <div style={{
                position: "absolute",
                inset: 0,
                transformStyle: "preserve-3d",
                animation: "rotateCube 8s linear infinite",
              }}>
                {["#ff6b6b","#ffd166","#6bcB77","#4d96ff","#a66cff","#ff9f6b"].map((bg, i) => {
                  const common = {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    color: "#111",
                    fontSize: 14,
                    borderRadius: 12,
                    boxShadow: "0 6px 30px rgba(0,0,0,0.6)"
                  };
                  if (i === 0) return <div key={i} style={{ ...common, transform: "translateZ(110px)", background: bg }}>LIVE</div>;
                  if (i === 1) return <div key={i} style={{ ...common, transform: "rotateY(180deg) translateZ(110px)", background: bg }}>VIDEOS</div>;
                  if (i === 2) return <div key={i} style={{ ...common, transform: "rotateY(90deg) translateZ(110px)", background: bg }}>GAMING</div>;
                  if (i === 3) return <div key={i} style={{ ...common, transform: "rotateY(-90deg) translateZ(110px)", background: bg }}>AI</div>;
                  if (i === 4) return <div key={i} style={{ ...common, transform: "rotateX(90deg) translateZ(110px)", background: bg }}>MUSIC</div>;
                  return <div key={i} style={{ ...common, transform: "rotateX(-90deg) translateZ(110px)", background: bg }}>COMM</div>;
                })}
              </div>

              {/* subtle floating rings */}
              <div style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                boxShadow: "inset 0 0 120px rgba(255,255,255,0.02), 0 30px 80px rgba(0,0,0,0.7)",
                pointerEvents: "none",
                animation: "floatRings 6s ease-in-out infinite"
              }} />
            </div>
          </div>
        </div>

        {/* small features row */}
        <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
          <FeaturePill text="Live streaming" />
          <FeaturePill text="AI Summaries" />
          <FeaturePill text="Game clips" />
          <FeaturePill text="Monetization ready" />
          <FeaturePill text="Profiles & Chat" />
        </div>
      </div>

      {/* Inline styles (keyframes) */}
      <style jsx>{`
        @keyframes rotateCube {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          25% { transform: rotateX(10deg) rotateY(90deg); }
          50% { transform: rotateX(20deg) rotateY(180deg); }
          75% { transform: rotateX(10deg) rotateY(270deg); }
          100% { transform: rotateX(0deg) rotateY(360deg); }
        }
        @keyframes floatRings {
          0% { transform: translateY(0px) scale(1); opacity: 0.9; }
          50% { transform: translateY(-8px) scale(1.02); opacity: 1; }
          100% { transform: translateY(0px) scale(1); opacity: 0.9; }
        }
      `}</style>
    </section>
  );
}

function FeaturePill({ text }) {
  return (
    <div style={{
      background: "linear-gradient(90deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
      padding: "8px 12px",
      borderRadius: 999,
      color: "#ddd",
      fontSize: 13
    }}>
      {text}
    </div>
  );
}
