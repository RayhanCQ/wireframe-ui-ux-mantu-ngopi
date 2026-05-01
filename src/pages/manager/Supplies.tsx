import DashboardLayout from "@/components/wireframe/DashboardLayout";
import { IconButton, Pill, PrimaryButton } from "@/components/wireframe/ui";
import { Pencil, Trash2, Plus, AlertTriangle } from "lucide-react";

export default function Supplies() {
  return (
    <DashboardLayout role="manager" title="Bahan Baku" actions={<PrimaryButton icon={Plus}>Tambah Bahan Baku</PrimaryButton>}>
      <div className="wf-card overflow-hidden">
        <table className="wf-table">
          <thead>
            <tr>
              <th className="w-12">#</th>
              <th>Nama Bahan</th>
              <th>Stok</th>
              <th>Harga/Satuan</th>
              <th>Status</th>
              <th className="w-32 text-right pr-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-surface-2">
              <td className="text-muted-foreground">1</td>
              <td className="font-medium">Biji Kopi Robusta</td>
              <td>9.90 <span className="text-muted-foreground text-xs">Kg</span></td>
              <td>Rp 150.000/Kg</td>
              <td>
                <Pill tone="warning">
                  <AlertTriangle className="w-3 h-3" /> Hampir Habis
                </Pill>
              </td>
              <td>
                <div className="flex justify-end gap-2">
                  <IconButton icon={Pencil} tone="primary" />
                  <IconButton icon={Trash2} tone="danger" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
