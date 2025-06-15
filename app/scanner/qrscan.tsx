'use client';
import React, { useState } from 'react';
import QrScanner from '@/components/qrscanner';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function ScanPassportPage() {
  const [scannedId, setScannedId] = useState('');
  type PassportData = { id: string } & Record<string, any> | null;
  const [passportData, setPassportData] = useState<PassportData>(null);
  const [error, setError] = useState<string | null>(null);

  const handleScan = async (result: string) => {
    setScannedId(result);
    try {

      const docId = extractIdFromURL(result);
      if (docId) {
        const snapshot = await getDoc(doc(db, "health_passports", docId));

        if (snapshot.exists()) {
          setPassportData({ id: snapshot.id, ...snapshot.data() });
        } else {
          setError("Record not found.");
        }
      } else {
        setError("Invalid QR code.");
      }
    } catch (err) {
      console.error(err);
      setError("Error retrieving record.");
    }
  };


  function extractIdFromURL(url: string) {

    try {
      return new URL(url).pathname.split('/').pop();
    } catch {
      return url;
    }
  }

  return (
    <div className='p-4'>
      <h1>Scan QR code to view health passport</h1>
      <QrScanner onScan={handleScan} onError={(err) => setError(err.message)} />

      {error && <p className='text-red-500'>{error}</p>}

      {passportData && (
        <div className='bg-gray-100 p-4 rounded-md mt-4 shadow-md'>
          <h2>Passport</h2>
          <p>Name: {passportData.name}</p>
          <p>Blood Group: {passportData.bloodGroup}</p>

        </div>
      )}

      {scannedId && <p>Scanned QR code: {scannedId}</p>}
    </div>
  );
}

