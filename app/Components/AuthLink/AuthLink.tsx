"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import './AuthLink.css'

const AuthLink: React.FC = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Get initial session
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };
    getUser();

    // Listen to auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (user) {
    return (
      <div className="auth-link">
        <span>{user.email}</span>
        <button onClick={handleLogout} className="btn-link">
          Logout
        </button>
      </div>
    );
  }

  return (
    <Link href="/SignUp" className="btn-link">
      Login
    </Link>
  );
};

export default AuthLink;