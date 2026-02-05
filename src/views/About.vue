<script setup lang="ts">
import {
  Target,
  Heart,
  CheckCircle2,
  MessageCircle,
  Mail,
  Clock,
  MapPin,
} from "lucide-vue-next";
</script>

<template>
  <div class="animate-fade-in py-12 px-4 max-w-7xl mx-auto">
    <!-- About Hero -->
    <div class="text-center mb-16 max-w-3xl mx-auto">
      <span
        class="text-brand-500 font-bold tracking-widest text-sm uppercase mb-2 block"
        >Our Story</span
      >
      <h1 class="font-display text-4xl md:text-5xl font-bold text-white mb-6">
        MENGUBAH GAME, <br />SATU JERSEY SETIAP WAKTU
      </h1>
      <p class="text-gray-400 text-lg leading-relaxed">
        Dari garasi kecil di Yogyakarta hingga melayani ribuan tim di seluruh
        Indonesia. Jerseyku lebih dari sekadar konveksi, kami adalah partner
        identitas tim Anda.
      </p>
    </div>

    <!-- Story & Vision -->
    <section class="grid md:grid-cols-2 gap-12 items-center mb-24">
      <div class="relative">
        <div
          class="absolute inset-0 bg-brand-500 rounded-2xl rotate-3 opacity-20 blur-sm"
        ></div>
        <img
          src="/images/hero/hero-stadium.jpg"
          alt="Tim Jerseyku Workshop Yogyakarta"
          loading="lazy"
          class="relative rounded-2xl shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>
      <div>
        <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span class="bg-brand-500/20 p-2 rounded text-brand-500"
            ><Target class="w-6 h-6"
          /></span>
          Visi Kami
        </h2>
        <p class="text-gray-300 leading-relaxed mb-8">
          Lahir pada tahun 2020, kami melihat kesenjangan besar antara jersey
          profesional yang mahal dan jersey murah berkualitas rendah. Visi kami
          sederhana:
          <strong
            >Mendemokratisasi kualitas pro player untuk semua kalangan.</strong
          >
        </p>

        <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span class="bg-brand-500/20 p-2 rounded text-brand-500"
            ><Heart class="w-6 h-6"
          /></span>
          Nilai Kami
        </h2>
        <ul class="space-y-4">
          <li class="flex items-start gap-3 text-gray-400 text-sm">
            <CheckCircle2 class="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
            <div>
              <strong class="text-white">Integritas Material:</strong> Tidak ada
              pengurangan gramasi kain demi keuntungan.
            </div>
          </li>
          <li class="flex items-start gap-3 text-gray-400 text-sm">
            <CheckCircle2 class="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
            <div>
              <strong class="text-white">Pemberdayaan Lokal:</strong> 100% SDM
              kami adalah pengrajin lokal Yogyakarta.
            </div>
          </li>
          <li class="flex items-start gap-3 text-gray-400 text-sm">
            <CheckCircle2 class="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
            <div>
              <strong class="text-white">Inovasi Desain:</strong> Selalu update
              dengan tren sportswear global.
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- Workshop Gallery (New Section) -->
    <section class="mb-24">
      <div class="text-center mb-10">
        <h2 class="font-display text-3xl font-bold text-white">
          DAPUR <span class="text-brand-500">PRODUKSI</span>
        </h2>
        <p class="text-gray-400">
          Intip bagaimana jersey berkualitas Anda dibuat.
        </p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
        <div
          class="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group"
        >
          <img
            src="/images/products/futsal-evo.jpg"
            alt="Proses Sublimation Printing Jersey"
            loading="lazy"
            class="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />
          <div
            class="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent w-full"
          >
            <p class="text-white font-bold">Sublimation Printing</p>
          </div>
        </div>
        <div class="relative rounded-2xl overflow-hidden group">
          <img
            src="/images/about/workshop-sewing.jpg"
            alt="Proses Jahit Jersey Premium"
            loading="lazy"
            class="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />
        </div>
        <div class="relative rounded-2xl overflow-hidden group">
          <img
            src="/images/about/workshop-finishing.jpg"
            alt="Proses Finishing Jersey"
            loading="lazy"
            class="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />
        </div>
        <div class="col-span-2 relative rounded-2xl overflow-hidden group">
          <img
            src="/images/about/workshop-qc.jpg"
            alt="Quality Control Jerseyku"
            loading="lazy"
            class="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />
          <div
            class="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent w-full"
          >
            <p class="text-white font-bold">Quality Control</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact & Map -->
    <section class="grid md:grid-cols-2 gap-8 mb-12">
      <div class="bg-brand-card p-8 rounded-2xl border border-white/5">
        <h3 class="text-xl font-bold text-white mb-6">Hubungi Kami</h3>
        <div class="space-y-6">
          <a
            href="https://wa.me/6281234567890?text=Halo%20Jerseyku%2C%20saya%20menghubungi%20melalui%20halaman%20Tentang%20Kami.%20Ada%20beberapa%20hal%20yang%20ingin%20saya%20tanyakan%20mengenai%20layanan%20Anda."
            class="flex items-center gap-4 group"
          >
            <div
              class="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all"
            >
              <MessageCircle class="w-6 h-6" />
            </div>
            <div>
              <p
                class="text-white font-bold group-hover:text-green-500 transition-colors"
              >
                WhatsApp Admin
              </p>
              <p class="text-gray-400 text-sm">
                0812-3456-7890 (Fast Response)
              </p>
            </div>
          </a>
          <a
            href="mailto:hello@jerseyku.id"
            class="flex items-center gap-4 group"
          >
            <div
              class="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all"
            >
              <Mail class="w-6 h-6" />
            </div>
            <div>
              <p
                class="text-white font-bold group-hover:text-blue-500 transition-colors"
              >
                Email Support
              </p>
              <p class="text-gray-400 text-sm">hello@jerseyku.id</p>
            </div>
          </a>
          <div class="flex items-center gap-4 group">
            <div
              class="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500"
            >
              <Clock class="w-6 h-6" />
            </div>
            <div>
              <p class="text-white font-bold">Jam Operasional</p>
              <p class="text-gray-400 text-sm">
                Senin - Sabtu (09.00 - 17.00 WIB)
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Mock Map -->
      <div
        class="bg-brand-surface rounded-2xl overflow-hidden border border-white/5 relative h-full min-h-[300px]"
      >
        <img
          src="/images/about/map-location.jpg"
          alt="Lokasi Workshop Jerseyku Yogyakarta"
          loading="lazy"
          class="w-full h-full object-cover opacity-50"
        />
        <div class="absolute inset-0 flex items-center justify-center">
          <div
            class="bg-brand-dark/90 backdrop-blur p-4 rounded-xl text-center border border-white/20 shadow-2xl"
          >
            <MapPin
              class="w-8 h-8 text-brand-500 mx-auto mb-2 animate-bounce"
            />
            <p class="text-white font-bold">Jerseyku Workshop</p>
            <p class="text-gray-400 text-xs">Yogyakarta, Indonesia</p>
            <button
              class="mt-3 bg-brand-500 text-white text-xs px-4 py-2 rounded-lg font-bold"
            >
              Buka di Maps
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
