import DashboardLayout from "@/components/wireframe/DashboardLayout";
import { IconButton, Pill, PrimaryButton } from "@/components/wireframe/ui";
import { Eye, Plus } from "lucide-react";

const rows = [
  { name: "Admin", username: "@iniTheBoss", role: "Manager", tone: "primary" as const },
  { name: "Sudarto", username: "@kasir", role: "Cashier", tone: "info" as const },
  { name: "Bujono", username: "@logistic", role: "Logistic", tone: "success" as const },
];

export default function Users() {
  return (
    <DashboardLayout role="manager" title="Manajemen Karyawan" actions={<PrimaryButton icon={Plus}>Tambah Karyawan</PrimaryButton>}>
      <div className="wf-card overflow-hidden">
        <table className="wf-table">
          <thead>
            <tr>
              <th className="w-12">#</th>
              <th>Nama Lengkap</th>
              <th>Username</th>
              <th>Role</th>
              <th className="w-20 text-right pr-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.name} className="hover:bg-surface-2">
                <td className="text-muted-foreground">{i + 1}</td>
                <td className="font-medium">{r.name}</td>
                <td className="text-muted-foreground">{r.username}</td>
                <td><Pill tone={r.tone}>{r.role}</Pill></td>
                <td>
                  <div className="flex justify-end">
                    <IconButton icon={Eye} tone="primary" />
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
