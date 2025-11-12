import { Routes, Route } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import AdminHomePage from "./pages/AdminHomePage";
import ProjectsPage from "./pages/ProjectsPage";
import OrdersPage from "./pages/OrdersPage";
import UsersPage from "./pages/UsersPage";
import AccountSettingsPage from "./pages/AccountSettingsPage";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<AdminHomePage />} />

        <Route path="projects" element={<ProjectsPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="settings" element={<AccountSettingsPage />} />
      </Route>
    </Routes>
  );
}
