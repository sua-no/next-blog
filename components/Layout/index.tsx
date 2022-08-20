import React from "react";
import { GoTop } from "../GoTop";
import { Header } from "../Header";

type AppLayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: AppLayoutProps) => {
  return (
    <main>
      <Header />
      <GoTop />
      <div className="wrapper">{children}</div>
    </main>
  );
};
