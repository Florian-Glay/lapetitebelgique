export default function Hero() {
return (
<section
className="relative min-h-[60vh] grid place-items-center bg-cover bg-center"
style={{
backgroundImage:
"url(https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop)",
}}
>
<div className="absolute inset-0 bg-black/40" />
<div className="relative container text-center text-white">
<h1 className="font-display text-4xl md:text-6xl">Saveurs belges, accueil chaleureux</h1>
<p className="mt-4 text-lg md:text-xl opacity-95">
Spécialités, viandes et poissons sélectionnés, terrasse conviviale à Chéreng.
</p>
<div className="mt-8 flex items-center justify-center gap-3">
<a href="/carte" className="btn-primary bg-gold text-dark hover:opacity-90">Découvrir la carte</a>
<a href="tel:+33620462087" className="btn-primary">Réserver</a>
</div>
</div>
</section>
);
}