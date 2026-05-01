import DashboardLayout from "@/components/wireframe/DashboardLayout";
import { IconButton, PrimaryButton } from "@/components/wireframe/ui";
import { Pencil, Trash2, Plus } from "lucide-react";

const rows = [
  { name: "Coffee", count: 1 },
  { name: "Snacks", count: 0 },
  { name: "Matcha", count: 0 },
  { name: "Pops", count: 0 },
  { name: "Juice", count: 0 },
];

export default function Categories() {
  return (
    <DashboardLayout role="manager" title="Kategori" actions={<PrimaryButton icon={Plus}>Tambah Kategori</PrimaryButton>}>
      <div className="wf-card overflow-hidden">
        <table className="wf-table">
          <thead>
            <tr>
              <th className="w-12">#</th>
              <th>Nama Kategori</th>
              <th>Jumlah Menu</th>
              <th className="w-32 text-right pr-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.name} className="hover:bg-surface-2">
                <td className="text-muted-foreground">{i + 1}</td>
                <td className="font-medium">{r.name}</td>
                <td>{r.count}</td>
                <td>
                  <div className="flex justify-end gap-2">
                    <IconButton icon={Pencil} tone="primary" />
                    <IconButton icon={Trash2} tone="danger" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
