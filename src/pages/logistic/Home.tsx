import DashboardLayout from "@/components/wireframe/DashboardLayout";
import { Boxes, AlertTriangle, XCircle, PackagePlus } from "lucide-react";
import { Link } from "react-router-dom";

const toneMap: Record<string, string> = {
  primary: "bg-primary/15 text-primary",
  warning: "bg-warning/15 text-warning",
  danger: "bg-destructive/15 text-destructive",
  success: "bg-success/15 text-success",
};

export default function LogisticHome() {
  return (
    <DashboardLayout role="logistic" title="Dashboard">
      <div className="grid grid-cols-4 gap-4">
        <Stat label="Total Bahan Baku" value="1" sub="Jenis bahan" icon={Boxes} tone="primary" />
        <Stat label="Hampir Habis" value="1" sub="butuh restock" icon={AlertTriangle} tone="warning" />
        <Stat label="Stok Habis" value="0" sub="bahan baku" icon={XCircle} tone="danger" />
        <Stat label="Restock Hari Ini" value="0" sub="catatan baru" icon={PackagePlus} tone="success" />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="wf-card p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-medium">Perhatian Stok</div>
            <Link to="/logistic/supplies" className="text-xs text-primary hover:underline">Lihat Semua</Link>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-warning" />
              <div className="text-sm">Biji Kopi Robusta</div>
            </div>
            <div className="text-warning text-sm font-medium">9.90 Kg</div>
          </div>
        </div>

        <div className="wf-card p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-medium">Restock Terbaru</div>
            <Link to="/logistic/restocks" className="text-xs text-primary hover:underline">Lihat Semua</Link>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Biji Kopi Robusta</div>
              <div className="text-[11px] text-muted-foreground">1 week ago</div>
            </div>
            <div className="text-success text-sm font-semibold">+10 Kg<div className="text-[11px] text-muted-foreground font-normal">Rp 1.500.000</div></div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function Stat({ label, value, sub, icon: Icon, tone }: any) {
  return (
    <div className="wf-stat">
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-2xl font-semibold mt-1">{value}</div>
        <div className="text-[11px] text-muted-foreground mt-0.5">{sub}</div>
      </div>
      <div className={`w-9 h-9 rounded-md grid place-items-center ${toneMap[tone]}`}>
        <Icon className="w-4 h-4" />
      </div>
    </div>
  );
}
