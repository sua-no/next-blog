import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import { modeState } from '../../states';
import Git from '../../public/svg/github.svg';
import { ModeIcon } from '..';
import { useEffect } from 'react';

export const Header = () => {
  const router = useRouter();
  const [mode, setMode] = useRecoilState(modeState);
  const menu = [
    { href: '/', name: 'Home' },
    { href: '/posts', name: 'Posts' },
  ];

  useEffect(() => {
    const saved = localStorage.getItem('mode');
    if (saved && (saved === 'night' || saved === 'day')) setMode(saved);
  }, []);

  const switchMode = () => {
    const changed = mode === 'night' ? 'day' : 'night';
    localStorage.setItem('mode', changed);
    setMode(changed);
  };

  return (
    <header className={styles.root}>
      <Link href={'/'}>
        <a>
          <h1>Sua Blog</h1>
        </a>
      </Link>
      <div className={styles.links}>
        <nav>
          <ul>
            {menu.map(({ href, name }) => (
              <li
                key={name}
                className={router.pathname === href ? 'active' : ''}>
                <Link href={href}>
                  <a>{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.rights}>
          <button type="button" onClick={switchMode}>
            <ModeIcon mode={mode} />
          </button>
          <a href="https://github.com/sua-no" target="_blank" rel="noreferrer">
            <Image src={Git} alt="go github" />
          </a>
        </div>
      </div>
    </header>
  );
};
