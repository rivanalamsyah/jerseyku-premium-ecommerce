<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const isMobileMenuOpen = ref(false)
</script>

<template>
  <nav class="bg-brand-dark/95 backdrop-blur-md sticky top-0 left-0 right-0 z-50 border-b border-white/5 shadow-xl shadow-black/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 cursor-pointer" @click="$router.push('/')">
          <span class="font-display text-2xl font-bold tracking-wide text-white">JERSEY<span class="text-brand-400">KU</span></span>
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <router-link to="/" class="text-gray-300 hover:text-brand-400 px-3 py-2 rounded-md text-sm font-medium transition-colors" active-class="text-brand-400">Home</router-link>
            <router-link to="/katalog" class="text-gray-300 hover:text-brand-400 px-3 py-2 rounded-md text-sm font-medium transition-colors" active-class="text-brand-400">Katalog</router-link>
            <router-link to="/cara-pesan" class="text-gray-300 hover:text-brand-400 px-3 py-2 rounded-md text-sm font-medium transition-colors" active-class="text-brand-400">Cara Pesan</router-link>
            <router-link to="/tentang" class="text-gray-300 hover:text-brand-400 px-3 py-2 rounded-md text-sm font-medium transition-colors" active-class="text-brand-400">Tentang</router-link>
          </div>
        </div>

        <!-- Mobile Menu Button (Hamburger) -->
        <div class="-mr-2 flex md:hidden">
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none">
            <X v-if="isMobileMenuOpen" class="w-6 h-6" />
            <Menu v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div v-show="isMobileMenuOpen" class="md:hidden bg-brand-card border-b border-white/10 absolute w-full z-50 shadow-2xl">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link to="/" @click="isMobileMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10" active-class="bg-white/10 text-brand-400">Home</router-link>
        <router-link to="/katalog" @click="isMobileMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10" active-class="bg-white/10 text-brand-400">Katalog</router-link>
        <router-link to="/cara-pesan" @click="isMobileMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10" active-class="bg-white/10 text-brand-400">Cara Pesan</router-link>
        <router-link to="/tentang" @click="isMobileMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10" active-class="bg-white/10 text-brand-400">Tentang</router-link>
      </div>
    </div>
  </nav>
</template>
