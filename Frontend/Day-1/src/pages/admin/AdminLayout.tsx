import React, { ReactNode } from "react";
// import PropTypes from "prop-types";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="admin_container">
      <aside>{/* Sidebar */}</aside>
      <main>{children}</main>
    </div>
  );
};

// AdminLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default AdminLayout;
