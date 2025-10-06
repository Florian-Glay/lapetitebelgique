import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function AdminSections() {
  const [rows, setRows] = useState([]);
  const [edit, setEdit] = useState(null);

  const load = async () => {
    const { data } = await supabase.from("sections").select("*").order("id");
    setRows(data||[]);
  };
  useEffect(()=>{ load(); },[]);

  const save = async () => {
    const { id, key, content } = edit;
    const { error } = await supabase.from("sections")
      .update({ content, updated_at: new Date().toISOString() })
      .eq("id", id);
    if (error) return alert(error.message);
    setEdit(null); load();
  };

  return (
    <div className="card p-4 mt-6">
      <h3 className="font-semibold text-burgundy mb-3">Sections modifiables</h3>
      <ul className="space-y-2">
        {rows.map(r => (
          <li key={r.id} className="flex items-center justify-between border rounded-xl px-3 py-2">
            <span>{r.key}</span>
            <button className="badge" onClick={()=>setEdit(r)}>Modifier</button>
          </li>
        ))}
      </ul>

      {edit && (
        <div className="mt-4">
          <label className="block font-semibold mb-1">{edit.key}</label>
          <textarea
            className="w-full border rounded-xl p-3 min-h-40"
            value={JSON.stringify(edit.content, null, 2)}
            onChange={e=>setEdit({ ...edit, content: JSON.parse(e.target.value || "{}") })}
          />
          <div className="flex gap-2 mt-2">
            <button className="btn-primary" onClick={save}>Enregistrer</button>
            <button className="badge" onClick={()=>setEdit(null)}>Annuler</button>
          </div>
        </div>
      )}
    </div>
  );
}
