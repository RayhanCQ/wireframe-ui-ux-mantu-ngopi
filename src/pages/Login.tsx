import { Link } from "react-router-dom";
import { Coffee, Eye } from "lucide-react";
import loginCoffee from "@/assets/login-coffee.jpg";

export default function Login() {
  return (
    <div className="min-h-screen grid place-items-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-login" />
      <div className="absolute inset-0 [background:radial-gradient(80%_60%_at_50%_120%,hsl(280_90%_45%/0.45),transparent_70%)]" />

      <div className="relative w-[880px] max-w-[94vw] grid grid-cols-2 rounded-2xl overflow-hidden border border-border bg-surface shadow-[var(--shadow-card)]">
        {/* Form */}
        <div className="p-10">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-md bg-gradient-primary grid place-items-center">
              <Coffee className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg tracking-tight">Mantu-Ngopi</span>
          </div>

          <h1 className="text-2xl font-semibold mb-1">Welcome Back!</h1>
          <p className="text-sm text-muted-foreground mb-8">Masuk ke dashboard untuk melanjutkan.</p>

          <label className="block text-xs text-muted-foreground mb-1.5">Username</label>
          <input className="w-full mb-4 rounded-md bg-input border border-border px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-ring" placeholder="username" />

          <label className="block text-xs text-muted-foreground mb-1.5">Password</label>
          <div className="relative mb-6">
            <input type="password" className="w-full rounded-md bg-input border border-border px-3 py-2.5 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-ring" placeholder="••••••••" />
            <Eye className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          </div>

          <Link to="/manager" className="block text-center w-full rounded-md bg-gradient-primary py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90">
            Login
          </Link>

          <div className="mt-6 text-xs text-muted-foreground space-y-1">
            <div className="font-medium text-foreground/80">Demo navigation:</div>
            <div className="flex flex-wrap gap-2">
              <Link to="/manager" className="underline hover:text-primary">Manager</Link>
              <Link to="/cashier" className="underline hover:text-primary">Cashier</Link>
              <Link to="/logistic" className="underline hover:text-primary">Logistic</Link>
              <Link to="/" className="underline hover:text-primary">All wireframes</Link>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <img src={loginCoffee} alt="Coffee cups on dark table" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
