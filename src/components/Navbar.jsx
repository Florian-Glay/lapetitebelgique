import { NavLink } from "react-router-dom";
import { useState } from "react";


const LinkItem = ({ to, children }) => (
<NavLink
to={to}
className={({ isActive }) =>
`px-3 py-2 rounded-full text-sm font-medium hover:bg-white/60 transition ${
isActive ? "bg-white text-burgundy" : "text-white"
}`
}
>
{children}
</NavLink>
);


export default function Navbar() {
const [open, setOpen] = useState(false);
return (
<header className="sticky top-0 z-40 bg-burgundy/95 backdrop-blur supports-[backdrop-filter]:bg-burgundy/80">
<div className="container flex items-center justify-between py-3">
<NavLink to="/" className="text-cream font-display text-xl">
La Petite <span className="text-gold">Belgique</span>
</NavLink>
<nav className="hidden md:flex items-center gap-1">
<LinkItem to="/">Accueil</LinkItem>
<LinkItem to="/a-propos">À propos</LinkItem>
<LinkItem to="/carte">La Carte</LinkItem>
<LinkItem to="/contact">Contact</LinkItem>
<a href="tel:+33620462087" className="ml-2 btn-primary">Réserver</a>
</nav>
<button
className="md:hidden text-cream border border-white/30 px-3 py-2 rounded-full"
onClick={() => setOpen((v) => !v)}
aria-label="Ouvrir le menu"
>☰</button>
</div>
{open && (
<div className="md:hidden border-t border-white/10 bg-burgundy">
<div className="container flex flex-col gap-2 py-3">
<LinkItem to="/" onClick={() => setOpen(false)}>Accueil</LinkItem>
<LinkItem to="/a-propos" onClick={() => setOpen(false)}>À propos</LinkItem>
<LinkItem to="/carte" onClick={() => setOpen(false)}>La Carte</LinkItem>
<LinkItem to="/contact" onClick={() => setOpen(false)}>Contact</LinkItem>
<a href="tel:+33620462087" className="btn-primary">Réserver</a>
</div>
</div>
)}
</header>
);
}