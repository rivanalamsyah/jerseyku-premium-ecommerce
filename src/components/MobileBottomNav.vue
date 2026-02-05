<script setup lang="ts">
import { Home, Shirt, HelpCircle, MessageCircle } from 'lucide-vue-next'
</script>

<template>
  <div class="fixed bottom-0 w-full bg-brand-card/95 backdrop-blur border-t border-white/10 md:hidden z-50">
    <div class="grid grid-cols-4 h-16">
      <router-link to="/" class="flex flex-col items-center justify-center text-gray-400 hover:text-brand-400" active-class="text-brand-400">
        <Home class="w-5 h-5 mb-1" />
        <span class="text-[10px]">Home</span>
      </router-link>
      <router-link to="/katalog" class="flex flex-col items-center justify-center text-gray-400 hover:text-brand-400" active-class="text-brand-400">
        <Shirt class="w-5 h-5 mb-1" />
        <span class="text-[10px]">Katalog</span>
      </router-link>
      <router-link to="/cara-pesan" class="flex flex-col items-center justify-center text-gray-400 hover:text-brand-400" active-class="text-brand-400">
        <HelpCircle class="w-5 h-5 mb-1" />
        <span class="text-[10px]">Bantuan</span>
      </router-link>
      <a href="https://wa.me/6281234567890" target="_blank" class="flex flex-col items-center justify-center text-brand-400 hover:text-brand-300">
        <MessageCircle class="w-5 h-5 mb-1" />
        <span class="text-[10px]">Chat</span>
      </a>
    </div>
  </div>
</template>
