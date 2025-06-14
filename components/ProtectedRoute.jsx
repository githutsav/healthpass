'use client';
import { useAuth } from "@/context/AuthContect";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login'); 
    }
  }, [user, loading, router]);

  if (loading) {
    return <p>Checking authentication...</p>;
  }

  if (!user) {
    return null; 
  }

  return <>{children}</>;
}
