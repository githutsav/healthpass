// 'use client';

// import { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "@/lib/firebase"; 
// import { useRouter } from "next/navigation";

// export default function SignupPage() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();

//   interface SignupFormEvent extends React.FormEvent<HTMLFormElement> {}

//   interface FirebaseAuthError {
//     message: string;
//   }

//   const handleSignup = async (e: SignupFormEvent) => {
//     e.preventDefault();

//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       router.push('/qrgen'); 
//     } catch (err) {
//       if ((err as FirebaseAuthError)?.message) {
//         setError((err as FirebaseAuthError).message);
//       } else {
//         setError('An unknown error occurred.');
//       }
//     }
//   };

//   return (
//     <main className="flex items-center justify-center min-h-screen p-4">
//       <div className="w-full max-w-md p-6 rounded-md shadow-md border">
//       <form onSubmit={handleSignup} className="flex flex-col p-6 rounded-md shadow-md border">
//         <h1 className="text-2xl font-semibold mb-4">Signup</h1>
//         {error && <p className="text-red-500 mt-4">{error}</p>}

//         <input
//           aria-label="First Name"
//           type="text"
//           placeholder="Enter your first name"
//           className="p-2 border rounded"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//         <input
//           aria-label="Last Name"
//           type="text"
//           placeholder="Enter your last name"
//           className="p-2 border rounded mt-4"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//         />

//         <input
//           aria-label="Username"
//           type="text"
//           placeholder="Enter your username"
//           className="p-2 border rounded mt-4"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
        
//         <input
//           aria-label=""
//           type="email"
//           placeholder="Enter your email"
//           className="p-2 border rounded mt-4"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           aria-label="Password"
//           type="password"
//           placeholder="Enter your password"
//           className="p-2 border rounded mt-4"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button
//           type="submit"
//           className="bg-blue-600 text-gray-50 mt-4 p-2 rounded font-semibold hover:bg-blue-500 transition duration-200">
//           Signup
//         </button>

//         <p className="mt-4 text-sm text-gray-600"
//         >Already have an account? <a href="/login" className="text-blue-500">Login here</a></p>
//       </form>
//       </div>
//     </main>
//   );
// }
// 'use client';

// import { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "@/lib/firebase"; 
// import { useRouter } from "next/navigation";

// export default function SignupPage() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       router.push('/qrgen'); 
//     } catch (err) {
//       setError(err.message);
//     }
//   };
// //kdsfgkduwfhc
//   return (
//     <main className="flex items-center justify-center min-h-screen p-4">
//       <div className="w-full max-w-md p-6 rounded-md shadow-md border">
//       <form onSubmit={handleSignup} className="flex flex-col p-6 rounded-md shadow-md border">
//         <h1 className="text-2xl font-semibold mb-4">Signup</h1>
//         {error && <p className="text-red-500 mt-4">{error}</p>}

//         <input
//           aria-label="First Name"
//           type="text"
//           placeholder="Enter your first name"
//           className="p-2 border rounded"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//         <input
//           aria-label="Last Name"
//           type="text"
//           placeholder="Enter your last name"
//           className="p-2 border rounded mt-4"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//         />

//         <input
//           aria-label="Username"
//           type="text"
//           placeholder="Enter your username"
//           className="p-2 border rounded mt-4"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
        
//         <input
//           aria-label=""
//           type="email"
//           placeholder="Enter your email"
//           className="p-2 border rounded mt-4"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           aria-label="Password"
//           type="password"
//           placeholder="Enter your password"
//           className="p-2 border rounded mt-4"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button
//           type="submit"
//           className="bg-blue-600 text-gray-50 mt-4 p-2 rounded font-semibold hover:bg-blue-500 transition duration-200">
//           Signup
//         </button>

//         <p className="mt-4 text-sm text-gray-600"
//         >Already have an account? <a href="/login" className="text-blue-500">Login here</a></p>
//       </form>
//       </div>
//     </main>
//   );
// }



'use client';

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaHeartbeat, FaUserMd, FaStethoscope } from "react-icons/fa";

export default function SignupPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/qrgen');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    }
  };

  return (
    <main className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 p-4 overflow-hidden">

      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingIcon icon={<FaHeartbeat />} className="top-[12%] left-[5%]" delay={0} />
        <FloatingIcon icon={<FaUserMd />} className="top-[50%] right-[10%]" delay={1.5} />
        <FloatingIcon icon={<FaStethoscope />} className="bottom-[10%] left-[15%]" delay={2.5} />
      </div>


      <div className="relative z-10 w-full max-w-md p-6 bg-white rounded-2xl shadow-4xl border border-gray-900">
        <form onSubmit={handleSignup} className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Signup</h1>
          {error && <p className="text-red-500 mt-2 text-center text-sm">{error}</p>}

          <input
            aria-label="First Name"
            type="text"
            placeholder="Enter your first name"
            className="block text-m font-medium text-gray-700 mb-4 p-2 border rounded"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            aria-label="Last Name"
            type="text"
            placeholder="Enter your last name"
            className="block text-m font-medium text-gray-700 mb-4 p-2 border rounded"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            aria-label="Username"
            type="text"
            placeholder="Enter your username"
            className="block text-m font-medium text-gray-700 mb-4 p-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            aria-label="Email"
            type="email"
            placeholder="Enter your email"
            className="block text-m font-medium text-gray-700 mb-4 p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            aria-label="Password"
            type="password"
            placeholder="Enter your password"
            className="block text-m font-medium text-gray-700 mb-4 p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
            Signup
          </button>

          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account? <a href="/login" className="text-blue-600 font-medium hover:underline">Login here</a>
          </p>
        </form>
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
        duration: 2.5,
        repeat: Infinity,
        repeatType: 'reverse',
        delay,
      }}
    >
      {icon}
    </motion.div>
  );
}