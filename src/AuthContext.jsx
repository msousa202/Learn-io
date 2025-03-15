import React, { createContext, useState, useEffect, useContext } from 'react';
    import { createClient } from '@supabase/supabase-js';

    const supabaseUrl = 'YOUR_SUPABASE_URL'; // Replace with your Supabase URL
    const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY'; // Replace with your Supabase anon key

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const AuthContext = createContext();

    export const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        const { data: { subscription }, error } = supabase.auth.onAuthStateChange((event, session) => {
          if (event === 'SIGNED_IN') {
            setUser(session?.user || null);
          } else if (event === 'SIGNED_OUT') {
            setUser(null);
          }
          setLoading(false);
        });

        return () => subscription?.unsubscribe();
      }, []);

      const signup = async ({ email, password }) => {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) {
          console.error('Signup error:', error);
          return error;
        }
        return data;
      };

      const login = async ({ email, password }) => {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) {
          console.error('Login error:', error);
          return error;
        }
        return data;
      };

      const logout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
          console.error('Logout error:', error);
          return error;
        }
      };

      const value = {
        user,
        loading,
        signup,
        login,
        logout,
      };

      return (
        <AuthContext.Provider value={value}>
          {children}
        </AuthContext.Provider>
      );
    };

    export const useAuth = () => {
      return useContext(AuthContext);
    };
