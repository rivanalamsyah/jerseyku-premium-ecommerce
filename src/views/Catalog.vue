<script setup lang="ts">
import { ref, computed } from "vue";
import { products } from "@/data/products";
import { SlidersHorizontal, ShoppingBag, Star, SearchX } from "lucide-vue-next";

const selectedCategory = ref("Semua");
const sortBy = ref("newest");
const categories = ["Semua", "Futsal", "Lari", "Esport", "Basket", "Sepeda"];

const filteredProducts = computed(() => {
  let result = products;

  if (selectedCategory.value !== "Semua") {
    result = result.filter((p) => p.category === selectedCategory.value);
  }

  if (sortBy.value === "price_low") {
    result = [...result].sort((a, b) => a.price - b.price);
  } else if (sortBy.value === "price_high") {
    result = [...result].sort((a, b) => b.price - a.price);
  } else if (sortBy.value === "bestseller") {
    result = [...result].sort((a, b) => b.sold - a.sold);
  } else {
    result = [...result].sort((a, b) => b.id - a.id);
  }

  return result;
});

const formatPrice = (value: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
};
</script>

<template>
  <div class="animate-fade-in pb-20">
    <!-- Catalog Hero (New Section) -->
    <div
      class="relative bg-brand-card border-b border-white/5 pt-12 pb-20 mb-8 overflow-hidden"
    >
      <div
        class="absolute top-0 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"
      ></div>
      <div class="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <h1 class="font-display text-5xl font-bold text-white mb-4">
          KATALOG <span class="text-brand-500">RESMI</span>
        </h1>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Jelajahi ratusan desain jersey siap pakai. Filter berdasarkan kategori
          favoritmu atau urutkan berdasarkan popularitas.
        </p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
      <!-- Filters -->
      <div
        class="bg-brand-dark/95 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-2xl mb-8"
      >
        <div
          class="flex flex-col md:flex-row gap-4 justify-between items-center"
        >
          <div
            class="flex gap-2 overflow-x-auto w-full md:w-auto hide-scrollbar pb-1"
          >
            <button
              v-for="cat in categories"
              :key="cat"
              @click="selectedCategory = cat"
              :class="[
                'px-5 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all',
                selectedCategory === cat
                  ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/20'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white',
              ]"
            >
              {{ cat }}
            </button>
          </div>
          <div
            class="flex items-center gap-2 w-full md:w-auto pl-0 md:pl-4 md:border-l md:border-white/10"
          >
            <SlidersHorizontal class="w-4 h-4 text-gray-400" />
            <select
              v-model="sortBy"
              class="bg-transparent text-white text-sm font-medium outline-none w-full md:w-48 cursor-pointer active:bg-brand-dark"
            >
              <option value="newest" class="bg-brand-dark">Terbaru</option>
              <option value="price_low" class="bg-brand-dark">
                Harga Terendah
              </option>
              <option value="price_high" class="bg-brand-dark">
                Harga Tertinggi
              </option>
              <option value="bestseller" class="bg-brand-dark">
                Paling Laris
              </option>
            </select>
          </div>
        </div>
      </div>

      <!-- Product Grid -->
      <div
        v-if="filteredProducts.length > 0"
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8"
      >
        <article
          v-for="product in filteredProducts"
          :key="product.id"
          @click="$router.push('/produk/' + product.id)"
          class="bg-brand-card rounded-2xl overflow-hidden group cursor-pointer border border-white/5 hover:border-brand-500/50 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300"
        >
          <div class="relative aspect-[4/5] overflow-hidden">
            <img
              :src="product.image"
              :alt="product.name + ' - Custom Jersey'"
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent opacity-60"
            ></div>
            <div class="absolute top-3 left-3">
              <p
                class="bg-white/10 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-white uppercase tracking-wider border border-white/10"
              >
                {{ product.category }}
              </p>
            </div>
            <div class="absolute bottom-3 right-3">
              <button
                class="bg-brand-500 p-2 rounded-full text-white shadow-lg translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
              >
                <ShoppingBag class="w-4 h-4" />
              </button>
            </div>
          </div>
          <div class="p-5">
            <h3
              class="text-white font-bold text-sm md:text-base line-clamp-2 mb-2 group-hover:text-brand-400 transition-colors"
            >
              {{ product.name }}
            </h3>
            <div class="flex items-center gap-1 mb-3">
              <Star class="w-3 h-3 text-yellow-500 fill-yellow-500" />
              <span class="text-xs text-gray-400 font-medium"
                >{{ product.rating }} • {{ product.sold }} Terjual</span
              >
            </div>
            <div
              class="flex justify-between items-center border-t border-white/5 pt-3"
            >
              <p class="text-brand-400 font-bold font-mono">
                {{ formatPrice(product.price) }}
              </p>
              <span
                class="text-xs text-gray-500 line-through decoration-red-500"
                v-if="Math.random() > 0.5"
                >{{ formatPrice(product.price * 1.2) }}</span
              >
            </div>
          </div>
        </article>
      </div>

      <!-- Empty State -->
      <div
        v-else
        class="text-center py-24 bg-brand-card rounded-2xl border border-white/5 border-dashed"
      >
        <div
          class="bg-white/5 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-500"
        >
          <SearchX class="w-10 h-10" />
        </div>
        <h3 class="text-2xl font-bold text-white mb-2">
          Produk tidak ditemukan
        </h3>
        <p class="text-gray-400 max-w-sm mx-auto">
          Kami tidak dapat menemukan apa yang Anda cari. Coba ganti kata kunci
          atau reset filter kategori.
        </p>
        <button
          @click="selectedCategory = 'Semua'"
          class="mt-6 bg-brand-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-brand-600 transition-colors"
        >
          Reset Filter
        </button>
      </div>

      <!-- Request Banner (New Section) -->
      <div
        class="mt-16 bg-brand-surface rounded-2xl p-8 md:p-12 border border-white/5 flex flex-col md:flex-row items-center gap-8 text-center md:text-left"
      >
        <div class="flex-1">
          <h3 class="text-2xl font-display font-bold text-white mb-2">
            Punya Desain Sendiri?
          </h3>
          <p class="text-gray-400">
            Jangan khawatir jika tidak menemukan yang cocok di katalog. Kami
            menerima pembuatan jersey custom sesuai sketsa atau gambar referensi
            Anda.
          </p>
        </div>
        <a
          href="https://wa.me/6281234567890?text=Halo%20Jerseyku%20Admin%20Desain%2C%20saya%20punya%20sketsa%2Freferensi%20desain%20sendiri%20dan%20ingin%20bertanya%20mengenai%20pembuatan%20jersey%20custom."
          class="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-xl border border-white/20 transition-all whitespace-nowrap"
        >
          Chat Admin Desain
        </a>
      </div>
    </div>
  </div>
</template>
