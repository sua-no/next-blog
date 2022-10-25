import React from 'react';
import { useRecoilValue } from 'recoil';
import { modeState } from '../../states';

import { GoTop } from '../GoTop';
import { Header } from '../Header';

type AppLayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: AppLayoutProps) => {
  const modeStateValue = useRecoilValue(modeState);

  return (
    <main className={modeStateValue}>
      <Header />
      <GoTop />
      <div className="wrapper">{children}</div>
    </main>
  );
};
