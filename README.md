# 🏆 Jerseyku - Premium Custom Jersey E-Commerce Ecosystem

![Banner Jerseyku](/images/hero/hero-stadium.jpg)

## � Ringkasan Eksekutif

**Jerseyku** bukan sekadar website katalog biasa; ini adalah sebuah ekosistem digital papan atas yang dirancang khusus untuk merevolusi industri konveksi jersey custom di Indonesia. Dibangun dengan standar industri modern, platform ini menggabungkan kecepatan **Vite**, struktur kuat **TypeScript**, dan keindahan **Tailwind CSS** untuk menciptakan pengalaman belanja yang imersif, cepat, dan terpercaya.

Platform ini lahir dari kebutuhan akan antarmuka yang setara dengan brand sportswear global (seperti Adidas atau Nike), namun dengan fungsionalitas lokal yang dioptimalkan melalui integrasi cerdas WhatsApp Business.

---

## � Fitur Unggulan Proyek

### 1. 🎨 Arsitektur Desain "Next-Gen" UI

- **Estetika Glassmorphism & Dark Mode**: Mengadopsi tren desain terbaru dengan efek transparansi _frosted glass_ yang memberikan kesan futuristik dan mewah.
- **Micro-Interactions**: Implementasi _hover effects_ yang dinamis menggunakan _transform_ dan _transition_ CSS3, memberikan umpan balik visual instan kepada pengguna.
- **Premium Local Assets**: Seluruh aset visual (16+ gambar produk, banner hero, galeri produksi) telah dioptimasi dan disimpan secara lokal di direktori `public/images/` untuk menjamin kestabilan tampilan tanpa ketergantungan pada server pihak ketiga.

### 2. 🧩 Manajemen Katalog Produk Pintar

- **Smart Data Structure**: Produk dikelola melalui database tersentralisasi di `src/data/products.ts`, memudahkan skalabilitas untuk menambah ratusan produk baru.
- **Katalog Multi-Kategori**: Mencakup segmen pasar yang luas (Futsal, Esport, Basket, Sepeda, Tennis, dan Training Wear).
- **Advanced Filtering Engine**: Logika filter kategori dan metode pengurutan (_Price High-Low_, _Newest_, _Bestseller_) yang berjalan secara _client-side_, memberikan respon instan tanpa jeda loading.

### 3. � Sistem Pemesanan WhatsApp Terintegrasi

- **Smart Message Templates**: Setiap jalur komunikasi (Hubungi Admin, Klaim Diskon, Bantuan Desain) memiliki pesan WhatsApp terenkripsi yang unik dan profesional.
- **Interactive Order Context**: Di halaman detail produk, sistem secara otomatis merangkum pilihan kustomisasi pengguna (Ukuran: S-XXL, Nama Punggung, Nomor Punggung) ke dalam format pratinjau pesan yang siap dikirim, meminimalisir kesalahan data saat pemesanan.

### 4. 🚀 Optimasi Performa & SEO Meta-Data

- **Route-Based Lazy Loading**: Membagi bundelan kode aplikasi berdasarkan rute halaman. Halaman baru dimuat hanya saat diklik, secara drastis mengurangi waktu _Initial Load_.
- **Image Optimization & Lazy Loading**: Menambahkan atribut `loading="lazy"` dan teks alternatif (alt text) pada setiap elemen gambar untuk meningkatkan kecepatan serta aksesibilitas.
- **Deep SEO Integration**: Konfigurasi lengkap `index.html` dengan _meta tags_ primer, Open Graph (untuk representasi visual di Facebook/WA), dan Twitter Cards untuk meningkatkan nilai CTR (_Click-Through Rate_) saat link dibagikan.

---

## 🛠️ Spesifikasi Teknologi (Modern Tech Stack)

| Teknologi        | Fungsi             | Keunggulan                                                                         |
| :--------------- | :----------------- | :--------------------------------------------------------------------------------- |
| **Vue.js 3**     | Framework Utama    | Menggunakan Composition API untuk logika yang lebih bersih dan modular.            |
| **Vite**         | Frontend Tooling   | Memberikan pengalaman pengembangan yang kilat dengan HMR (Hot Module Replacement). |
| **TypeScript**   | Bahasa Pemrograman | Menambah keamanan tipe data (Type Safety) untuk proyek yang lebih stabil.          |
| **Tailwind CSS** | Design Utility     | Memungkinkan pembuatan UI kustom tanpa batasan komponen UI standar.                |
| **Lucide Vue**   | Asset Ikon         | Set ikon berbasis SVG yang ringan, tajam, dan dapat diubah ukurannya.              |
| **Vue Router**   | Navigasi           | Menangani routing SPA (Single Page Application) yang mulus dan cepat.              |

---

## 📂 Struktur direktori yang Terorganisir

```bash
jerseyku/
├── public/                 # Aset Statis Tidak Terkompilasi
│   ├── images/             # Media Terbagi Berdasarkan Konteks
│   │   ├── products/       # Katalog Utama (16+ Gambar Lokal)
│   │   ├── hero/           # Branding Stadium Background
│   │   ├── gallery/        # Bukti Produksi & Shot Detail
│   │   ├── testimonials/   # Avatar Sosial Bukti Kepercayaan
│   │   └── ui/             # Aset Logo & Favicon
├── src/                    # Jantung Source Code
│   ├── components/         # UI Elements atomik & Reusable
│   ├── data/               # Business Logic & Product Store
│   ├── views/              # Pages/Layouts Utama
│   ├── App.vue             # Komponen Induk (Root)
│   └── main.ts             # Inisialisasi Project & Plugin
└── README.md               # Dokumentasi Teknis Lengkap
```

---

## 👨‍💻 Mengenal Pengembang (Full-Stack Developer)

Proyek **Jerseyku** ini adalah wujud dari komitmen terhadap detail, estetika, dan keunggulan teknis. Dikembangkan dan dipelihara secara eksklusif oleh:

### **Rivan Alamsyah**

_Web Architect & Frontend Specialist_

Saya adalah seorang pengembang yang berfokus pada penciptaan antarmuka digital yang tidak hanya berfungsi dengan baik, tetapi juga memanjakan mata pengguna.

- **📧 Email**: [alamsyahrivan14@gmail.com](mailto:alamsyahrivan14@gmail.com)
- **💬 WhatsApp**: [+62 855-9114-2923](https://wa.me/6285591142923)
- **🐙 GitHub**: [@rivanalamsyah](https://github.com/rivanalamsyah)
- **📍 Lokasi**: Indonesia

---

## 🔨 Panduan Pengembangan

1. **Persiapan**: Pastikan Node.js sudah terinstal.
2. **Setup**: `npm install` (untuk mengunduh semua library yang dibutuhkan).
3. **Dev Mode**: `npm run dev` (untuk memulai server pengembangan lokal).
4. **Production**: `npm run build` (untuk mengoptimasi project siap sebar/deploy).

---

_© 2026 Jerseyku - Designed with Excellence by Rivan Alamsyah._
