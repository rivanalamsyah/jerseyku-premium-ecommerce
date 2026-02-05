<script setup lang="ts">
import { ref, reactive, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { products, type Product } from "@/data/products";
import {
  Home,
  Maximize2,
  Image as ImageIcon,
  Star,
  Ruler,
  Edit3,
  MessageCircle,
  ShoppingCart,
  CheckCircle,
  Shield,
  RefreshCw,
  Layers,
  Printer,
  Scissors,
  Shirt,
  ArrowRight,
} from "lucide-vue-next";

const route = useRoute();
const product = ref<Product | undefined>(undefined);
const activeTab = ref("desc");
const sizes = ["S", "M", "L", "XL", "XXL"];
const form = reactive({
  size: "L",
  customName: "",
  customNumber: "",
});

const formatPrice = (value: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
};

onMounted(() => {
  const id = parseInt(route.params.id as string);
  product.value = products.find((p) => p.id === id);
  window.scrollTo(0, 0);
});

const waMessage = computed(() => {
  if (!product.value) return "";
  let msg = `Halo Jerseyku, saya mau pesan:\n`;
  msg += `*${product.value.name}*\n`;
  msg += `Size: ${form.size}\n`;
  if (form.customName) msg += `Nama: ${form.customName.toUpperCase()}\n`;
  if (form.customNumber) msg += `No: ${form.customNumber}\n`;
  msg += `\nApakah stok tersedia?`;
  return msg;
});

const waLink = computed(() => {
  return `https://wa.me/6281234567890?text=${encodeURIComponent(waMessage.value)}`;
});
</script>

<template>
  <div v-if="product" class="animate-slide-up pb-24 md:pb-12">
    <div class="max-w-7xl mx-auto px-4 pt-8">
      <!-- Breadcrumb -->
      <div
        class="flex items-center gap-2 text-sm text-gray-500 mb-8 overflow-x-auto whitespace-nowrap"
      >
        <router-link to="/" class="hover:text-brand-400"
          ><Home class="w-3 h-3 inline mb-0.5"
        /></router-link>
        <span>/</span>
        <router-link to="/katalog" class="hover:text-brand-400"
          >Katalog</router-link
        >
        <span>/</span>
        <span class="text-white font-medium">{{ product.name }}</span>
      </div>

      <div class="grid md:grid-cols-2 gap-8 lg:gap-16 mb-16">
        <!-- Image Gallery -->
        <div class="space-y-4">
          <div
            class="aspect-[4/5] bg-brand-card rounded-2xl overflow-hidden border border-white/5 relative group"
          >
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute top-4 left-4 bg-brand-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg"
            >
              BEST SELLER
            </div>
            <button
              class="absolute bottom-4 right-4 bg-white/10 backdrop-blur p-2 rounded-full hover:bg-white/20 text-white transition-colors"
            >
              <Maximize2 class="w-5 h-5" />
            </button>
          </div>
          <div class="grid grid-cols-4 gap-4">
            <div
              class="aspect-square bg-brand-card rounded-xl overflow-hidden border-2 border-brand-500 cursor-pointer"
            >
              <img :src="product.image" class="w-full h-full object-cover" />
            </div>
            <div
              v-for="i in 3"
              :key="i"
              class="aspect-square bg-brand-card rounded-xl overflow-hidden border border-white/5 opacity-60 hover:opacity-100 cursor-pointer transition-all hover:border-brand-500/50"
            >
              <div
                class="w-full h-full bg-white/5 flex items-center justify-center text-gray-600"
              >
                <ImageIcon class="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        <!-- Config Area -->
        <div>
          <div class="mb-6">
            <h1
              class="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
            >
              {{ product.name }}
            </h1>
            <div class="flex items-center gap-4 mb-6">
              <div class="text-3xl font-mono font-bold text-brand-400">
                {{ formatPrice(product.price) }}
              </div>
              <div class="h-6 w-px bg-white/10"></div>
              <div class="flex items-center gap-1">
                <Star class="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span class="text-white font-bold">{{ product.rating }}</span>
                <span class="text-gray-500 text-sm"
                  >({{ product.sold }} Reviews)</span
                >
              </div>
            </div>
            <p class="text-gray-400 leading-relaxed text-sm">
              Jersey premium dengan cutting athletic fit yang modern. Cocok
              untuk kompetisi maupun casual sport. Desain eksklusif Jerseyku
              yang tidak pasaran.
            </p>
          </div>

          <div
            class="bg-brand-card/50 rounded-2xl p-6 border border-white/5 backdrop-blur-sm"
          >
            <!-- Size Selector -->
            <div class="mb-6">
              <div class="flex justify-between items-center mb-3">
                <label class="text-white font-semibold text-sm"
                  >Pilih Ukuran</label
                >
                <button
                  class="text-brand-400 text-xs hover:underline flex items-center gap-1"
                >
                  <Ruler class="w-3 h-3" /> Lihat Size Chart
                </button>
              </div>
              <div class="flex flex-wrap gap-3">
                <button
                  v-for="s in sizes"
                  :key="s"
                  @click="form.size = s"
                  :class="[
                    'w-12 h-12 rounded-xl font-bold border-2 transition-all flex items-center justify-center',
                    form.size === s
                      ? 'bg-brand-500 border-brand-500 text-white shadow-lg shadow-brand-500/20'
                      : 'bg-transparent border-white/10 text-gray-400 hover:border-brand-500/50 hover:text-white',
                  ]"
                >
                  {{ s }}
                </button>
              </div>
            </div>

            <!-- Custom Fields -->
            <div class="space-y-4 mb-6">
              <div class="flex items-center gap-2 mb-2">
                <div class="bg-brand-500/20 p-1.5 rounded text-brand-400">
                  <Edit3 class="w-4 h-4" />
                </div>
                <span class="text-white font-semibold text-sm"
                  >Personalisasi (Gratis)</span
                >
              </div>
              <div class="grid grid-cols-3 gap-4">
                <div class="col-span-2">
                  <label
                    class="block text-[10px] text-gray-500 uppercase tracking-wider mb-1.5 font-bold"
                    >Nama Punggung</label
                  >
                  <input
                    v-model="form.customName"
                    type="text"
                    placeholder="RONALDO"
                    class="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none uppercase tracking-wider text-sm transition-all placeholder-gray-600"
                  />
                </div>
                <div>
                  <label
                    class="block text-[10px] text-gray-500 uppercase tracking-wider mb-1.5 font-bold"
                    >Nomor</label
                  >
                  <input
                    v-model="form.customNumber"
                    type="number"
                    placeholder="07"
                    class="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none font-mono text-sm transition-all placeholder-gray-600"
                  />
                </div>
              </div>
            </div>

            <!-- Live Preview Message -->
            <div
              class="bg-green-900/10 p-4 rounded-xl border border-green-500/20 mb-6 relative overflow-hidden"
            >
              <div class="absolute top-0 right-0 p-2 opacity-10">
                <MessageCircle class="w-16 h-16 text-green-500" />
              </div>
              <p
                class="text-[10px] text-green-400 mb-1 font-bold uppercase tracking-wide"
              >
                Preview Order WhatsApp
              </p>
              <p class="text-gray-300 text-xs italic font-mono leading-relaxed">
                "{{ waMessage }}"
              </p>
            </div>

            <!-- Desktop CTA -->
            <div class="hidden md:flex flex-col gap-4">
              <a
                :href="waLink"
                target="_blank"
                class="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-4 rounded-xl text-center transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand-500/20 transform hover:-translate-y-1"
              >
                <ShoppingCart class="w-5 h-5" />
                Beli Sekarang via WhatsApp
              </a>
              <p class="text-center text-xs text-gray-500">
                Transaksi aman & terpercaya. Admin akan membalas detail pesanan.
              </p>
            </div>
          </div>

          <!-- Trust Badges (New Section) -->
          <div class="grid grid-cols-3 gap-4 mt-6 text-center">
            <div class="flex flex-col items-center gap-2">
              <CheckCircle class="w-5 h-5 text-brand-500" />
              <span class="text-xs text-gray-400">100% Original</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Shield class="w-5 h-5 text-brand-500" />
              <span class="text-xs text-gray-400">Garansi Kualitas</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <RefreshCw class="w-5 h-5 text-brand-500" />
              <span class="text-xs text-gray-400">Bisa Tukar Size</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Info Tabs (New Section: Tabs) -->
      <div class="border-t border-white/10 pt-10">
        <div
          class="flex gap-8 mb-8 overflow-x-auto pb-2 border-b border-white/5"
        >
          <button
            @click="activeTab = 'desc'"
            :class="[
              'pb-4 font-medium text-sm transition-colors whitespace-nowrap',
              activeTab === 'desc'
                ? 'text-brand-400 border-b-2 border-brand-400'
                : 'text-gray-500 hover:text-white',
            ]"
          >
            Deskripsi & Spesifikasi
          </button>
          <button
            @click="activeTab = 'size'"
            :class="[
              'pb-4 font-medium text-sm transition-colors whitespace-nowrap',
              activeTab === 'size'
                ? 'text-brand-400 border-b-2 border-brand-400'
                : 'text-gray-500 hover:text-white',
            ]"
          >
            Panduan Ukuran
          </button>
          <button
            @click="activeTab = 'review'"
            :class="[
              'pb-4 font-medium text-sm transition-colors whitespace-nowrap',
              activeTab === 'review'
                ? 'text-brand-400 border-b-2 border-brand-400'
                : 'text-gray-500 hover:text-white',
            ]"
          >
            Ulasan Pembeli (24)
          </button>
        </div>

        <div
          v-if="activeTab === 'desc'"
          class="grid md:grid-cols-2 gap-12 animate-fade-in"
        >
          <div>
            <h3 class="text-white font-bold mb-4">Detail Material</h3>
            <p class="text-gray-400 text-sm leading-relaxed mb-6">
              Dibuat menggunakan bahan Milano Drifit Premium yang memiliki
              pori-pori unik berbentuk zig-zag untuk sirkulasi udara maksimal.
              Teknologi Anti-UV dan Quick Dry menjaga tubuh tetap kering meski
              berkeringat deras.
            </p>
            <h3 class="text-white font-bold mb-4">Spesifikasi Teknis</h3>
            <ul class="space-y-3 text-sm text-gray-400">
              <li class="flex items-center gap-3">
                <Layers class="w-4 h-4 text-brand-500" /> Gramasi Kain: 160-170
                gsm (Tebal & Tidak Nerawang)
              </li>
              <li class="flex items-center gap-3">
                <Printer class="w-4 h-4 text-brand-500" /> Tinta: Epson Original
                (Sertifikasi Oeko-Tex)
              </li>
              <li class="flex items-center gap-3">
                <Scissors class="w-4 h-4 text-brand-500" /> Jahitan: Stick
                Overdeck & Rantai (Standar Distro)
              </li>
              <li class="flex items-center gap-3">
                <Shirt class="w-4 h-4 text-brand-500" /> Fitting: Regular Slim
                Fit
              </li>
            </ul>
          </div>
          <div class="bg-brand-card rounded-xl p-6 border border-white/5">
            <h3 class="text-white font-bold mb-4">Instruksi Perawatan</h3>
            <ul class="space-y-2 text-sm text-gray-400">
              <li>• Cuci dengan air dingin</li>
              <li>• Jangan gunakan pemutih</li>
              <li>• Hindari setrika langsung pada sablon</li>
              <li>• Jemur di tempat teduh</li>
            </ul>
          </div>
        </div>

        <div v-if="activeTab === 'size'" class="animate-fade-in">
          <div class="overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xs text-white uppercase bg-brand-card">
                <tr>
                  <th class="px-6 py-3">Size</th>
                  <th class="px-6 py-3">Lebar Dada (cm)</th>
                  <th class="px-6 py-3">Panjang Baju (cm)</th>
                  <th class="px-6 py-3">Rekomendasi BB (kg)</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-white/5 hover:bg-white/5">
                  <td class="px-6 py-4 font-bold text-white">S</td>
                  <td class="px-6 py-4">48</td>
                  <td class="px-6 py-4">68</td>
                  <td class="px-6 py-4">45 - 55</td>
                </tr>
                <tr class="border-b border-white/5 hover:bg-white/5">
                  <td class="px-6 py-4 font-bold text-white">M</td>
                  <td class="px-6 py-4">50</td>
                  <td class="px-6 py-4">70</td>
                  <td class="px-6 py-4">55 - 65</td>
                </tr>
                <tr class="border-b border-white/5 hover:bg-white/5">
                  <td class="px-6 py-4 font-bold text-white">L</td>
                  <td class="px-6 py-4">52</td>
                  <td class="px-6 py-4">72</td>
                  <td class="px-6 py-4">65 - 75</td>
                </tr>
                <tr class="border-b border-white/5 hover:bg-white/5">
                  <td class="px-6 py-4 font-bold text-white">XL</td>
                  <td class="px-6 py-4">54</td>
                  <td class="px-6 py-4">74</td>
                  <td class="px-6 py-4">75 - 85</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-gray-500 mt-4">
            *Toleransi ukuran 1-2 cm karena proses jahit.
          </p>
        </div>

        <div v-if="activeTab === 'review'" class="animate-fade-in space-y-4">
          <!-- Dummy Reviews -->
          <div class="bg-brand-card p-4 rounded-xl border border-white/5">
            <div class="flex justify-between items-start mb-2">
              <div class="flex items-center gap-2">
                <div
                  class="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center text-white font-bold text-xs"
                >
                  AD
                </div>
                <div>
                  <p class="text-white text-sm font-bold">Adi Nugroho</p>
                  <p class="text-gray-500 text-xs">Varian: L, Custom Name</p>
                </div>
              </div>
              <div class="flex text-yellow-500">
                <Star class="w-3 h-3 fill-current" /><Star
                  class="w-3 h-3 fill-current"
                /><Star class="w-3 h-3 fill-current" /><Star
                  class="w-3 h-3 fill-current"
                /><Star class="w-3 h-3 fill-current" />
              </div>
            </div>
            <p class="text-gray-300 text-sm">
              "Barang sampai dengan selamat. Kualitas kainnya juara, dingin
              dipake lari siang bolong."
            </p>
          </div>
          <div class="bg-brand-card p-4 rounded-xl border border-white/5">
            <div class="flex justify-between items-start mb-2">
              <div class="flex items-center gap-2">
                <div
                  class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs"
                >
                  BP
                </div>
                <div>
                  <p class="text-white text-sm font-bold">Budi Prakoso</p>
                  <p class="text-gray-500 text-xs">Varian: XL</p>
                </div>
              </div>
              <div class="flex text-yellow-500">
                <Star class="w-3 h-3 fill-current" /><Star
                  class="w-3 h-3 fill-current"
                /><Star class="w-3 h-3 fill-current" /><Star
                  class="w-3 h-3 fill-current"
                /><Star class="w-3 h-3 fill-current" />
              </div>
            </div>
            <p class="text-gray-300 text-sm">
              "Pengiriman cepat, admin ramah. Next order buat satu tim."
            </p>
          </div>
        </div>
      </div>

      <!-- Related Products (New Section) -->
      <div class="mt-20">
        <h3 class="font-display text-2xl font-bold text-white mb-6">
          PRODUK <span class="text-brand-500">SERUPA</span>
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            class="bg-brand-card rounded-xl overflow-hidden border border-white/5 hover:border-brand-500/50 transition-all opacity-80 hover:opacity-100 cursor-pointer"
          >
            <img
              src="/images/gallery/production-detail.jpg"
              class="w-full aspect-square object-cover"
            />
            <div class="p-3">
              <h4 class="text-white text-sm font-bold truncate">
                Jersey T-Shirt Casual
              </h4>
              <p class="text-brand-500 text-xs font-mono">Rp 125.000</p>
            </div>
          </div>
          <div
            class="bg-brand-card rounded-xl overflow-hidden border border-white/5 hover:border-brand-500/50 transition-all opacity-80 hover:opacity-100 cursor-pointer"
          >
            <img
              src="/images/products/esport-pro.jpg"
              class="w-full aspect-square object-cover"
            />
            <div class="p-3">
              <h4 class="text-white text-sm font-bold truncate">
                Jersey Retro Classic
              </h4>
              <p class="text-brand-500 text-xs font-mono">Rp 165.000</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Sticky CTA -->
    <div
      class="fixed bottom-0 left-0 w-full bg-brand-dark/90 backdrop-blur-md p-4 border-t border-white/10 md:hidden z-50 flex items-center gap-4 pb-6 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]"
    >
      <div class="flex-1">
        <p class="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">
          Total Estimasi
        </p>
        <p class="text-xl font-bold text-brand-500 font-mono leading-none">
          {{ formatPrice(product.price) }}
        </p>
      </div>
      <a
        :href="waLink"
        target="_blank"
        class="flex-[1.5] bg-brand-600 text-white font-bold py-3 px-6 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-500/20 active:scale-95 transition-transform"
      >
        Beli <ArrowRight class="w-4 h-4" />
      </a>
    </div>
  </div>
  <div v-else class="min-h-[70vh] flex flex-col items-center justify-center">
    <div
      class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-500 mb-4"
    ></div>
    <p class="text-gray-500 animate-pulse">Memuat Produk...</p>
  </div>
</template>
