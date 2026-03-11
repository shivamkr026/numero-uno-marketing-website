"use client";

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("Invalid credentials");
    } else {
      router.push("/admin/stats");
    }
  };

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-6">
      <div className="sitewide-card p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">Admin Login</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-muted mb-1 block">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-navy border border-border rounded-lg px-4 py-2 text-white focus:border-blue outline-none transition-colors"
              required 
            />
          </div>
          <div>
            <label className="text-sm text-muted mb-1 block">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-navy border border-border rounded-lg px-4 py-2 text-white focus:border-blue outline-none transition-colors"
              required 
            />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button 
            type="submit" 
            className="w-full bg-blue text-navy font-semibold py-2 rounded-lg mt-2 hover:bg-white hover:text-navy transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
