"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function HeroStats() {
  const [stats, setStats] = useState([
    { stat_key: 'brands_scaled', stat_value: '17+', stat_label: 'Brands Scaled' },
    { stat_key: 'average_roas', stat_value: '8.2x', stat_label: 'Average ROAS' },
    { stat_key: 'revenue_generated', stat_value: '₹10Cr+', stat_label: 'Revenue Generated' },
    { stat_key: 'client_rating', stat_value: '4.9/5', stat_label: 'Client Rating' },
  ]);

  useEffect(() => {
    async function fetchStats() {
      const { data, error } = await supabase
        .from('site_stats')
        .select('stat_key, stat_value, stat_label')
        .order('id', { ascending: true });

      if (data && !error && data.length > 0) {
        setStats(data);
      }
    }
    fetchStats();
  }, []);

  return (
    <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-center w-full mx-auto relative gap-y-8 md:gap-y-0 text-center">
      {stats.map((m, i) => (
        <div key={m.stat_key} className={`flex flex-col items-center flex-1 px-4 md:px-6 ${i !== stats.length - 1 ? 'md:border-r md:border-white/10' : ''}`}>
          <div style={{ fontFamily: "var(--font-heading), system-ui, sans-serif", fontSize: "32px", fontWeight: "700", color: "#3B82F6", lineHeight: 1 }}>
            {m.stat_value}
          </div>
          <div style={{ fontFamily: "var(--font-body), system-ui, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "8px" }}>
            {m.stat_label}
          </div>
        </div>
      ))}
    </div>
  );
}
