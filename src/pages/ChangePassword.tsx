import DashboardLayout from "@/components/wireframe/DashboardLayout";
import { Send, Info } from "lucide-react";

export default function ChangePassword() {
  return (
    <DashboardLayout role="logistic" title="Request Ganti Password" showBack>
      <div className="grid place-items-center pt-4">
        <div className="w-[480px] max-w-full wf-card p-6 space-y-4">
          <div className="rounded-md border border-warning/30 bg-warning/10 p-3 flex gap-3">
            <Info className="w-4 h-4 text-warning mt-0.5 shrink-0" />
            <div className="text-xs text-foreground/80 leading-relaxed">
              <div className="font-medium text-warning mb-0.5">Informasi</div>
              Permintaan ganti password akan dikirim ke Manager untuk disetujui. Password baru akan aktif setelah Manager menyetujui permintaan.
            </div>
          </div>

          <div>
            <label className="block text-xs text-muted-foreground mb-1.5">Password Baru</label>
            <input type="password" placeholder="Minimal 8 karakter" className="w-full rounded-md bg-input border border-border px-3 py-2.5 text-sm" />
          </div>
          <div>
            <label className="block text-xs text-muted-foreground mb-1.5">Konfirmasi Password Baru</label>
            <input type="password" placeholder="Ulangi password baru" className="w-full rounded-md bg-input border border-border px-3 py-2.5 text-sm" />
          </div>

          <button className="w-full rounded-md bg-gradient-primary py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] inline-flex items-center justify-center gap-2">
            <Send className="w-4 h-4" /> Kirim Request
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
