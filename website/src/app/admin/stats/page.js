"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function AdminStats() {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState({ text: "", type: "" });
  const router = useRouter();

  useEffect(() => {
    async function checkAuthAndFetchStats() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/admin/login");
        return;
      }

      const { data, error } = await supabase
        .from('site_stats')
        .select('*')
        .order('id', { ascending: true });

      if (data && !error) {
        setStats(data);
      }
      setLoading(false);
    }
    
    checkAuthAndFetchStats();
  }, [router]);

  const handleStatChange = (statKey, newValue) => {
    setStats(stats.map(stat => 
      stat.stat_key === statKey ? { ...stat, stat_value: newValue } : stat
    ));
  };

  const saveStat = async (statKey, newValue) => {
    setMessage({ text: "", type: "" });
    const { error } = await supabase
      .from('site_stats')
      .update({ 
        stat_value: newValue,
        updated_at: new Date().toISOString()
      })
      .eq('stat_key', statKey);

    if (error) {
      setMessage({ text: "Failed to update stat", type: "error" });
    } else {
      setMessage({ text: "Stats updated successfully", type: "success" });
      setTimeout(() => setMessage({ text: "", type: "" }), 3000);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  if (loading) return <div className="min-h-screen bg-navy flex items-center justify-center text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-navy p-6 lg:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Manage Site Stats</h1>
          <button 
            onClick={handleLogout}
            className="text-sm border border-border px-4 py-2 rounded-lg text-muted hover:text-white transition-colors"
          >
            Logout
          </button>
        </div>

        {message.text && (
          <div className={`p-4 rounded-lg mb-6 ${message.type === 'error' ? 'bg-red-500/10 border-red-500/50 text-red-500' : 'bg-green-500/10 border-green-500/50 text-green-500'} border`}>
            {message.text}
          </div>
        )}

        <div className="flex flex-col gap-6">
          {stats.map((stat) => (
            <div key={stat.stat_key} className="sitewide-card p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="text-lg font-semibold text-white mb-1">{stat.stat_label}</div>
                <div className="text-xs text-muted">Key: {stat.stat_key}</div>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <input 
                  type="text" 
                  value={stat.stat_value}
                  onChange={(e) => handleStatChange(stat.stat_key, e.target.value)}
                  className="w-full md:w-48 bg-navy border border-border rounded-lg px-4 py-2 text-white focus:border-blue outline-none transition-colors"
                />
                <button 
                  onClick={() => saveStat(stat.stat_key, stat.stat_value)}
                  className="bg-blue text-navy font-semibold px-6 py-2 rounded-lg hover:bg-white transition-colors whitespace-nowrap"
                >
                  Save
                </button>
              </div>
            </div>
          ))}
          {stats.length === 0 && (
            <div className="text-muted text-sm pb-8">
              No stats found in database. Make sure you have created the table and rows in Supabase.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
