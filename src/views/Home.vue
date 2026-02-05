<script setup lang="ts">
import { computed } from "vue";
import { products } from "@/data/products";
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  PenTool,
  Zap,
  Truck,
  Star,
} from "lucide-vue-next";

const featuredProducts = computed(() => products.slice(0, 4));
const formatPrice = (value: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
};
</script>

<template>
  <div class="animate-fade-in">
    <!-- Hero Section -->
    <section
      class="relative h-[650px] flex items-center justify-center overflow-hidden"
    >
      <div class="absolute inset-0">
        <img
          src="/images/hero/hero-stadium.jpg"
          alt="Hero Background"
          class="w-full h-full object-cover opacity-40"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent"
        ></div>
      </div>
      <div class="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div
          class="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-brand-500/10 text-brand-400 text-sm font-semibold mb-6 border border-brand-500/30 backdrop-blur-sm animate-slide-up"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"
            ></span>
            <span
              class="relative inline-flex rounded-full h-2 w-2 bg-brand-500"
            ></span>
          </span>
          #1 Custom Jersey Maker in Indonesia
        </div>
        <h1
          class="font-display text-5xl md:text-8xl font-bold mb-6 text-white leading-tight animate-fade-in"
        >
          BUAT JERSEY<br /><span class="text-brand-500">IDENTITASMU</span>
        </h1>
        <p
          class="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Platform pembuatan jersey custom dengan kualitas bahan premium,
          jahitan rapi, dan desain suka-suka. Cocok untuk tim futsal, esport,
          komunitas lari, dan perusahaan.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            @click="$router.push('/katalog')"
            class="bg-brand-500 hover:bg-brand-600 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg shadow-brand-500/30 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            Lihat Katalog <ArrowRight class="w-5 h-5" />
          </button>
          <a
            href="https://wa.me/6281234567890?text=Halo%20Jerseyku%2C%20saya%20tertarik%20untuk%20konsultasi%20pembuatan%20jersey%20custom.%20Mohon%20info%20selengkapnya%20ya!"
            class="bg-white/5 hover:bg-white/10 text-white font-semibold py-4 px-10 rounded-full border border-white/20 backdrop-blur-sm transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle class="w-5 h-5" /> Konsultasi Gratis
          </a>
        </div>
      </div>
    </section>

    <!-- Trusted By (New Section) -->
    <section class="py-10 border-b border-white/5 bg-brand-card/30">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <p
          class="text-gray-500 text-sm uppercase tracking-widest mb-6 font-semibold"
        >
          Dipercaya oleh 500+ Tim & Komunitas
        </p>
        <div
          class="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
        >
          <div class="text-2xl font-display font-bold text-white">
            TEAM<span class="text-brand-500">RRQ</span>
          </div>
          <div class="text-2xl font-display font-bold text-white">
            EVOS<span class="text-brand-500">ID</span>
          </div>
          <div class="text-2xl font-display font-bold text-white">
            PERSJA<span class="text-brand-500">FC</span>
          </div>
          <div class="text-2xl font-display font-bold text-white">
            RUN<span class="text-brand-500">JKT</span>
          </div>
          <div class="text-2xl font-display font-bold text-white">
            GO<span class="text-brand-500">WES</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Value Proposition (Enhanced) -->
    <section class="py-20 bg-brand-card relative overflow-hidden">
      <!-- Decor element -->
      <div
        class="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
      ></div>

      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <h2 class="font-display text-4xl font-bold text-white mb-4">
            KENAPA MEMILIH <span class="text-brand-500">JERSEYKU?</span>
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto">
            Kami tidak hanya menjual jersey, kami memberikan pengalaman dan
            kualitas yang meningkatkan kepercayaan diri tim Anda.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            class="p-8 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/5 hover:border-brand-500/30 group"
          >
            <div
              class="w-14 h-14 bg-brand-500/20 rounded-xl flex items-center justify-center mb-6 text-brand-400 group-hover:scale-110 transition-transform"
            >
              <ShieldCheck class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Premium Material</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Menggunakan bahan Drifit Milano & Brazil yang anti-bakteri, cepat
              kering, dan ringan saat dipakai.
            </p>
          </div>
          <div
            class="p-8 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/5 hover:border-brand-500/30 group"
          >
            <div
              class="w-14 h-14 bg-brand-500/20 rounded-xl flex items-center justify-center mb-6 text-brand-400 group-hover:scale-110 transition-transform"
            >
              <PenTool class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Full Custom</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Bebas request desain, logo, nama, dan nomor punggung tanpa biaya
              tambahan. Ekspresikan gayamu.
            </p>
          </div>
          <div
            class="p-8 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/5 hover:border-brand-500/30 group"
          >
            <div
              class="w-14 h-14 bg-brand-500/20 rounded-xl flex items-center justify-center mb-6 text-brand-400 group-hover:scale-110 transition-transform"
            >
              <Zap class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Produksi Kilat</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Didukung mesin sublimasi Epson terbaru, kami menjamin ketajaman
              warna dan kecepatan produksi 7 hari kerja.
            </p>
          </div>
          <div
            class="p-8 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/5 hover:border-brand-500/30 group"
          >
            <div
              class="w-14 h-14 bg-brand-500/20 rounded-xl flex items-center justify-center mb-6 text-brand-400 group-hover:scale-110 transition-transform"
            >
              <Truck class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Garansi Retur</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Salah ukuran atau cacat produksi? Kami ganti baru 100% tanpa
              ribet. Kepuasan Anda prioritas kami.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4">
        <div
          class="flex flex-col md:flex-row justify-between items-end mb-10 gap-4"
        >
          <div>
            <h2 class="font-display text-4xl font-bold text-white mb-2">
              KOLEKSI <span class="text-brand-500">TERLARIS</span>
            </h2>
            <p class="text-gray-400">
              Pilihan favorit dari pelanggan kami bulan ini.
            </p>
          </div>
          <router-link
            to="/katalog"
            class="text-brand-400 font-bold hover:text-brand-300 hidden md:flex items-center gap-2 border-b border-brand-400/30 pb-1 hover:border-brand-400 transition-all"
          >
            Lihat Semua Katalog <ArrowRight class="w-4 h-4" />
          </router-link>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          <article
            v-for="product in featuredProducts"
            :key="product.id"
            @click="$router.push('/produk/' + product.id)"
            class="group cursor-pointer"
          >
            <div
              class="relative bg-brand-card rounded-2xl overflow-hidden aspect-[4/5] mb-4 border border-white/5"
            >
              <img
                :src="product.image"
                :alt="product.name + ' - Custom Jersey Premium'"
                loading="lazy"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"
              ></div>
              <div v-if="!product.stock" class="absolute top-3 right-3">
                <span
                  class="bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg"
                  >Sold Out</span
                >
              </div>
              <div
                class="absolute bottom-4 left-4 right-4 flex justify-between items-end"
              >
                <span
                  class="bg-white/10 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-white flex items-center gap-1 border border-white/20"
                >
                  <Star class="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  {{ product.rating }}
                </span>
                <button
                  class="bg-brand-500 p-2 rounded-full text-white shadow-lg translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <ArrowRight class="w-4 h-4" />
                </button>
              </div>
            </div>
            <h3
              class="text-white text-lg font-bold truncate group-hover:text-brand-400 transition-colors mb-1"
            >
              {{ product.name }}
            </h3>
            <p class="text-brand-500 font-mono font-bold">
              {{ formatPrice(product.price) }}
            </p>
          </article>
        </div>

        <div class="mt-10 text-center md:hidden">
          <router-link
            to="/katalog"
            class="inline-block w-full border border-brand-500 text-brand-500 font-bold py-3 px-6 rounded-xl hover:bg-brand-500 hover:text-white transition-colors"
            >Lihat Semua Katalog</router-link
          >
        </div>
      </div>
    </section>

    <!-- Real Results Gallery (New Section) -->
    <section class="py-20 bg-brand-card border-y border-white/5">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="font-display text-4xl font-bold text-white mb-4">
            HASIL <span class="text-brand-500">PRODUKSI</span>
          </h2>
          <p class="text-gray-400">
            Bukti nyata kualitas jersey yang telah kami kerjakan.
          </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="aspect-square rounded-xl overflow-hidden group relative">
            <img
              src="/images/products/futsal-evo.jpg"
              alt="Hasil Produksi Jersey Futsal"
              loading="lazy"
              class="w-full h-full object-cover transition duration-500 group-hover:scale-110 grayscale hover:grayscale-0"
            />
          </div>
          <div
            class="aspect-square rounded-xl overflow-hidden group relative md:col-span-2 md:row-span-2"
          >
            <img
              src="/images/gallery/production-detail.jpg"
              alt="Detail Produksi Jerseyku"
              loading="lazy"
              class="w-full h-full object-cover transition duration-500 group-hover:scale-110 grayscale hover:grayscale-0"
            />
            <div
              class="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300"
            >
              <span
                class="text-white font-bold border-2 border-white px-4 py-2 rounded uppercase tracking-widest"
                >Detail Sablon</span
              >
            </div>
          </div>
          <div class="aspect-square rounded-xl overflow-hidden group relative">
            <img
              src="/images/products/basket-urban.jpg"
              alt="Hasil Produksi Jersey Basket"
              loading="lazy"
              class="w-full h-full object-cover transition duration-500 group-hover:scale-110 grayscale hover:grayscale-0"
            />
          </div>
          <div class="aspect-square rounded-xl overflow-hidden group relative">
            <img
              src="/images/products/bike-aero.jpg"
              alt="Hasil Produksi Jersey Lari"
              loading="lazy"
              class="w-full h-full object-cover transition duration-500 group-hover:scale-110 grayscale hover:grayscale-0"
            />
          </div>
          <div class="aspect-square rounded-xl overflow-hidden group relative">
            <img
              src="/images/products/training-navy.jpg"
              alt="Hasil Produksi Training Kit"
              loading="lazy"
              class="w-full h-full object-cover transition duration-500 group-hover:scale-110 grayscale hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials (Updated Design) -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="font-display text-4xl font-bold text-white mb-12">
          KATA <span class="text-brand-500">MEREKA</span>
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div
            class="bg-brand-card p-8 rounded-2xl border border-white/5 relative hover:-translate-y-2 transition-transform duration-300"
          >
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-gray-600 rounded-full overflow-hidden">
                <img
                  src="/images/testimonials/avatar1.jpg"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="text-left">
                <h4 class="text-white font-bold text-sm">Dimas Pratama</h4>
                <p class="text-brand-500 text-xs">Kapten Futsal FC</p>
              </div>
            </div>
            <div class="flex text-yellow-500 mb-4">
              <Star class="w-4 h-4 fill-current" />
              <Star class="w-4 h-4 fill-current" />
              <Star class="w-4 h-4 fill-current" />
              <Star class="w-4 h-4 fill-current" />
              <Star class="w-4 h-4 fill-current" />
            </div>
            <p class="text-gray-300 italic text-sm text-left leading-relaxed">
              "Bahannya adem banget buat main futsal indoor, sablonnya juga awet
              udah dicuci berkali-kali. Recommended banget buat yang mau bikin
              jersey tim!"
            </p>
          </div>

          <div
            class="bg-brand-card p-8 rounded-2xl border border-white/5 relative hover:-translate-y-2 transition-transform duration-300"
          >
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-gray-600 rounded-full overflow-hidden">
                <img
                  src="/images/testimonials/avatar2.jpg"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="text-left">
                <h4 class="text-white font-bold text-sm">Sarah Amelia</h4>
                <p class="text-brand-500 text-xs">Komunitas Lari Jogja</p>
              </div>
            </div>
            <div class="flex text-yellow-500 mb-4">
              <Star class="w-4 h-4 fill-current" />
              <Star class="w-4 h-4 fill-current" />
              <Star class="w-4 h-4 fill-current" />
              <Star class="w-4 h-4 fill-current" />
              <Star class="w-4 h-4 fill-current" />
            </div>
            <p class="text-gray-300 italic text-sm text-left leading-relaxed">
              "Pengerjaan tepat waktu, adminnya ramah banget bantuin revisi
              desain dari nol sampai jadi. Hasilnya persis sama mockup."
            </p>
          </div>

          <div
            class="bg-brand-card p-8 rounded-2xl border border-white/5 relative hover:-translate-y-2 transition-transform duration-300"
          >
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-gray-600 rounded-full overflow-hidden">
                <img
                  src="/images/testimonials/avatar3.jpg"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="text-left">
                <h4 class="text-white font-bold text-sm">Rizky Ramadhan</h4>
                <p class="text-brand-500 text-xs">Manager Esport</p>
              </div>
            </div>
            <div class="flex text-yellow-500 mb-4">
              <Star class="w-4 h-4 fill-current" />
              <Star class="w-4 h-4 fill-current" />
              <Star class="w-4 h-4 fill-current" />
              <Star class="w-4 h-4 fill-current" />
              <Star class="w-4 h-4 fill-current" />
            </div>
            <p class="text-gray-300 italic text-sm text-left leading-relaxed">
              "Harga pelajar tapi kualitas pemain pro. Detail kerahnya rapi,
              fittingnya pas di badan. Mantap Jerseyku!"
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Banner (New Section) -->
    <section class="py-12 px-4">
      <div
        class="max-w-6xl mx-auto bg-gradient-to-r from-brand-600 to-brand-500 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div
          class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"
        ></div>
        <div class="relative z-10 text-center md:text-left">
          <h2 class="text-3xl font-display font-bold text-white mb-2">
            SIAP TAMPIL BEDA?
          </h2>
          <p class="text-brand-50 max-w-lg">
            Dapatkan diskon 10% untuk pemesanan pertama tim kamu. Gunakan kode:
            <span class="font-mono font-bold bg-white/20 px-2 rounded"
              >TIMBARU</span
            >
          </p>
        </div>
        <div class="relative z-10">
          <a
            href="https://wa.me/6281234567890?text=Halo%20Jerseyku%2C%20saya%20ingin%20klaim%20diskon%2010%25%20untuk%20tim%20saya.%20Mohon%20bantuannya%20untuk%20proses%20order%20desain%20custom."
            class="bg-brand-dark text-white font-bold py-4 px-8 rounded-xl hover:bg-gray-900 transition-all shadow-xl flex items-center gap-2"
          >
            Konsultasi Sekarang <ArrowRight class="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
