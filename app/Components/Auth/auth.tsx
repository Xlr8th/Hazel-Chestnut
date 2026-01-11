"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import "./auth.css";

const Auth: React.FC = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true); // toggle between login & signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // for signup
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);

  // Listen for auth state
  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
      if (session?.user) {
        router.push('/')
      }
    };

    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
      if (session?.user) {
        router.push('/')
      }
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [router]);

  // ✅ Login existing user
  const handleLogin = async () => {
    if (!email || !password) return alert("Please enter email and password");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      router.push('/');
    }

  };

  // ✅ Signup new user
  const handleSignup = async () => {
    if (!email || !password || !name) return alert("Please fill all fields");
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: name } },
    });

    if (error) alert(error.message);
    else alert("Signup successful! Check your email to confirm your account.");
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (user)
    return (
      <div className="auth-card">
        <p>Logged in as <strong>{user.email}</strong></p>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    );

  return (
    <div className="auth-card">
      <h3>{isLogin ? "Login" : "Sign Up"}</h3>

      {!isLogin && (
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="form-control"
        />
      )}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="form-control"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="form-control"
      />

      <button
        className="btn"
        onClick={isLogin ? handleLogin : handleSignup}
        disabled={loading}
      >
        {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
      </button>

      <p className="toggle-text">
        {isLogin ? (
          <>
            Don't have an account?{" "}
            <span className="toggle-link" onClick={() => setIsLogin(false)}>
              Sign Up
            </span>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <span className="toggle-link" onClick={() => setIsLogin(true)}>
              Login
            </span>
          </>
        )}
      </p>
    </div>
  );
};

export default Auth;
