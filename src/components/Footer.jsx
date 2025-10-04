import { NavLink } from "react-router-dom";


export default function Footer() {
return (
<footer className="bg-burgundy text-cream mt-12">
<div className="container grid md:grid-cols-3 gap-8 py-10">
<div>
<h4 className="font-display text-xl">La Petite Belgique</h4>
<p className="mt-2 opacity-90">45 rue Nationale, 59152 Chéreng</p>
<p className="opacity-90">Tél. <a className="underline" href="tel:+33620462087">06 20 46 20 87</a></p>
</div>
<div>
<h5 className="font-semibold">Navigation</h5>
<ul className="mt-2 space-y-1">
<li><NavLink to="/">Accueil</NavLink></li>
<li><NavLink to="/a-propos">À propos</NavLink></li>
<li><NavLink to="/carte">La Carte</NavLink></li>
<li><NavLink to="/contact">Contact</NavLink></li>
<li><NavLink to="/mentions-legales">Mentions légales</NavLink></li>
</ul>
</div>
<div>
<h5 className="font-semibold">Horaires</h5>
<p className="mt-2 opacity-90">Consultez Facebook pour les actualités et événements.</p>
<a
className="btn-primary mt-3 inline-block"
href="https://www.facebook.com/"
target="_blank" rel="noreferrer"
>Facebook</a>
</div>
</div>
<div className="border-t border-white/10 py-4 text-center text-sm opacity-80">
© {new Date().getFullYear()} La Petite Belgique – Tous droits réservés
</div>
</footer>
);
}