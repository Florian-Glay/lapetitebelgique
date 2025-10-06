import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [sent, setSent]   = useState(false);

  const sendMagicLink = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (!error) setSent(true);
    else alert(error.message);
  };

  return (
    <section className="container py-10">
      <h1 className="section-title">Espace administrateur</h1>
      {sent ? (
        <p className="mt-4">Vérifie tes emails (lien de connexion).</p>
      ) : (
        <form onSubmit={sendMagicLink} className="card p-6 max-w-md mt-6">
          <label className="block mb-2 font-semibold">Email admin</label>
          <input
            type="email" required
            className="border rounded-xl px-4 py-2 w-full"
            value={email} onChange={e=>setEmail(e.target.value)}
          />
          <button className="btn-primary mt-4">Recevoir le lien</button>
        </form>
      )}
    </section>
  );
}
