import DashboardLayout from "@/components/wireframe/DashboardLayout";
import { IconButton, Pill, PrimaryButton } from "@/components/wireframe/ui";
import { Receipt, ShoppingCart, Wallet, Eye, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function CashierHome() {
  return (
    <DashboardLayout role="cashier" title="Dashboard" actions={<PrimaryButton icon={Plus}>Buat Pesanan</PrimaryButton>}>
      <div className="grid grid-cols-3 gap-4">
        <Stat label="Transaksi Hari Ini" value="0" sub="Pesanan" icon={Receipt} tone="muted" />
        <Stat label="Keranjang Pesan" value="0" sub="menunggu checkout" icon={ShoppingCart} tone="warning" />
        <Stat label="Subtotal Hari Ini" value="0" sub="Pendapatan saya hari ini" icon={Wallet} tone="success" />
      </div>

      <div className="wf-card mt-4 p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-medium">Transaksi Terbaru</div>
          <Link to="/cashier/transactions" className="text-xs text-primary hover:underline">Lihat Semua</Link>
        </div>
        <table className="wf-table">
          <thead>
            <tr>
              <th>Pelanggan</th>
              <th>Total</th>
              <th>Status</th>
              <th>Waktu</th>
              <th className="w-20 text-right pr-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-surface-2">
              <td className="font-medium">Najma</td>
              <td>Rp 20.000</td>
              <td><Pill tone="success">Completed</Pill></td>
              <td className="text-muted-foreground">1 week ago</td>
              <td><div className="flex justify-end"><IconButton icon={Eye} tone="primary" /></div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}

const toneMap: Record<string, string> = {
  muted: "bg-surface-3 text-muted-foreground",
  warning: "bg-warning/15 text-warning",
  success: "bg-success/15 text-success",
};

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
