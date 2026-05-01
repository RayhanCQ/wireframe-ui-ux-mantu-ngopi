import { ReactNode } from "react";

export function Pill({ tone = "primary", children }: { tone?: "primary" | "warning" | "success" | "info" | "danger" | "muted"; children: ReactNode }) {
  const map: Record<string, string> = {
    primary: "bg-primary/15 text-primary",
    warning: "bg-warning/15 text-warning",
    success: "bg-success/15 text-success",
    info: "bg-info/15 text-info",
    danger: "bg-destructive/15 text-destructive",
    muted: "bg-surface-3 text-muted-foreground",
  };
  return <span className={`wf-pill ${map[tone]}`}>{children}</span>;
}

export function PrimaryButton({ children, icon: Icon }: { children: ReactNode; icon?: any }) {
  return (
    <button className="inline-flex items-center gap-2 rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 shadow-[var(--shadow-glow)]">
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );
}

export function GhostButton({ children, icon: Icon }: { children: ReactNode; icon?: any }) {
  return (
    <button className="inline-flex items-center gap-2 rounded-md border border-border bg-surface-2 px-3 py-1.5 text-xs font-medium text-foreground/90 hover:bg-surface-3">
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </button>
  );
}

export function IconButton({ tone = "muted", icon: Icon }: { tone?: "muted" | "primary" | "danger"; icon: any }) {
  const map: Record<string, string> = {
    muted: "bg-surface-3 text-muted-foreground hover:text-foreground",
    primary: "bg-primary/20 text-primary hover:bg-primary/30",
    danger: "bg-destructive/15 text-destructive hover:bg-destructive/25",
  };
  return (
    <button className={`w-8 h-8 grid place-items-center rounded-md ${map[tone]}`}>
      <Icon className="w-4 h-4" />
    </button>
  );
}
