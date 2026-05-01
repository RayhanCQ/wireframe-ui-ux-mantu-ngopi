import DashboardLayout from "@/components/wireframe/DashboardLayout";
import { Pill } from "@/components/wireframe/ui";
import { User, KeyRound } from "lucide-react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <DashboardLayout role="manager" title="Profil Saya">
      <div className="grid place-items-center pt-4">
        <div className="w-[460px] max-w-full space-y-4">
          <div className="wf-card p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 grid place-items-center mb-3">
                <User className="w-7 h-7 text-primary" />
              </div>
              <div className="font-semibold">Admin</div>
              <div className="text-xs text-muted-foreground">@iniTheBoss</div>
              <Pill tone="primary">Manager</Pill>
            </div>

            <div className="mt-6 space-y-3">
              <div>
                <label className="block text-xs text-muted-foreground mb-1.5">Nama Lengkap</label>
                <input defaultValue="Admin" className="w-full rounded-md bg-input border border-border px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1.5">Username</label>
                <input defaultValue="iniTheBoss" className="w-full rounded-md bg-input border border-border px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1.5">Role</label>
                <input defaultValue="Manager" disabled className="w-full rounded-md bg-input border border-border px-3 py-2 text-sm text-muted-foreground" />
              </div>
              <button className="w-full rounded-md bg-gradient-primary py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)]">
                Simpan Perubahan
              </button>
            </div>
          </div>

          <div className="wf-card p-4 flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Password</div>
              <div className="text-xs text-muted-foreground">••••••••</div>
            </div>
            <Link to="/change-password" className="inline-flex items-center gap-2 rounded-md border border-border bg-surface-2 px-3 py-1.5 text-xs font-medium hover:bg-surface-3">
              <KeyRound className="w-3.5 h-3.5" /> Ganti Password
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
