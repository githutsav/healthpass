'use client';

import { useState } from 'react';
import QRCode from 'react-qr-code';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import ProtectedRoute from '@/components/ProtectedRoute'; 
import { useAuth } from '@/context/AuthContect'; 
import { useEffect } from "react";
import { query, where, getDocs, updateDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBICPFooH7cH1drdip8GuW2w2oh3kV7VWI",
  authDomain: "healthpass7827.firebaseapp.com",
  projectId: "healthpass7827",
  storageBucket: "healthpass7827.firebasestorage.app",
  messagingSenderId: "1081164739394",
  appId: "1:1081164739394:web:ba6a7f4428cf16872e4edb",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    bloodGroup: '',
    allergies: '',
    medications: '',
    medicalHistory: '',
    emergencyContactName: '',
    emergencyContact: '',

  });
  const [qrValue, setQrValue] = useState('');
  const [docId, setDocId] = useState('');
  const { user } = useAuth();

 const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'health_passports'), {...formData, ownerId: user.uid,});
      setDocId(docRef.id);
      setQrValue(`https://yourdomain.com/passport/${docRef.id}`);
    } catch (err) {
      console.error(err);
    }
  };



  return (
    <ProtectedRoute>
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">HealthChain: Emergency Health Passport</h1>

      <form onSubmit={handleSubmit} className="grid gap-4 w-full max-w-md">
        {Object.entries(formData).map(([key, val]) => (
          <input
            key={key}
            required
            type="text"
            placeholder={key}
            className="p-2 border rounded"
            value={formData[key as keyof typeof formData]}
            onChange={(e) =>
              setFormData({ ...formData, [key]: e.target.value })
            }
          />
        ))}
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Generate QR
        </button>
      </form>

      {qrValue && (
        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold mb-2">Scan This in Emergencies</h2>
          <QRCode value={qrValue} />
          <p className="mt-2 text-sm">ID: {docId}</p>
        </div>
      )}
    </main>
  </ProtectedRoute>
  );

}
