import React, { useEffect, useMemo, useRef, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import DishCard from "../components/DishCard";

export default function Menu() {
  const [cats, setCats] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    (async () => {
      const { data: c } = await supabase.from("categories").select("*").order("sort");
      setCats(c || []);
      setActive(c?.[0]?.slug ?? null);

      const { data: d } = await supabase
        .from("dishes")
        .select("*")
        .order("sort");
      setDishes(d || []);
    })();
  }, []);

  const list = useMemo(() => {
    const cat = cats.find(x => x.slug === active);
    if (!cat) return [];
    return dishes.filter(d => d.category_id === cat.id && d.active);
  }, [cats, dishes, active]);

  // … ton bandeau d’onglets (active/setActive) reste identique …
  return (
    <section className="container py-10">
      <h1 className="section-title">La Carte</h1>

      {/* Bandeau d’onglets */}
      <div className="menu-tabs" role="tablist">
        {cats.map((cat, i) => (
          <button
            key={cat.id}
            className={`menu-tab ${active === cat.slug ? "is-active" : ""}`}
            onClick={() => setActive(cat.slug)}
          >
            {cat.title}
          </button>
        ))}
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-4">
        {list.map((it) => <DishCard key={it.id} item={it} />)}
      </div>
    </section>
  );
}
