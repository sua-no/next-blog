import React from 'react';

type AppLayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: AppLayoutProps) => {
  return (
    <main>
      <div className="wrapper">{children}</div>
    </main>
  );
};
