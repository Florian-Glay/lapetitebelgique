import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function AdminCard() {
  const [cats, setCats] = useState([]);
  const [dishes, setDishes] = useState([]);

  const load = async () => {
    const { data: c } = await supabase.from("categories").select("*").order("sort");
    const { data: d } = await supabase.from("dishes").select("*").order("sort");
    setCats(c||[]); setDishes(d||[]);
  };
  useEffect(() => { load(); }, []);

  const addDish = async (catId) => {
    const title = prompt("Nom du plat ?");
    if (!title) return;
    const price = Number(prompt("Prix ? (ex 18.5)"));
    const { error } = await supabase.from("dishes").insert({ category_id: catId, title, price });
    if (error) return alert(error.message);
    load();
  };

  const editDish = async (dish) => {
    const title = prompt("Nom du plat :", dish.title) ?? dish.title;
    const price = Number(prompt("Prix :", dish.price));
    const { error } = await supabase.from("dishes")
      .update({ title, price })
      .eq("id", dish.id);
    if (error) return alert(error.message);
    load();
  };

  const delDish = async (dish) => {
    if (!confirm(`Supprimer "${dish.title}" ?`)) return;
    const { error } = await supabase.from("dishes").delete().eq("id", dish.id);
    if (error) return alert(error.message);
    load();
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-6">
      {cats.map(cat => (
        <div key={cat.id} className="card p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-burgundy">{cat.title}</h3>
            <button className="badge" onClick={() => addDish(cat.id)}>+ Plat</button>
          </div>
          <ul className="mt-3 space-y-2">
            {dishes.filter(d=>d.category_id===cat.id).map(d => (
              <li key={d.id} className="flex items-center justify-between border rounded-xl px-3 py-2">
                <span>{d.title} {d.price ? <strong>— {d.price}€</strong> : null}</span>
                <div className="flex gap-2">
                  <button className="badge" onClick={()=>editDish(d)}>Modifier</button>
                  <button className="badge" onClick={()=>delDish(d)}>Supprimer</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
