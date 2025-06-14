'use client';

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase"; 
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/qrgen'); 
    } catch (err) {
      setError(err.message);
    }
  };
//kdsfgkduwfhc
  return (
    <main className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md p-6 rounded-md shadow-md border">
      <form onSubmit={handleSignup} className="flex flex-col p-6 rounded-md shadow-md border">
        <h1 className="text-2xl font-semibold mb-4">Signup</h1>
        {error && <p className="text-red-500 mt-4">{error}</p>}

        <input
          aria-label="First Name"
          type="text"
          placeholder="Enter your first name"
          className="p-2 border rounded"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          aria-label="Last Name"
          type="text"
          placeholder="Enter your last name"
          className="p-2 border rounded mt-4"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          aria-label="Username"
          type="text"
          placeholder="Enter your username"
          className="p-2 border rounded mt-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        
        <input
          aria-label=""
          type="email"
          placeholder="Enter your email"
          className="p-2 border rounded mt-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          aria-label="Password"
          type="password"
          placeholder="Enter your password"
          className="p-2 border rounded mt-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 text-gray-50 mt-4 p-2 rounded font-semibold hover:bg-blue-500 transition duration-200">
          Signup
        </button>

        <p className="mt-4 text-sm text-gray-600"
        >Already have an account? <a href="/login" className="text-blue-500">Login here</a></p>
      </form>
      </div>
    </main>
  );
}
