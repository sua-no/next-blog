import { useScroll } from '../../hooks/useScroll';
import styles from './GoTop.module.scss';
import Top from '../../public/svg/arrow.svg';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export const GoTop = () => {
  const scroll = useScroll();
  const [progress, setProgress] = useState(0);
  const size = 32;
  const strokeWidth = 1.8;
  const circumference = (size / 2) * Math.PI * 2;
  const dash = (progress * circumference) / 100;

  useEffect(() => {
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;

    const percentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setProgress(percentage);
  }, [scroll]);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <div
      className={styles.root}
      onClick={handleScrollTop}
      style={{
        visibility: scroll > 0 ? 'visible' : 'hidden',
        opacity: scroll > 0 ? 1 : 0,
      }}
    >
      <div className={styles.progress}>
        <svg>
          <defs>
            <linearGradient id="grad">
              <stop offset="0%" stopColor="#4183c4"></stop>
              <stop offset="100%" stopColor="#5741c4"></stop>
            </linearGradient>
          </defs>
          <circle
            fill="none"
            stroke="#2d3748"
            cx={size / 2}
            cy={size / 2}
            r={(size - strokeWidth) / 2}
            strokeWidth={strokeWidth}
          />
          <circle
            className={styles.progressBar}
            fill="none"
            stroke="#2d3748"
            cx={size / 2}
            cy={size / 2}
            r={(size - strokeWidth) / 2}
            strokeWidth={strokeWidth}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            strokeDasharray={`${[dash, circumference - dash]}`}
            strokeLinecap="round"
          />
        </svg>
      </div>
      <Image src={Top} alt="go top" width={16} height={16} />
    </div>
  );
};
