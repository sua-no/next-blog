import React from "react";
import { Header } from "../Header";

type AppLayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: AppLayoutProps) => {
  return (
    <main>
      <Header />
      <div className="wrapper">{children}</div>
    </main>
  );
};
