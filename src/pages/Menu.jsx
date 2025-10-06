import { useMemo, useRef, useEffect, useState } from "react";
import { menu } from "../data/menu.js";
import DishCard from "../components/DishCard.jsx";

export default function Menu() {
  const categories = useMemo(() => menu.map(c => c.slug), []);
  const [active, setActive] = useState(categories[0]);
  const tabRefs = useRef({});              // refs par slug
  const barRef  = useRef(null);            // ref du bandeau

  // Scroll automatique vers l’onglet actif
  useEffect(() => {
    const el = tabRefs.current[active];
    if (el && barRef.current) {
      const { left: bl, width: bw } = barRef.current.getBoundingClientRect();
      const { left: tl, width: tw } = el.getBoundingClientRect();
      const delta = tl - bl - (bw/2 - tw/2);
      barRef.current.scrollBy({ left: delta, behavior: "smooth" });
    }
  }, [active]);

  // Navigation clavier: ← →
  const onKeyDown = (e, idx) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const dir = e.key === "ArrowRight" ? 1 : -1;
    const next = (idx + dir + categories.length) % categories.length;
    const slug = categories[next];
    setActive(slug);
    tabRefs.current[slug]?.focus();
  };

  // --- rendu ---
  return (
    <section className="container py-10">
      <h1 className="section-title">La Carte</h1>
      <p className="mt-2 opacity-80">
        Parcourez les catégories et préparez votre commande avant de venir
      </p>

      {/* BANDEAU D’ONGLETS */}
      <div
        ref={barRef}
        className="menu-tabs"
        role="tablist"
        aria-label="Catégories du menu"
      >
        {menu.map((cat, i) => (
          <button
            key={cat.slug}
            ref={el => (tabRefs.current[cat.slug] = el)}
            onClick={() => setActive(cat.slug)}
            onKeyDown={(e) => onKeyDown(e, i)}
            role="tab"
            aria-selected={active === cat.slug}
            className={`menu-tab ${active === cat.slug ? "is-active" : ""}`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* LISTE DES PLATS */}
      <div className="mt-8 grid md:grid-cols-2 gap-4">
        {menu.find(c => c.slug === active)?.items.map(it => (
          <DishCard key={it.title} item={it} />
        ))}
      </div>
    </section>
  );
}