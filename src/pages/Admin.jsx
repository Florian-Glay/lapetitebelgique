import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Admin() {
  const [session, setSession] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub?.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    (async () => {
      if (!session?.user) { setIsAdmin(false); return; }
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .maybeSingle();
      setIsAdmin(data?.role === "admin");
    })();
  }, [session]);

  if (!session) return <div className="container py-10">Connecte-toi depuis la page Admin.</div>;
  if (!isAdmin) return <div className="container py-10">Accès refusé.</div>;

  return (
    <section className="container py-10">
      <h1 className="section-title">Administration</h1>
      <div className="menu-tabs" role="tablist" aria-label="Panneau">
        <button className="menu-tab is-active">Carte</button>
        <button className="menu-tab">Sections</button>
      </div>
      <AdminCard />
      <AdminSections />
    </section>
  );
}
