import Image from 'next/image';

import styles from './NotFound.module.scss';
import Warning from '../../public/svg/warning.svg';

export const NotFound = () => {
  return (
    <div className={styles.root}>
      <span>
        <Image src={Warning} alt="warning" />
      </span>
      <h2>404</h2>
      <div>Page Not Found</div>
    </div>
  );
};
