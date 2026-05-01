import DashboardLayout from "@/components/wireframe/DashboardLayout";
import { IconButton, PrimaryButton } from "@/components/wireframe/ui";
import { Eye, Plus } from "lucide-react";

export default function LogisticRestocks() {
  return (
    <DashboardLayout role="logistic" title="Histori Restock Saya" actions={<PrimaryButton icon={Plus}>Catat Restock</PrimaryButton>}>
      <div className="wf-card overflow-hidden">
        <table className="wf-table">
          <thead>
            <tr>
              <th className="w-12">#</th>
              <th>Bahan Baku</th>
              <th>Qty</th>
              <th>Total Harga</th>
              <th>Tanggal</th>
              <th className="w-20 text-right pr-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-surface-2">
              <td className="text-muted-foreground">1</td>
              <td className="font-medium">Biji Kopi Robusta</td>
              <td>+10 <span className="text-muted-foreground text-xs">Kg</span></td>
              <td>Rp 1.500.000</td>
              <td className="text-muted-foreground">12 Apr 2026, 17:08</td>
              <td><div className="flex justify-end"><IconButton icon={Eye} tone="primary" /></div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
