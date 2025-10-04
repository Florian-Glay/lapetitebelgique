import { useMemo, useState } from "react";
import { menu } from "../data/menu.js";
import DishCard from "../components/DishCard.jsx";


export default function Menu() {
const categories = useMemo(() => menu.map((c) => c.slug), []);
const [active, setActive] = useState(categories[0]);


const current = menu.find((c) => c.slug === active);


return (
<section className="container py-10">
<h1 className="section-title">La Carte</h1>
<p className="mt-2 opacity-80">Parcourez les catégories et préparez votre commande avant de venir ✨</p>


<div className="menu-cats">
{menu.map((cat) => (
<button
key={cat.slug}
onClick={() => setActive(cat.slug)}
className={`badge ${active === cat.slug ? "bg-cream border-burgundy" : ""}`}
>
{cat.title}
</button>
))}
</div>


<div className="mt-8 grid md:grid-cols-2 gap-4">
{current.items.map((it) => (
<DishCard key={it.title} item={it} />
))}
</div>


<div className="mt-10 flex items-center gap-3">
<a href="tel:+33620462087" className="btn-primary">Réserver par téléphone</a>
<a
className="badge"
href="https://maps.google.com/?q=45+rue+Nationale+59152+Ch%C3%A9reng"
target="_blank" rel="noreferrer"
>Itinéraire</a>
</div>
</section>
);
}