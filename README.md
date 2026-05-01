# Mantu-Ngopi — UI/UX Wireframe

Wireframe statis (high-fidelity, dark theme) untuk **Sistem Informasi Kafe Mantu-Ngopi**.
Dibangun berdasarkan dokumen desain "BAB III Struktur Program" & "BAB IV Petunjuk Penggunaan".

> ⚠️ Ini adalah **wireframe / mockup interaktif** — bukan aplikasi produksi.
> Tidak ada backend, tidak ada autentikasi nyata, dan **semua data adalah dummy**.
> Tujuannya: memvalidasi alur, layout, dan hierarki informasi sebelum implementasi.

---

## ✨ Tujuan

- Menerjemahkan dokumen desain PDF menjadi halaman HTML/CSS yang dapat diklik.
- Menyediakan referensi visual yang konsisten untuk developer & stakeholder.
- Mempermudah review alur per peran (Manager, Kasir, Logistik) tanpa perlu setup backend.

---

## 🧩 Tech Stack

- **React 18 + Vite 5 + TypeScript**
- **Tailwind CSS v3** dengan design tokens HSL semantik (lihat `src/index.css` & `tailwind.config.ts`)
- **shadcn/ui** primitives + komponen wireframe kustom (`src/components/wireframe/`)
- **React Router** untuk navigasi antar halaman wireframe
- **lucide-react** untuk ikon

---

## 👥 Tiga Peran Pengguna

| Peran | Fokus | Halaman utama |
|---|---|---|
| **Manager** | Operasional kafe end-to-end | Dashboard, Kategori, Bahan Baku, Menu & Harga, Transaksi, Restock, Karyawan |
| **Cashier** | Pencatatan pesanan & transaksi | Dashboard, Pemesanan, Transaksi |
| **Logistic** | Stok & restock bahan baku | Dashboard, Bahan Baku, Restock |

---

## 🗺️ Peta Halaman (Routes)

### Auth & Profile
- `/login` — Halaman login (semua peran)
- `/profile` — Profil akun pengguna
- `/change-password` — Request ganti password

### Manager
- `/manager` — Dashboard ringkasan (KPI, grafik 7 hari, perhatian stok, menu terlaris)
- `/manager/categories` — Kelola kategori menu
- `/manager/supplies` — Kelola bahan baku
- `/manager/products` — Kelola menu, harga, & resep
- `/manager/transactions` — Riwayat transaksi lengkap
- `/manager/restocks` — Riwayat restock
- `/manager/users` — Manajemen akun karyawan

### Cashier
- `/cashier` — Ringkasan transaksi harian
- `/cashier/products` — List menu untuk membuat pesanan baru
- `/cashier/transactions` — Histori transaksi milik kasir

### Logistic
- `/logistic` — Ringkasan stok bahan baku
- `/logistic/supplies` — Pantau stok & restock cepat
- `/logistic/restocks` — Catat & pantau pembelian bahan baku

Indeks visual semua halaman tersedia di route root **`/`** (`src/pages/Index.tsx`).

---

## 🎨 Design System

- **Tema**: gelap, aksen ungu (`--primary: 270 91% 65%`).
- Semua warna disimpan sebagai **HSL semantic tokens** di `src/index.css` — komponen tidak boleh memakai warna mentah seperti `text-white` / `bg-black`.
- Komponen reusable wireframe ada di `src/components/wireframe/`:
  - `DashboardLayout.tsx` — sidebar role-aware + topbar
  - `ui.tsx` — `Pill`, `PrimaryButton`, `IconButton`, dsb.

---

## 🚀 Menjalankan Lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` lalu mulai eksplorasi dari `/` (galeri wireframe) atau `/login`.

### Script lain
```bash
npm run build       # production build
npm run preview     # preview build
npm run lint        # eslint
npm run test        # vitest
```

---

## 📁 Struktur Direktori (ringkas)

```
src/
├─ assets/                   # gambar (mis. login-coffee.jpg)
├─ components/
│  ├─ ui/                    # shadcn primitives
│  └─ wireframe/             # layout & atom khusus wireframe
├─ pages/
│  ├─ Index.tsx              # galeri semua wireframe
│  ├─ Login.tsx, Profile.tsx, ChangePassword.tsx
│  ├─ manager/               # 7 halaman manager
│  ├─ cashier/               # 3 halaman cashier
│  └─ logistic/              # 3 halaman logistic
├─ index.css                 # design tokens (HSL)
└─ App.tsx                   # routing
```

---

## ⚠️ Batasan (by design)

- Form **tidak melakukan submit** — tombol login langsung mengarah ke dashboard demo.
- Tidak ada validasi, otorisasi, atau persistensi data.
- Angka, tabel, grafik, dan riwayat hanyalah **placeholder visual**.
- Belum responsif penuh untuk mobile — dioptimalkan untuk layar desktop ≥ 1280px.

---

## 🛣️ Langkah Selanjutnya (saran)

1. Validasi alur dengan stakeholder menggunakan wireframe ini.
2. Aktifkan **Lovable Cloud** untuk auth, database, dan storage.
3. Ganti data dummy dengan query nyata (mulai dari modul Bahan Baku & Transaksi).
4. Tambah role-based access control berbasis tabel `user_roles`.
5. Tingkatkan responsivitas mobile untuk peran Kasir.
