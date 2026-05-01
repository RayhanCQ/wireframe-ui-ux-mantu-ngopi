import DashboardLayout from "@/components/wireframe/DashboardLayout";
import { Pill } from "@/components/wireframe/ui";
import { Plus, ShoppingCart } from "lucide-react";

export default function CashierProducts() {
  return (
    <DashboardLayout role="cashier" title="Pemesanan">
      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        {["Coffee", "Snacks", "Matcha", "Pops", "Juice"].map((t, i) => (
          <button key={t} className={`px-3 py-1.5 rounded-md text-xs ${i === 0 ? "bg-surface-3 text-foreground border border-border" : "text-muted-foreground hover:bg-surface-2"}`}>
            {t}
          </button>
        ))}
      </div>

      <div className="wf-card p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Pill tone="primary">Coffee</Pill>
            <span className="text-xs text-muted-foreground">1 menu</span>
          </div>
          <button className="inline-flex items-center gap-2 rounded-md bg-surface-2 border border-border px-3 py-1.5 text-xs hover:bg-surface-3">
            <ShoppingCart className="w-3.5 h-3.5" /> Keranjang (0)
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="rounded-xl border border-border bg-surface-2 overflow-hidden hover:border-primary/50 transition-colors">
            <div className="aspect-square bg-surface-3 grid place-items-center text-4xl relative">
              ☕
              <Pill tone="warning"><span className="absolute top-2 left-2">Stok Tipis</span></Pill>
              <button className="absolute top-2 right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground grid place-items-center hover:opacity-90">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="p-3">
              <div className="text-sm font-medium">Espresso</div>
              <div className="text-primary text-sm font-semibold mt-0.5">Rp 20.000</div>
            </div>
          </div>

          {/* empty placeholder cards for layout */}
          {[1,2,3].map(i => (
            <div key={i} className="rounded-xl border border-dashed border-border/60 bg-surface/40 aspect-[1/1.25] grid place-items-center">
              <span className="text-xs text-muted-foreground">— kosong —</span>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
