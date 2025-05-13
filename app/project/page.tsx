import Head from "next/head";

export default function Project() {
  return (
    <>
      <Head>
        <title>My Project | Rayhan</title>
        <meta name="description" content="Halaman project, Rayhan Atricha Rambe" />
      </Head>

      <main className="min-h-screen px-6 py-12 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto">

        

          {/* Intro */}
          <p className="text-lg mb-6">
            Halo! Saya Rayhan, seorang developer yang senang membangun aplikasi web dan produk digital. Saat ini fokus saya adalah React, Tailwind, dan React Native.
          </p>


          {/* Projects */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Project Unggulan</h2>
            <ul className="space-y-2">
              <li>
                📸 <strong>Web PhotoBox</strong> – Aplikasi untuk foto & cetak langsung dari browser.
              </li>
              <li>
                🧩 <strong>Template Canva</strong> – Desain siap pakai untuk UMKM dan personal branding.
              </li>
            </ul>
          </section>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="/#contact"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
