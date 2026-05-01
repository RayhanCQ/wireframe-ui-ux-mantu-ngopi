# Mantu-Ngopi — UI/UX Wireframe

Wireframe statis for **Sistem Informasi Cafe Mantu-Ngopi**.
Dibangun berdasarkan dokumen desain dalam mata kuliah **Praktikum Rekayasa Perangkat Lunak**.

> ⚠️ This is a **wireframe / UI/UX mockup** not a production application.
> (No backend, no auth, **all data are dummies**).

---

## ✨ Tujuan

- Menerjemahkan dokumen perencanaan desain menjadi interactive HTML/CSS wireframe.
- Menyediakan referensi visual yang konsisten untuk developer & stakeholder.
- Mempermudah review alur per peran (Manager, Kasir, Logistik) tanpa perlu setup backend.
- Menunjang keperluan **Praktikum Rekayasa Perangkat Lunak**

---

## 🧩 Tech Stack

- **React 18 + Vite 5 + TypeScript**
- **Tailwind CSS v3** dengan design tokens HSL semantik (lihat `src/index.css` & `tailwind.config.ts`)
- **shadcn/ui** primitives + custom wireframe components (dari AI hehe) (`src/components/wireframe/`)
- **React Router** untuk navigasi antar halaman wireframe
- **lucide-react** for icons

---

## 👥 Users/Roles

| Peran | Fokus | Halaman utama |
|---|---|---|
| **Manager** | Operasional kafe end-to-end | Dashboard, Kategori, Bahan Baku, Menu & Harga, Transaksi, Restock, Karyawan |
| **Cashier** | Pencatatan pesanan & transaksi | Dashboard, Pemesanan, Transaksi |
| **Logistic** | Stok & restock bahan baku | Dashboard, Bahan Baku, Restock |

---

## 🗺️ Route Map

### Auth & Profile (3 routes)
- `/login` : Halaman login (all users)
- `/profile` : Profil akun pengguna
- `/change-password` : Request ganti password

### Manager (7 routes)
- `/manager` : Dashboard ringkasan (KPI, grafik 7 hari, perhatian stok, menu terlaris)
- `/manager/categories` : Kelola kategori menu
- `/manager/supplies` : Kelola bahan baku
- `/manager/products` : Kelola menu, harga, & resep
- `/manager/transactions` : Riwayat transaksi lengkap
- `/manager/restocks` : Riwayat restock
- `/manager/users` : Manajemen akun karyawan

### Cashier (3 routes)
- `/cashier` : Ringkasan transaksi harian
- `/cashier/products` : List menu untuk membuat pesanan baru
- `/cashier/transactions` : Histori transaksi milik kasir

### Logistic (3 routes)
- `/logistic` : Ringkasan stok bahan baku
- `/logistic/supplies` : Pantau stok & restock cepat
- `/logistic/restocks` : Catat & pantau pembelian bahan baku

Indeks visual semua halaman tersedia di route root **`/`** (`src/pages/Index.tsx`).

---

## 🎨 Design System

- Ini pake tailwind, cuma jujur banyak dibantu AI sih
- **Tema**: gelap, aksen ungu (`--primary: 270 91% 65%`).
- Semua warna disimpan sebagai **HSL semantic tokens** di `src/index.css` — komponen tidak boleh memakai warna mentah seperti `text-white` / `bg-black`.
- Komponen reusable wireframe ada di `src/components/wireframe/`:
  - `DashboardLayout.tsx` — sidebar role-aware + topbar
  - `ui.tsx` — `Pill`, `PrimaryButton`, `IconButton`, dsb.

---

## 🚀 Run Locally

```direc. terminal
npm install
npm run dev
```

Buka `http://localhost:5173` lalu mulai eksplorasi dari `/` (galeri wireframe) atau `/login`.

### Other Scripts
```direc. terminal
npm run build       # production build
npm run preview     # preview build
npm run lint        # eslint
npm run test        # vitest
```

---

## 📁 Directory 

```
src/
├─ assets/                   
├─ components/
│  ├─ ui/                    # shadcn primitives
│  └─ wireframe/             # layout & atom khusus wireframe (gatau ini dari AI)
├─ pages/
│  ├─ Index.tsx              # wireframe gallery
│  ├─ Login.tsx, Profile.tsx, ChangePassword.tsx
│  ├─ manager/               
│  ├─ cashier/               
│  └─ logistic/              
├─ index.css                 # design tokens (HSL)
└─ App.tsx                   # routing
```

---

## ⚠️ Boundaries (by design)

- No form submits, login button leads straight to dashboard
- Tidak ada validasi, otorisasi, atau persistensi data.
- Angka, tabel, grafik, dan riwayat cuman **placeholder visual**.
- Not fully optimized for mobile **yet**, optimized for desktop screens with resolution of ≥ 1280px.

---

## 🛣️ This Would Be Cool

1. Tambah role-based access control berbasis tabel `user_roles`.
2. Improve mobile responsiveness, especialy for cashier role.
