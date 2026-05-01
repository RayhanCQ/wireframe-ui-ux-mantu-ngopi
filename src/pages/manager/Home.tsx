import DashboardLayout from "@/components/wireframe/DashboardLayout";
import { Pill } from "@/components/wireframe/ui";
import { Receipt, Wallet, UtensilsCrossed, AlertTriangle, XCircle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Transaksi Hari Ini", value: "0", sub: "Pesanan", icon: Receipt, tone: "muted" },
  { label: "Pendapatan Hari Ini", value: "Rp 0", sub: "0 Completed", icon: Wallet, tone: "success" },
  { label: "Total Menu", value: "1", sub: "Menu aktif", icon: UtensilsCrossed, tone: "primary" },
  { label: "Hampir Habis", value: "1", sub: "bahan baku", icon: AlertTriangle, tone: "warning" },
  { label: "Stok Habis", value: "0", sub: "bahan baku", icon: XCircle, tone: "danger" },
];

const toneMap: Record<string, string> = {
  muted: "bg-surface-3 text-muted-foreground",
  primary: "bg-primary/15 text-primary",
  success: "bg-success/15 text-success",
  warning: "bg-warning/15 text-warning",
  danger: "bg-destructive/15 text-destructive",
};

export default function ManagerHome() {
  return (
    <DashboardLayout role="manager" title="Dashboard">
      {/* Stats */}
      <div className="grid grid-cols-5 gap-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="wf-stat">
              <div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
                <div className="text-2xl font-semibold mt-1">{s.value}</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">{s.sub}</div>
              </div>
              <div className={`w-9 h-9 rounded-md grid place-items-center ${toneMap[s.tone]}`}>
                <Icon className="w-4 h-4" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart */}
      <div className="wf-card mt-4 p-5">
        <div className="text-sm font-medium mb-3">Pendapatan 7 Hari Terakhir</div>
        <div className="h-44 flex items-end gap-3 px-2">
          {[20, 45, 30, 60, 50, 80, 35].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full rounded-t-md bg-gradient-primary/80 bg-gradient-to-t from-primary to-primary-glow opacity-80" style={{ height: `${h}%` }} />
              <div className="text-[10px] text-muted-foreground">Apr {i + 1}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <SectionCard title="Transaksi Terbaru" link="/manager/transactions">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Najma</div>
              <div className="text-[11px] text-muted-foreground">Cashier · 1 week ago</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold">Rp 20.000</div>
              <Pill tone="success">Completed</Pill>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Perhatian Stok" link="/manager/supplies">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-warning" />
              <div className="text-sm">Biji Kopi Robusta</div>
            </div>
            <div className="text-warning text-sm font-medium">9.90 Kg</div>
          </div>
        </SectionCard>

        <SectionCard title="Menu Terlaris" link="/manager/products">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-surface-3 grid place-items-center">☕</div>
            <div>
              <div className="text-sm font-medium">Espresso</div>
              <div className="text-[11px] text-muted-foreground">1× Sold</div>
            </div>
          </div>
        </SectionCard>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="col-span-2 wf-card p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-medium">Restock Terbaru</div>
            <Link to="/manager/restocks" className="text-xs text-primary hover:underline">Lihat Semua</Link>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Biji Kopi Robusta</div>
              <div className="text-[11px] text-muted-foreground">Bujono · 1 week ago</div>
            </div>
            <div className="text-right">
              <div className="text-success text-sm font-semibold">+10 Kg</div>
              <div className="text-[11px] text-muted-foreground">Rp 1.500.000</div>
            </div>
          </div>
        </div>

        <div className="wf-card p-5">
          <div className="text-sm font-medium mb-3">Request Ganti Password</div>
          <div className="rounded-md bg-success/10 border border-success/30 p-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-success" />
            <div className="text-xs text-foreground/80">Tidak ada request pending</div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function SectionCard({ title, link, children }: { title: string; link: string; children: React.ReactNode }) {
  return (
    <div className="wf-card p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm font-medium">{title}</div>
        <Link to={link} className="text-xs text-primary hover:underline">Lihat Semua</Link>
      </div>
      {children}
    </div>
  );
}
