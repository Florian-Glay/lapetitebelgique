import Hero from "../components/Hero.jsx";


export default function Home() {
return (
<>
<Hero />


<section className="container py-12">
<h2 className="section-title">Nos incontournables</h2>
<p className="mt-3 max-w-2xl">Des produits frais, une cuisine généreuse et un service souriant. Découvrez nos spécialités avant votre venue.</p>


<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
{[
{
title: "Carbonade flamande",
img: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop",
},
{
title: "Moules-frites",
img: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1200&auto=format&fit=crop",
},
{
title: "Sélection de viandes",
img: "https://images.unsplash.com/photo-1604908554027-85278a161b67?q=80&w=1200&auto=format&fit=crop",
},
].map((c) => (
<figure key={c.title} className="card overflow-hidden">
<img src={c.img} alt="" className="h-56 w-full object-cover" loading="lazy" />
<figcaption className="p-4 font-semibold text-burgundy">{c.title}</figcaption>
</figure>
))}
</div>


<div className="mt-10">
<a href="/carte" className="btn-primary">Voir la carte complète</a>
</div>
</section>


<section className="bg-white py-12 mt-6">
<div className="container grid md:grid-cols-2 gap-8 items-center">
<div>
<h2 className="section-title">Une terrasse exceptionnelle</h2>
<p className="mt-3 opacity-90">Profitez d’une oasis au cœur de Chéreng. Idéale pour déjeuner ensoleillé, apéritif entre amis ou soirée d’été.</p>
<a href="/contact" className="btn-primary mt-5 inline-block">Nous trouver</a>
</div>
<img
src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop"
alt="Terrasse du restaurant"
className="rounded-2xl shadow-card"
loading="lazy"
/>
</div>
</section>
</>
);
}