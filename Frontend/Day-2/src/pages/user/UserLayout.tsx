import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import React, { ReactNode } from "react";

// const inter = Inter({subsets : ['latin']})

interface UserLayoutProps {
  children: ReactNode;
}

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col">
      {/* <header>h</header>*/}
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

// UserLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default UserLayout;
