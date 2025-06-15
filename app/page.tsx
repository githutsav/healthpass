// export default function Home() {
//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen p-4">
//       <h1 className="text-3xl font-bold mb-4">HealthChain: Emergency Health Passport</h1>
//       <p className="text-lg mb-8">Your health information, always accessible.</p>
//       <a
//         href="/qrgen"
//         className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
//       >
//         Generate Your Health Passport
//       </a>
//     </main>
//   );
// }



import Image from 'next/image';
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main className="flex flex-col space-y-24 px-4 md:px-20 py-6 bg-grey">


      <section className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white-900">
            Your Life-Saving Data, Always Accessible
          </h1>
          <p className="text-white-700">
            In emergencies, every second counts. HealthChain makes your critical health
            information instantly accessible via a secure, decentralized QR code system—
            helping hospitals provide the right care when you can't speak for yourself.
          </p>
          <a
            href="/qrgen"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Generate Your Health Passport
          </a>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 md:ml-10">
          <Spline scene="https://prod.spline.design/1ujQqNAslHNpYHsy/scene.splinecode" />
        </div>
      </section>


      <section className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mt-10 md:mt-0 md:mr-10">
          <Spline scene="https://prod.spline.design/jLPQubEGbxGHj7C5/scene.splinecode" />
        </div>

        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white-900">
            Decentralized. Secure. Always Available.
          </h1>
          <p className="text-white-700">
            HealthChain uses blockchain and IPFS/Firebase to store your medical data safely.
            It’s tamper-proof, private, and made for emergencies.
          </p>
          <a
            href="/about"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Learn More
          </a>
        </div>
      </section>



      <section className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-4xl font-bold text-white-900 whitespace-nowrap">
            QR-Based Access to Your Health Data
          </h1>
          <p className="text-white-700">
            Generate a QR code linked to your health profile. Place it on your phone wallpaper,
            card, or accessory to make it scannable in emergencies.
          </p>
          <a
            href="/qrgen"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Learn More
          </a>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 ml-60">
          <Image
            src="/images/qr.png" // Save your image as doctor.png inside /public/images
            alt="QR-Based Access to Your Health Data"
            width={300}
            height={200}
            className="rounded-xl shadow-lg"
          />
        </div> 
      </section>

    </main>
  );
}