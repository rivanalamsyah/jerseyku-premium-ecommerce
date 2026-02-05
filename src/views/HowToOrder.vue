<script setup lang="ts">
import { reactive } from "vue";
import {
  PenTool,
  ClipboardList,
  Settings,
  PackageCheck,
  CreditCard,
  Truck,
  ChevronDown,
  ChevronUp,
  HelpCircle,
} from "lucide-vue-next";

const faqs = reactive([
  {
    q: "Apakah bisa beli satuan?",
    a: "Bisa! Untuk produk Ready Stock di katalog bisa dibeli satuan. Untuk Custom Desain, minimal order 12 pcs, namun kami melayani pembuatan sampel (mockup fisik) berbayar sebelum produksi massal.",
    open: false,
  },
  {
    q: "Berapa lama pengerjaannya?",
    a: "Estimasi standar produksi adalah 10-14 hari kerja setelah DP dan data fix. Kami juga menyediakan layanan Priority (7 hari kerja) dengan biaya tambahan.",
    open: false,
  },
  {
    q: "Apakah desain bisa dibantu?",
    a: "Tentu! Kami menyediakan jasa desain GRATIS untuk pemesanan tim (min. 12 pcs). Cukup kirimkan sketsa kasar atau referensi gambar dari Google/Instagram.",
    open: false,
  },
  {
    q: "Bagaimana jika hasil tidak sesuai?",
    a: "Kami memberikan garansi 100%. Jika kesalahan ada pada pihak kami (salah size, salah nama, cacat kain), kami akan ganti baru atau refund dana Anda.",
    open: false,
  },
]);

const toggleFaq = (index: number) => {
  faqs[index].open = !faqs[index].open;
};
</script>

<template>
  <div class="animate-fade-in py-12 px-4 max-w-4xl mx-auto mb-20">
    <div class="text-center mb-16">
      <span
        class="text-brand-500 font-bold tracking-widest text-sm uppercase mb-2 block"
        >Panduan Lengkap</span
      >
      <h1 class="font-display text-4xl font-bold text-white mb-4">
        CARA PEMESANAN
      </h1>
      <p class="text-gray-400">
        Ikuti 4 langkah mudah ini untuk mewujudkan jersey impian tim Anda.
      </p>
    </div>

    <!-- Steps Vertical (Enhanced) -->
    <div
      class="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-dark before:via-brand-500 before:to-brand-dark mb-24"
    >
      <!-- Step 1 -->
      <div
        class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
      >
        <div
          class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-brand-dark bg-brand-500 shadow-[0_0_20px_rgba(16,185,129,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold text-brand-dark z-10"
        >
          1
        </div>
        <div
          class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-brand-card p-8 rounded-2xl border border-white/5 shadow-xl relative overflow-hidden group-hover:-translate-y-1 transition-transform"
        >
          <div class="absolute top-0 right-0 p-4 opacity-5">
            <PenTool class="w-24 h-24" />
          </div>
          <h3 class="font-bold text-white text-xl mb-3 text-brand-400">
            Konsultasi Desain
          </h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-4">
            Pilih model dari katalog kami atau kirimkan referensi desain Anda
            sendiri. Tim desainer kami akan membuatkan mockup digital 3D gratis
            untuk Anda.
          </p>
          <div
            class="text-xs bg-white/5 inline-block px-3 py-1 rounded text-gray-300 border border-white/10"
          >
            Estimasi: 1 Hari
          </div>
        </div>
      </div>

      <!-- Step 2 -->
      <div
        class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
      >
        <div
          class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-brand-dark bg-brand-500 shadow-[0_0_20px_rgba(16,185,129,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold text-brand-dark z-10"
        >
          2
        </div>
        <div
          class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-brand-card p-8 rounded-2xl border border-white/5 shadow-xl relative overflow-hidden group-hover:-translate-y-1 transition-transform"
        >
          <div class="absolute top-0 right-0 p-4 opacity-5">
            <ClipboardList class="w-24 h-24" />
          </div>
          <h3 class="font-bold text-white text-xl mb-3 text-brand-400">
            Data & Down Payment
          </h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-4">
            Kirimkan data ukuran (S/M/L/XL), nama punggung, dan nomor pemain
            dalam format Excel/List WA. Lakukan pembayaran DP minimal 50%.
          </p>
          <div
            class="text-xs bg-white/5 inline-block px-3 py-1 rounded text-gray-300 border border-white/10"
          >
            Syarat: Fix Data
          </div>
        </div>
      </div>

      <!-- Step 3 -->
      <div
        class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
      >
        <div
          class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-brand-dark bg-brand-500 shadow-[0_0_20px_rgba(16,185,129,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold text-brand-dark z-10"
        >
          3
        </div>
        <div
          class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-brand-card p-8 rounded-2xl border border-white/5 shadow-xl relative overflow-hidden group-hover:-translate-y-1 transition-transform"
        >
          <div class="absolute top-0 right-0 p-4 opacity-5">
            <Settings class="w-24 h-24" />
          </div>
          <h3 class="font-bold text-white text-xl mb-3 text-brand-400">
            Proses Produksi
          </h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-4">
            Pesanan masuk antrian produksi (Cetak Pola -> Sublimasi -> Press ->
            Jahit -> QC). Kami akan mengupdate progress secara berkala.
          </p>
          <div
            class="text-xs bg-white/5 inline-block px-3 py-1 rounded text-gray-300 border border-white/10"
          >
            Waktu: 10-14 Hari Kerja
          </div>
        </div>
      </div>

      <!-- Step 4 -->
      <div
        class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
      >
        <div
          class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-brand-dark bg-brand-500 shadow-[0_0_20px_rgba(16,185,129,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold text-brand-dark z-10"
        >
          4
        </div>
        <div
          class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-brand-card p-8 rounded-2xl border border-white/5 shadow-xl relative overflow-hidden group-hover:-translate-y-1 transition-transform"
        >
          <div class="absolute top-0 right-0 p-4 opacity-5">
            <PackageCheck class="w-24 h-24" />
          </div>
          <h3 class="font-bold text-white text-xl mb-3 text-brand-400">
            Pelunasan & Pengiriman
          </h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-4">
            Admin mengirimkan foto/video hasil jadi. Setelah pelunasan, barang
            langsung dikirim melalui ekspedisi pilihan Anda ke seluruh
            Indonesia.
          </p>
          <div
            class="text-xs bg-white/5 inline-block px-3 py-1 rounded text-gray-300 border border-white/10"
          >
            Status: Siap Kirim
          </div>
        </div>
      </div>
    </div>

    <!-- Payment & Shipping (New Section) -->
    <div class="grid md:grid-cols-2 gap-8 mb-24">
      <div class="bg-brand-surface p-6 rounded-2xl border border-white/5">
        <h3 class="text-white font-bold mb-4 flex items-center gap-2">
          <CreditCard class="w-5 h-5 text-brand-500" /> Pembayaran
        </h3>
        <div class="grid grid-cols-3 gap-3">
          <div
            class="bg-white p-2 rounded h-12 flex items-center justify-center"
          >
            <span class="text-blue-800 font-bold font-sans">BCA</span>
          </div>
          <div
            class="bg-white p-2 rounded h-12 flex items-center justify-center"
          >
            <span class="text-blue-600 font-bold font-sans">MANDIRI</span>
          </div>
          <div
            class="bg-white p-2 rounded h-12 flex items-center justify-center"
          >
            <span class="text-orange-500 font-bold font-sans">BRI</span>
          </div>
          <div
            class="bg-white p-2 rounded h-12 flex items-center justify-center"
          >
            <span class="text-blue-400 font-bold font-sans">DANA</span>
          </div>
          <div
            class="bg-white p-2 rounded h-12 flex items-center justify-center"
          >
            <span class="text-green-500 font-bold font-sans">GOPAY</span>
          </div>
        </div>
      </div>
      <div class="bg-brand-surface p-6 rounded-2xl border border-white/5">
        <h3 class="text-white font-bold mb-4 flex items-center gap-2">
          <Truck class="w-5 h-5 text-brand-500" /> Ekspedisi
        </h3>
        <div class="grid grid-cols-3 gap-3">
          <div
            class="bg-white p-2 rounded h-12 flex items-center justify-center"
          >
            <span class="text-red-600 font-bold italic">JNE</span>
          </div>
          <div
            class="bg-white p-2 rounded h-12 flex items-center justify-center"
          >
            <span class="text-red-500 font-bold">J&T</span>
          </div>
          <div
            class="bg-white p-2 rounded h-12 flex items-center justify-center"
          >
            <span class="text-orange-500 font-bold">SiCepat</span>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ Dropdowns -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white text-center mb-8">
        Pertanyaan Umum (FAQ)
      </h2>

      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="group bg-brand-card rounded-xl border border-white/5 overflow-hidden transition-all"
      >
        <button
          @click="toggleFaq(index)"
          class="flex justify-between items-center w-full p-5 text-left"
        >
          <span
            class="font-medium text-white group-hover:text-brand-400 transition-colors"
            >{{ faq.q }}</span
          >
          <ChevronUp v-if="faq.open" class="w-5 h-5 text-gray-400" />
          <ChevronDown v-else class="w-5 h-5 text-gray-400" />
        </button>
        <div
          v-show="faq.open"
          class="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-3 animate-fade-in"
        >
          {{ faq.a }}
        </div>
      </div>
    </div>

    <!-- Help Center CTA -->
    <div class="mt-16 text-center">
      <p class="text-gray-400 mb-4">Masih punya pertanyaan lain?</p>
      <a
        href="https://wa.me/6281234567890?text=Halo%20Customer%20Service%20Jerseyku%2C%20saya%20sudah%20membaca%20panduan%20pemesanan%20tetapi%20masih%20ada%20kendala%20atau%20pertanyaan.%20Mohon%20bantuannya."
        class="inline-flex items-center gap-2 text-brand-500 font-bold hover:underline"
      >
        <HelpCircle class="w-5 h-5" /> Hubungi Customer Service
      </a>
    </div>
  </div>
</template>
