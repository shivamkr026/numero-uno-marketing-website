"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function AboutStats() {
  const [stats, setStats] = useState({
    brands: { value: '17+', label: 'Brands Scaled' },
    revenue: { value: '₹10Cr+', label: 'Revenue Generated' }
  });

  useEffect(() => {
    async function fetchStats() {
      const { data, error } = await supabase
        .from('site_stats')
        .select('stat_key, stat_value, stat_label')
        .in('stat_key', ['brands_scaled', 'revenue_generated']);

      if (data && !error && data.length > 0) {
        const brandsStat = data.find(s => s.stat_key === 'brands_scaled');
        const revenueStat = data.find(s => s.stat_key === 'revenue_generated');
        
        setStats(prevStats => ({
          brands: brandsStat ? { value: brandsStat.stat_value, label: brandsStat.stat_label } : prevStats.brands,
          revenue: revenueStat ? { value: revenueStat.stat_value, label: revenueStat.stat_label } : prevStats.revenue
        }));
      }
    }
    fetchStats();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="sitewide-card p-6 text-center">
        <div className=" text-3xl section-h2 text-blue">{stats.brands.value}</div>
        <div className="text-xs text-muted mt-1">{stats.brands.label}</div>
      </div>
      <div className="sitewide-card p-6 text-center">
        <div className=" text-3xl section-h2 text-orange">{stats.revenue.value}</div>
        <div className="text-xs text-muted mt-1">{stats.revenue.label}</div>
      </div>
    </div>
  );
}
