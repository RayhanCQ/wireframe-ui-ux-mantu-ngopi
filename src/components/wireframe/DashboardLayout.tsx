import { Link, NavLink, useLocation } from "react-router-dom";
import { ReactNode } from "react";
import {
  LayoutDashboard, FolderTree, Boxes, UtensilsCrossed, Receipt,
  PackagePlus, Users, Coffee, ChevronDown, ArrowLeft,
} from "lucide-react";

type Role = "manager" | "cashier" | "logistic";

const navByRole: Record<Role, { to: string; label: string; icon: any }[]> = {
  manager: [
    { to: "/manager", label: "Dashboard", icon: LayoutDashboard },
    { to: "/manager/categories", label: "Kategori", icon: FolderTree },
    { to: "/manager/supplies", label: "Bahan Baku", icon: Boxes },
    { to: "/manager/products", label: "Menu & Harga", icon: UtensilsCrossed },
    { to: "/manager/transactions", label: "Transaksi", icon: Receipt },
    { to: "/manager/restocks", label: "Restock", icon: PackagePlus },
    { to: "/manager/users", label: "Karyawan", icon: Users },
  ],
  cashier: [
    { to: "/cashier", label: "Dashboard", icon: LayoutDashboard },
    { to: "/cashier/products", label: "Pemesanan", icon: UtensilsCrossed },
    { to: "/cashier/transactions", label: "Transaksi", icon: Receipt },
  ],
  logistic: [
    { to: "/logistic", label: "Dashboard", icon: LayoutDashboard },
    { to: "/logistic/supplies", label: "Bahan Baku", icon: Boxes },
    { to: "/logistic/restocks", label: "Restock", icon: PackagePlus },
  ],
};

const roleMeta: Record<Role, { name: string; label: string; pill: string }> = {
  manager: { name: "Admin", label: "Manager", pill: "bg-primary/15 text-primary" },
  cashier: { name: "Sudarto", label: "Cashier", pill: "bg-info/15 text-info" },
  logistic: { name: "Bujono", label: "Logistic", pill: "bg-success/15 text-success" },
};

interface Props {
  role: Role;
  title: string;
  actions?: ReactNode;
  children: ReactNode;
  showBack?: boolean;
}

export default function DashboardLayout({ role, title, actions, children, showBack }: Props) {
  const items = navByRole[role];
  const meta = roleMeta[role];
  const location = useLocation();

  return (
    <div className="min-h-screen flex bg-background text-foreground">
      {/* Sidebar */}
      <aside className="w-60 shrink-0 bg-sidebar border-r border-sidebar-border flex flex-col">
        <Link to="/" className="flex items-center gap-2 px-5 py-5 border-b border-sidebar-border">
          <div className="w-7 h-7 rounded-md bg-gradient-primary grid place-items-center">
            <Coffee className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-semibold tracking-tight">Mantu-Ngopi</span>
        </Link>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {items.map((it) => {
            const Icon = it.icon;
            const active = location.pathname === it.to;
            return (
              <NavLink
                key={it.to}
                to={it.to}
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                  active
                    ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                    : "text-sidebar-foreground hover:bg-sidebar-accent"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{it.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <Link
          to="/profile"
          className="m-3 mt-0 flex items-center gap-3 rounded-lg bg-sidebar-accent px-3 py-2.5 hover:bg-surface-3 transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-primary/20 grid place-items-center text-primary text-xs font-semibold">
            {meta.name[0]}
          </div>
          <div className="leading-tight">
            <div className="text-sm font-medium">{meta.name}</div>
            <div className="text-xs text-muted-foreground">{meta.label}</div>
          </div>
        </Link>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-14 border-b border-border flex items-center justify-end px-6 gap-3 bg-background/80 backdrop-blur">
          <Link to="/" className="text-xs text-muted-foreground hover:text-foreground">
            ← All wireframes
          </Link>
          <button className="flex items-center gap-2 rounded-md bg-surface-2 border border-border px-3 py-1.5 text-sm hover:bg-surface-3">
            <div className="w-5 h-5 rounded-full bg-primary/30 grid place-items-center text-[10px] font-semibold">
              {meta.name[0]}
            </div>
            <span>{meta.name}</span>
            <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
          </button>
        </header>

        {/* Page header */}
        <div className="px-6 pt-5 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {showBack && (
              <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4" /> Kembali
              </button>
            )}
            <h1 className="text-lg font-semibold">{title}</h1>
          </div>
          <div className="flex items-center gap-2">{actions}</div>
        </div>

        {/* Content */}
        <main className="px-6 pb-10 flex-1">{children}</main>
      </div>
    </div>
  );
}
