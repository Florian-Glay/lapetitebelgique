export default function DishCard({ item }) {
return (
<article className="card p-4 flex gap-4">
<img
src={item.image}
alt={item.title}
className="h-24 w-24 object-cover rounded-xl"
loading="lazy"
/>
<div className="flex-1">
<div className="flex items-start justify-between gap-3">
<h3 className="font-semibold text-lg text-burgundy">{item.title}</h3>
{item.price && <span className="font-semibold text-burgundy">{item.price}€</span>}
</div>
{item.desc && <p className="mt-1 text-sm opacity-80">{item.desc}</p>}
{item.labels?.length ? (
<div className="mt-2 flex flex-wrap gap-2">
{item.labels.map((l) => (
<span key={l} className="badge">{l}</span>
))}
</div>
) : null}
</div>
</article>
);
}