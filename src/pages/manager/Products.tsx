import DashboardLayout from "@/components/wireframe/DashboardLayout";
import { IconButton, Pill, PrimaryButton } from "@/components/wireframe/ui";
import { Pencil, Trash2, Plus } from "lucide-react";

export default function Products() {
  return (
    <DashboardLayout role="manager" title="Menu & Harga" actions={<PrimaryButton icon={Plus}>Tambah Menu</PrimaryButton>}>
      <div className="wf-card overflow-hidden">
        <table className="wf-table">
          <thead>
            <tr>
              <th className="w-12">#</th>
              <th>Gambar</th>
              <th>Nama Menu</th>
              <th>Kategori</th>
              <th>Harga</th>
              <th>Status</th>
              <th className="w-32 text-right pr-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-surface-2">
              <td className="text-muted-foreground">1</td>
              <td>
                <div className="w-9 h-9 rounded-md bg-surface-3 grid place-items-center text-lg">☕</div>
              </td>
              <td className="font-medium">Espresso</td>
              <td><Pill tone="primary">Coffee</Pill></td>
              <td>Rp 20.000</td>
              <td><Pill tone="warning">Stok Tipis</Pill></td>
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
