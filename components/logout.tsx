import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

function LogoutButton() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("You have been logged out.");
    } catch (error) {
      console.error(error);
      alert("Failed to logout.");
    }
  };

  return (
    <button onClick={handleLogout} className='bg-red-500 text-gray-50 px-4 py-2 rounded-md hover:bg-red-600'>
      Logout
    </button>
  );
}

export default LogoutButton;
