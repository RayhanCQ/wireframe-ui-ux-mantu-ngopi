import { Link } from "react-router-dom";
import { Coffee, ArrowUpRight } from "lucide-react";

const sections: { title: string; tone: string; pages: { to: string; label: string; desc: string }[] }[] = [
  {
    title: "Auth & Profile",
    tone: "from-primary/30 to-primary-glow/20",
    pages: [
      { to: "/login", label: "Login Page", desc: "Halaman autentikasi semua peran." },
      { to: "/profile", label: "Profile Page", desc: "Data akun & nama pengguna." },
      { to: "/change-password", label: "Change Password", desc: "Request ganti password (Karyawan)." },
    ],
  },
  {
    title: "Manager Dashboard",
    tone: "from-primary/40 to-fuchsia-500/20",
    pages: [
      { to: "/manager", label: "Home", desc: "Ringkasan operasional kafe." },
      { to: "/manager/categories", label: "Kategori", desc: "Kelola kategori menu." },
      { to: "/manager/supplies", label: "Bahan Baku", desc: "Kelola bahan baku." },
      { to: "/manager/products", label: "Menu & Harga", desc: "Kelola menu, harga, resep." },
      { to: "/manager/transactions", label: "Transaksi", desc: "Riwayat transaksi lengkap." },
      { to: "/manager/restocks", label: "Restock", desc: "Riwayat restock bahan baku." },
      { to: "/manager/users", label: "Karyawan", desc: "Manajemen akun karyawan." },
    ],
  },
  {
    title: "Cashier Dashboard",
    tone: "from-info/30 to-primary/20",
    pages: [
      { to: "/cashier", label: "Home", desc: "Ringkasan transaksi harian Kasir." },
      { to: "/cashier/products", label: "Pemesanan", desc: "List menu untuk pesanan baru." },
      { to: "/cashier/transactions", label: "Transaksi", desc: "Histori transaksi saya." },
    ],
  },
  {
    title: "Logistic Dashboard",
    tone: "from-success/30 to-primary/20",
    pages: [
      { to: "/logistic", label: "Home", desc: "Ringkasan stok bahan baku." },
      { to: "/logistic/supplies", label: "Bahan Baku", desc: "Pantau stok & restock cepat." },
      { to: "/logistic/restocks", label: "Restock", desc: "Catat & pantau pembelian." },
    ],
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-10 flex items-start justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-gradient-primary grid place-items-center">
                <Coffee className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold tracking-tight">Mantu-Ngopi</span>
              <span className="ml-2 text-xs px-2 py-0.5 rounded-md bg-surface-3 text-muted-foreground">UI Wireframe</span>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight">Sistem Informasi Kafe — UI/UX Wireframe</h1>
            <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
              Wireframe halaman berbasis dokumen desain Mantu-Ngopi. Tiga peran (Manager, Kasir, Logistik) dengan dashboard masing-masing.
            </p>
          </div>
          <Link to="/login" className="inline-flex items-center gap-2 rounded-md bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] shrink-0">
            Mulai dari Login <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-10">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">{s.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {s.pages.map((p) => (
                <Link
                  key={p.to}
                  to={p.to}
                  className="group relative rounded-xl border border-border bg-surface p-5 hover:border-primary/50 hover:bg-surface-2 transition-colors overflow-hidden"
                >
                  <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${s.tone} blur-2xl opacity-60 group-hover:opacity-90 transition-opacity`} />
                  <div className="relative">
                    <div className="text-xs text-muted-foreground font-mono">{p.to}</div>
                    <div className="mt-1 text-base font-semibold">{p.label}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{p.desc}</div>
                    <div className="mt-4 inline-flex items-center gap-1 text-xs text-primary group-hover:gap-2 transition-all">
                      Buka wireframe <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <footer className="pt-8 border-t border-border text-xs text-muted-foreground">
          Wireframe statis — semua data dummy. Berdasarkan dokumen "BAB III Struktur Program" & "BAB IV Petunjuk Penggunaan".
        </footer>
      </main>
    </div>
  );
}
