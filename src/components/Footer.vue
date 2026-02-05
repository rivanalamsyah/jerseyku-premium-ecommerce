<script setup lang="ts">
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Github,
} from "lucide-vue-next";
</script>

<template>
  <footer class="bg-brand-dark border-t border-white/10 pt-16 pb-24 md:pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div class="col-span-1 md:col-span-1">
          <span class="font-display text-2xl font-bold text-white"
            >JERSEY<span class="text-brand-400">KU</span></span
          >
          <p class="text-gray-400 text-sm mt-4 leading-relaxed">
            Platform pembuatan jersey custom nomor #1 di Indonesia. Kualitas pro
            player, harga pelajar.
          </p>
        </div>
        <div>
          <h4 class="text-white font-bold mb-4">Menu Cepat</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li>
              <router-link to="/katalog" class="hover:text-brand-400"
                >Katalog Produk</router-link
              >
            </li>
            <li>
              <router-link to="/cara-pesan" class="hover:text-brand-400"
                >Cek Status Pesanan</router-link
              >
            </li>
            <li>
              <router-link to="/cara-pesan" class="hover:text-brand-400"
                >Panduan Ukuran</router-link
              >
            </li>
            <li>
              <router-link to="/tentang" class="hover:text-brand-400"
                >Program Reseller</router-link
              >
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-bold mb-4">Hubungi Kami</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li>
              <a
                href="https://wa.me/6285591142923"
                class="flex items-center gap-2 hover:text-brand-400 transition-colors"
                ><Phone class="w-4 h-4" /> +62 855-9114-2923</a
              >
            </li>
            <li>
              <a
                href="mailto:alamsyahrivan14@gmail.com"
                class="flex items-center gap-2 hover:text-brand-400 transition-colors"
                ><Mail class="w-4 h-4" /> alamsyahrivan14@gmail.com</a
              >
            </li>
            <li class="flex items-center gap-2">
              <MapPin class="w-4 h-4" /> Yogyakarta, ID
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-bold mb-4">Ikuti Kami</h4>
          <div class="flex space-x-4">
            <a
              href="https://github.com/rivanalamsyah"
              target="_blank"
              class="bg-white/5 hover:bg-brand-500 hover:text-white p-3 rounded-full transition-all text-gray-400"
              ><Github class="w-5 h-5"
            /></a>
            <a
              href="#"
              class="bg-white/5 hover:bg-brand-500 hover:text-white p-3 rounded-full transition-all text-gray-400"
              ><Instagram class="w-5 h-5"
            /></a>
            <a
              href="#"
              class="bg-white/5 hover:bg-brand-500 hover:text-white p-3 rounded-full transition-all text-gray-400"
              ><Facebook class="w-5 h-5"
            /></a>
            <a
              href="#"
              class="bg-white/5 hover:bg-brand-500 hover:text-white p-3 rounded-full transition-all text-gray-400"
              ><Twitter class="w-5 h-5"
            /></a>
          </div>
        </div>
      </div>
      <div
        class="border-t border-white/10 pt-8 text-center text-gray-500 text-xs"
      >
        &copy; 2026 Jerseyku Indonesia. Designed & Developed by
        <a
          href="https://github.com/rivanalamsyah"
          target="_blank"
          class="text-brand-400 hover:text-brand-500 font-bold"
          >Rivan Alamsyah</a
        >. All rights reserved.
      </div>
    </div>
  </footer>
</template>
