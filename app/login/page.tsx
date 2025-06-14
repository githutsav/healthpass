'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginPage() {
  const router = useRouter();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/'); 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md p-6 rounded-md shadow-md border">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            aria-label="Email"
            type="email"
            placeholder="Enter your email"
            className="p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            aria-label="Password"
            type="password"
            placeholder="Enter your password"
            className="p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-blue-600 text-gray-50 p-2 rounded font-semibold hover:bg-blue-500 transition duration-200">
            Log In
          </button>
        </form>

        <p className="text-gray-500 mt-4">
          Don’t have an account? <a href="/signup" className="text-blue-500">Signup here</a>.
        </p>
      </div>
    </main>
  );
}

