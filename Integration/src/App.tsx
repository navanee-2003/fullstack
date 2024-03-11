import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import UserLayout from "./pages/user/UserLayout";
import AdminLayout from "./pages/admin/AdminLayout";

// type LazyComponent = LazyExoticComponent<React.ComponentType<any>>;

const LazyLayout = lazy(() => import("./components/ui/LazyLayout"));
const LazyLogin = lazy(() => import("./pages/auth/Account"));
const LazyRegister = lazy(() => import("./pages/auth/Register"));
const LazyHome = lazy(() => import("./pages/user/Home"));
const LazyCreateEvent = lazy(() => import("./pages/user/CreateEvent"));
const LazyDashboard = lazy(() => import("./pages/admin/Dashboard"));
const LazyUserInfo = lazy(() => import("./pages/admin/UserInfo"));
const LazyProfile = lazy(() => import("./pages/user/Profile"));
const LazyPartyDetail = lazy(() => import("./pages/user/PartyDetails"));
const LazyUpdateParty = lazy(() => import("./pages/user/UpdateEvent"));
const LazyBookings = lazy(() => import("./pages/admin/Bookings"));
const LazySettings = lazy(() => import("./pages/admin/Settings"));
const LazyServiceRequestDetails = lazy(() => import("./pages/user/ServiceRequestDetails"));

const UserRoutes = () => {
  return (
    <UserLayout>
      <Routes>
        <Route path="/home" element={<LazyLayout component={LazyHome} />} />
        <Route
          path="/createParty"
          element={<LazyLayout component={LazyCreateEvent} />}
        />
        <Route
          path="/updateParty/:id"
          element={<LazyLayout component={LazyUpdateParty} />}
        />
        <Route
          path="/profile"
          element={<LazyLayout component={LazyProfile} />}
        />
        <Route
          path="/PartyDetails/:id"
          element={<LazyLayout component={LazyPartyDetail} />}
        />
        <Route
          path="/serviceRequestDetails/:id"
          element={<LazyLayout component={LazyServiceRequestDetails} />}
        />
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
          path="/users"
          element={<LazyLayout component={LazyUserInfo} />}
        />
        <Route
          path="/bookings"
          element={<LazyLayout component={LazyBookings} />}
        />
        <Route
          path="/settings"
          element={<LazyLayout component={LazySettings} />}
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
