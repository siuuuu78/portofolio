import Head from "next/head";
import Image from "next/image";
import { FaReact, FaGithub, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiCanva, SiAdobephotoshop } from "react-icons/si";

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>About Me | Rayhan</title>
        <meta name="description" content="Halaman tentang saya, Rayhan Atricha Rambe" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
              {/* Ganti dengan foto Anda atau gunakan placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white text-5xl font-bold">
                R
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
                Rayhan Atricha Rambe
              </h1>
              <p className="text-lg text-gray-600 mb-4">Frontend Developer & UI Designer</p>
              <div className="flex gap-3 justify-center md:justify-start">
                {/* Ganti dengan sosial media Anda */}
                <a href="https://github.com/yourusername" className="text-gray-600 hover:text-blue-500 transition p-2">
                  <FaGithub size={24} />
                </a>
                <a href="https://linkedin.com/in/yourusername" className="text-gray-600 hover:text-blue-500 transition p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Intro */}
          <div className="bg-white rounded-2xl shadow-md p-8 mb-8 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Tentang Saya</h2>
            <p className="text-lg leading-relaxed">
              Halo! Saya Rayhan, seorang developer yang senang membangun aplikasi web dan produk digital. Saya memiliki 
              passion untuk menciptakan pengalaman pengguna yang menarik dan fungsional. Saat ini fokus saya adalah React, 
              Tailwind, dan React Native untuk membangun aplikasi yang responsif dan mudah digunakan.
            </p>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-2xl shadow-md p-8 mb-8 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">Skill & Tools</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-blue-50 transition">
                <div className="text-blue-500 p-3 bg-blue-100 rounded-full">
                  <FaReact size={28} />
                </div>
                <span className="font-medium">React & React Native</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-blue-50 transition">
                <div className="text-blue-500 p-3 bg-blue-100 rounded-full">
                  <SiTailwindcss size={28} />
                </div>
                <span className="font-medium">Tailwind CSS</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-blue-50 transition">
                <div className="text-blue-500 p-3 bg-blue-100 rounded-full">
                  <FaFigma size={28} />
                </div>
                <span className="font-medium">Figma</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-blue-50 transition">
                <div className="text-blue-500 p-3 bg-blue-100 rounded-full">
                  <FaGithub size={28} />
                </div>
                <span className="font-medium">Git & GitHub</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-blue-50 transition">
                <div className="text-blue-500 p-3 bg-blue-100 rounded-full">
                  <SiCanva size={28} />
                </div>
                <span className="font-medium">Canva</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-blue-50 transition">
                <div className="text-blue-500 p-3 bg-blue-100 rounded-full">
                  <SiAdobephotoshop size={28} />
                </div>
                <span className="font-medium">Photoshop</span>
              </div>
            </div>
          </div>

          {/* Goals */}
          <div className="bg-white rounded-2xl shadow-md p-8 mb-8 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Goals</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg">Membangun Bisnis Digital</h3>
                  <p className="text-gray-600">Menciptakan produk digital yang bermanfaat dan membangun bisnis yang berkelanjutan</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg">Terus Belajar</h3>
                  <p className="text-gray-600">Mempelajari teknologi baru dan meningkatkan skill untuk tetap relevan dalam industri</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg">Berbagi Lewat Karya</h3>
                  <p className="text-gray-600">Membagikan pengetahuan dan pengalaman melalui konten dan projek yang bermanfaat</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="/#contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 font-medium"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </main>
    </>
  );
}