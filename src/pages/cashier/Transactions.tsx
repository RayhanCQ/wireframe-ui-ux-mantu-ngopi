import DashboardLayout from "@/components/wireframe/DashboardLayout";
import { IconButton, Pill, PrimaryButton } from "@/components/wireframe/ui";
import { Eye, Plus } from "lucide-react";

export default function CashierTransactions() {
  return (
    <DashboardLayout role="cashier" title="Transaksi Saya" actions={<PrimaryButton icon={Plus}>Buat Pesanan</PrimaryButton>}>
      <div className="wf-card overflow-hidden">
        <table className="wf-table">
          <thead>
            <tr>
              <th className="w-12">#</th>
              <th>Pelanggan</th>
              <th>Total</th>
              <th>Status</th>
              <th>Waktu</th>
              <th className="w-20 text-right pr-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-surface-2">
              <td className="text-muted-foreground">1</td>
              <td className="font-medium">Bujono</td>
              <td>Rp 20.000</td>
              <td><Pill tone="success">Completed</Pill></td>
              <td className="text-muted-foreground">12 Apr 2026, 17:12</td>
              <td><div className="flex justify-end"><IconButton icon={Eye} tone="primary" /></div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
