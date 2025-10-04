export default function About() {
return (
<section className="container py-10">
<h1 className="section-title">À propos</h1>
<div className="mt-6 grid md:grid-cols-2 gap-8 items-start">
<div className="space-y-4">
<p>
Les bonnes adresses culinaires ne manquent pas dans votre secteur. Découvrez votre restaurant
<strong> La Petite Belgique</strong>, tenu et orchestré par de véritables passionnés.
</p>
<p>
Au programme : un service souriant et sympathique, des produits locaux et frais cuisinés avec amour,
une carte des boissons innovante et un décor charmant… sans oublier une terrasse exceptionnelle.
</p>
<p>
Vous avez la formule gagnante pour passer un agréable moment avec vos proches en notre compagnie.
</p>
</div>
<img
src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop"
alt="Salle du restaurant"
className="rounded-2xl shadow-card"
loading="lazy"
/>
</div>
</section>
);
}