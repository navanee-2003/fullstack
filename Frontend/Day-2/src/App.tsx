import { lazy, LazyExoticComponent } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import UserLayout from "./pages/user/UserLayout";
import AdminLayout from "./pages/admin/AdminLayout";

type LazyComponent = LazyExoticComponent<React.ComponentType<any>>;

const LazyLayout = lazy(() => import("./components/ui/LazyLayout"));
const LazyLogin = lazy(() => import("./pages/auth/Login"));
const LazyRegister = lazy(() => import("./pages/auth/Register"));
const LazyHome = lazy(() => import("./pages/user/Home"));
const LazyAbout = lazy(() => import("./pages/user/About"));
const LazyDashboard = lazy(() => import("./pages/admin/Dashboard"));
const LazyUserInfo = lazy(() => import("./pages/admin/UserInfo"));
const LazyProfile = lazy(() => import("./pages/user/Profile"));

const UserRoutes = () => {
  return (
    <UserLayout>
      <Routes>
        <Route path="/home" element={<LazyLayout component={LazyHome} />} />
        <Route path="/about" element={<LazyLayout component={LazyAbout} />} />
        <Route path="/profile" element={<LazyLayout component={LazyProfile} />} />
      </Routes>
    </UserLayout>
  );
};

const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route
          path="/dashboard"
          element={<LazyLayout component={LazyDashboard} />}
        />
        <Route
          path="/user-info"
          element={<LazyLayout component={LazyUserInfo} />}
        />
      </Routes>
    </AdminLayout>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/user/home" />} />
      <Route path="/login" element={<LazyLayout component={LazyLogin} />} />
      <Route
        path="/register"
        element={<LazyLayout component={LazyRegister} />}
      />
      <Route path="/user/*" element={<UserRoutes />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
}

export default App;
