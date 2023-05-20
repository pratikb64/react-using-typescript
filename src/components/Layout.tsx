import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="max-w-lg m-auto">
      <nav className="flex p-4 justify-between">
        <div>Home</div>
        <div>Login</div>
      </nav>
      {children}
      <footer className="mt-16">Footer</footer>
    </div>
  );
};

export default Layout;
