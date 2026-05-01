import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import ManagerHome from "./pages/manager/Home";
import Categories from "./pages/manager/Categories";
import Supplies from "./pages/manager/Supplies";
import Products from "./pages/manager/Products";
import Transactions from "./pages/manager/Transactions";
import Restocks from "./pages/manager/Restocks";
import Users from "./pages/manager/Users";
import CashierHome from "./pages/cashier/Home";
import CashierProducts from "./pages/cashier/Products";
import CashierTransactions from "./pages/cashier/Transactions";
import LogisticHome from "./pages/logistic/Home";
import LogisticSupplies from "./pages/logistic/Supplies";
import LogisticRestocks from "./pages/logistic/Restocks";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/change-password" element={<ChangePassword />} />

          <Route path="/manager" element={<ManagerHome />} />
          <Route path="/manager/categories" element={<Categories />} />
          <Route path="/manager/supplies" element={<Supplies />} />
          <Route path="/manager/products" element={<Products />} />
          <Route path="/manager/transactions" element={<Transactions />} />
          <Route path="/manager/restocks" element={<Restocks />} />
          <Route path="/manager/users" element={<Users />} />

          <Route path="/cashier" element={<CashierHome />} />
          <Route path="/cashier/products" element={<CashierProducts />} />
          <Route path="/cashier/transactions" element={<CashierTransactions />} />

          <Route path="/logistic" element={<LogisticHome />} />
          <Route path="/logistic/supplies" element={<LogisticSupplies />} />
          <Route path="/logistic/restocks" element={<LogisticRestocks />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
