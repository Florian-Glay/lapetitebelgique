export default function Contact() {
return (
<section className="container py-10">
<h1 className="section-title">Contact & Accès</h1>
<div className="mt-6 grid lg:grid-cols-2 gap-8 items-start">
<div className="card p-6 space-y-3">
<p><strong>Adresse :</strong> 45 rue Nationale, 59152 Chéreng</p>
<p><strong>Téléphone :</strong> <a className="underline" href="tel:+33620462087">06 20 46 20 87</a></p>
<p><strong>Réseaux :</strong> <a className="underline" href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a></p>
<a href="tel:+33620462087" className="btn-primary mt-4 inline-block">Réserver</a>
</div>
<iframe
title="Google Maps"
className="w-full h-80 rounded-2xl border"
loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
src="https://www.google.com/maps?q=45+rue+Nationale+59152+Ch%C3%A9reng&output=embed"
/>
</div>
</section>
);
}