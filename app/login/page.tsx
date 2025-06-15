// 'use client';

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { auth } from '@/lib/firebase'; 
// import { signInWithEmailAndPassword } from 'firebase/auth';

// export default function LoginPage() {
//   const router = useRouter();


//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');


//   const handleSubmit = async (e:any) => {
//     e.preventDefault();

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       router.push('/'); 
//     } catch (err) {
//       if (err instanceof Error) {
//         setError(err.message);
//       } else {
//         setError('An unknown error occurred.');
//       }
//     }
//   };

//   return (
//     <main className="flex items-center justify-center min-h-screen p-4">
//       <div className="w-full max-w-md p-6 rounded-md shadow-md border">
//         <h1 className="text-2xl font-semibold mb-4">Login</h1>
//         {error && <p className="text-red-500 mb-4">{error}</p>}

//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           <input
//             aria-label="Email"
//             type="email"
//             placeholder="Enter your email"
//             className="p-2 border rounded"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <input
//             aria-label="Password"
//             type="password"
//             placeholder="Enter your password"
//             className="p-2 border rounded"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button
//             type="submit"
//             className="bg-blue-600 text-gray-50 p-2 rounded font-semibold hover:bg-blue-500 transition duration-200">
//             Log In
//           </button>
//         </form>

//         <p className="text-gray-500 mt-4">
//           Don’t have an account? <a href="/signup" className="text-blue-500">Signup here</a>.
//         </p>
//       </div>
//     </main>
//   );
// }

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase'; 
import { motion } from 'framer-motion';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FaHeartbeat, FaAmbulance, FaSyringe ,FaStethoscope } from 'react-icons/fa';

export default function LoginPage() {
  const router = useRouter();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/qrgen'); 
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <main className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 p-4 overflow-hidden">
<div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingIcon icon={<FaHeartbeat />} className="top-[20%] left-[5%]" delay={0} />

        <FloatingIcon icon={<FaStethoscope />} className="top-[50%] right-[10%]" delay={1.5} />
        <FloatingIcon icon={<FaAmbulance />} className="top-[80%] right-[10%]" delay={2} />
        <FloatingIcon icon={<FaSyringe />} className="bottom-[30%] left-[15%]" delay={1} />
        
      </div>
      <div className="w-full max-w-md p-20 bg-white rounded-2xl shadow-4xl border border-gray-900">
         <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Login</h1>
         {error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}
         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            aria-label="Email"
            type="email"
            placeholder="Enter your email"
            
            className="block text-m font-medium text-gray-700 mb-1 p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            aria-label="Password"
            type="password"
            placeholder="Enter your password"
            className="block text-m font-medium text-gray-700 mb-1 p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
            Log In
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account? <a href="/signup" className="text-blue-600 font-medium hover:underline">Signup here</a>.
        </p>
      </div>
    </main>

    

  );
}


function FloatingIcon({
  icon,
  className,
  delay = 0,
}: {
  icon: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute text-blue-400 text-3xl opacity-30 ${className}`}
      initial={{ y: 0 }}
      animate={{ y: -20 }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
        delay,
      }}
    >
      {icon}
    </motion.div>
  );
}