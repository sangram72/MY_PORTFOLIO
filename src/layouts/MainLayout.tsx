import type { ReactNode } from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;