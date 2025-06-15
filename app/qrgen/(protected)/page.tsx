"use client";
import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  addDoc,
} from "firebase/firestore";
import ProtectedRoute from "@/components/ProtectedRoute";
import LogoutButton from "@/components/logout";
import QRCode from "react-qr-code";

import { db } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContect";

type AuthContextType = {
  user: { uid: string } | null;
};

export default function Home() {
  const auth = useAuth() as AuthContextType | null;
  const user = auth?.user;

  const [formData, setFormData] = useState({
    name: "",
    bloodGroup: "",
    allergies: "",
    medications: "",
    medicalHistory: "",
    emergencyContactName: "",
    emergencyContact: "",
  });

  const [loading, setLoading] = useState(true);
  type QrData = {
    id: string;
    name: string;
    bloodGroup: string;
    allergies: string;
    medications: string;
    medicalHistory: string;
    emergencyContactName: string;
    emergencyContact: string;
    ownerId: string;
  };
  const [qrValue, setQrValue] = useState<string | null>(null);
  const [qrData, setQrData] = useState<QrData | null>(null);
  const [docId, setDocId] = useState("");

  useEffect(() => {
    if (user) {
      (async () => {
        setLoading(true);
        try {
          const q = query(
            collection(db, "health_passports"),
            where("ownerId", "==", user.uid)
          );

          const snapshot = await getDocs(q);
          if (!snapshot.empty) {
            const doc = snapshot.docs[0];
            const data = doc.data();
            setQrData({
              id: doc.id,
              name: data.name,
              bloodGroup: data.bloodGroup,
              allergies: data.allergies,
              medications: data.medications,
              medicalHistory: data.medicalHistory,
              emergencyContactName: data.emergencyContactName,
              emergencyContact: data.emergencyContact,
              ownerId: data.ownerId,
            });
            setDocId(doc.id);
            setQrValue(`https://localhost:3000/passport/${doc.id}`);

            setFormData((prev) => ({
              ...prev,
              name: data.name,
              bloodGroup: data.bloodGroup,
              allergies: data.allergies,
              medications: data.medications,
              medicalHistory: data.medicalHistory,
              emergencyContactName: data.emergencyContactName,
              emergencyContact: data.emergencyContact,
            }));
          }
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (qrData) {
        await updateDoc(doc(db, "health_passports", qrData.id), formData);
        alert("Record updated.");
        setQrData({
          id: qrData.id,
          ...formData,
          ownerId: qrData.ownerId,
        });
      } else {
        if (!user) {
          alert("User not authenticated.");
          return;
        }
        const docRef = await addDoc(collection(db, "health_passports"), {
          ...formData,
          ownerId: user.uid,
        });
        setDocId(docRef.id);
        setQrValue(`https://localhost:3000/passport/${docRef.id}`);
        setQrData({
          id: docRef.id,
          ...formData,
          ownerId: user.uid,
        });
        alert("Record created.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ProtectedRoute>
      <main className="p-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {qrValue ? (
              <div>
                <h1 className="text-xl font-semibold mb-1 flex flex-col items-center">Your QR</h1>
                {/*<img
                  src={`https://api.qrserver.com/v1/qrcode?data=${encodeURIComponent(
                    qrValue ? JSON.stringify(qrValue) : ""
                  )}&size=200x200`}
                  alt="QR code"
                  width={200}
                  height={200}
                />*/}
                {qrValue && (
                  <div className="mt-2  flex flex-col items-center">
                    <h2 className="text-xl font-semibold mb-1">
                      Scan This in Emergencies
                    </h2>
                    <QRCode value={qrValue}  />
                    <p className="mt-2 mb-4 text-sm">ID: {docId}</p>
                    
                  </div>
                )}

                <h2 className="font-bold">Edit</h2>
                <form
                  onSubmit={handleSubmit}
                  className="border-white text-black bg-white grid grid-cols-2 mb-4 gap-4 p-2"
                >
                  <input
                    aria-label="Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                  />
                  <input
                    aria-label="Blood Group"
                    value={formData.bloodGroup}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        bloodGroup: e.target.value,
                      }))
                    }
                  />
                  <input
                    aria-label="Allergies"
                    value={formData.allergies}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        allergies: e.target.value,
                      }))
                    }
                  />
                  <input
                    aria-label="Medications"
                    value={formData.medications}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        medications: e.target.value,
                      }))
                    }
                  />
                  <input
                    aria-label="Medical History"
                    value={formData.medicalHistory}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        medicalHistory: e.target.value,
                      }))
                    }
                  />
                  <input
                    aria-label="Emergency Contact Name"
                    value={formData.emergencyContactName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        emergencyContactName: e.target.value,
                      }))
                    }
                  />
                  <input
                    aria-label="Emergency Contact"
                    value={formData.emergencyContact}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        emergencyContact: e.target.value,
                      }))
                      
                    }
                    
                  />
                  <button className="bg-blue-500 hover:bg-blue-600 text-gray-50 font-semibold py-2 mx-50 rounded-md shadow-md transition duration-300">
                    Save
                  </button>
                </form>
                <LogoutButton />
              </div>
            ) : (
              <form
                className="border-white text-black  grid grid-cols-2 gap-4 p-2"
                onSubmit={handleSubmit}
              >
                <label htmlFor="name" className="text-white">
                  Name:
                </label>
                <input
                  id="name"
                  className="border-gray-500 flex-col bg-white  p-2 rounded-md"
                  aria-label="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                />
                <label htmlFor="bldgrp" className="text-white">
                  Blood Group:
                </label>
                <input
                  id="bldgrp"
                  className="border-gray-500 flec-col bg-text-white bg-white p-2 rounded-md"
                  aria-label="Blood Group"
                  value={formData.bloodGroup}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      bloodGroup: e.target.value,
                    }))
                  }
                />
                <label htmlFor="name" className="text-white">
                  Allergies:
                </label>
                <input
                  className="border-gray-500 bg-text-white bg-white p-2 rounded-md"
                  aria-label="Allergies"
                  value={formData.allergies}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      allergies: e.target.value,
                    }))
                  }
                />
                <label htmlFor="name" className="text-white font-bold">
                  Medications:
                </label>
                <input
                  className="border-gray-500 bg-text-white bg-white p-2 rounded-md"
                  aria-label="Medications"
                  value={formData.medications}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      medications: e.target.value,
                    }))
                  }
                />
                <label htmlFor="medhis" className="text-white font-bold">
                  Medical History:
                </label>
                <input
                  id="medhis"
                  className="border-gray-500 bg-text-white bg-white p-2 rounded-md"
                  aria-label="Medical History"
                  value={formData.medicalHistory}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      medicalHistory: e.target.value,
                    }))
                  }
                />
                <label htmlFor="emgconname" className="text-white font-bold">
                  Emergency Contact Number:
                </label>
                <input
                  id="emgconname"
                  className="border-gray-500 bg-text-white bg-white p-2 rounded-md"
                  aria-label="Emergency Contact Name"
                  value={formData.emergencyContactName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      emergencyContactName: e.target.value,
                    }))
                  }
                />
                <label htmlFor="emgcont" className="text-white font-bold">
                  Emergency Contact:
                </label>
                <input
                  id="emgcont"
                  className="border-gray-500 bg-text-black bg-white p-2 rounded-md"
                  aria-label="Emergency Contact"
                  value={formData.emergencyContact}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      emergencyContact: e.target.value,
                    }))
                  }
                />

                <button className="bg-blue-500 hover:bg-blue-600 text-gray-50 font-semibold py-2 px-4 rounded-md shadow-md transition duration-300">
                  Create QR
                </button>
              </form>
            )}
          </div>
        )}
      </main>
    </ProtectedRoute>
  );
}
