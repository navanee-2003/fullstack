import Sidebar from "@/components/ui/Sidebar";
import React, { ReactNode } from "react";
// import PropTypes from "prop-types";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {

 

  return (
    <div className="min-h-screen w-full bg-white text-black flex">
      <Sidebar />
      <main className="p-8 w-full">{children}</main>
    </div>
  );
};

// AdminLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default AdminLayout;
