import { useRecoilValue } from 'recoil';

import { modeState } from '../../states';
import { PostType } from '../../types';
import styles from './Content.module.scss';

export const Content = ({ ...props }: PostType) => {
  const modeStateValue = useRecoilValue(modeState);
  return (
    <section className={styles.root}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.date}>
        {props.date} — {props.tag}
      </div>
      <div
        className={modeStateValue === 'night' ? '' : styles.day}
        dangerouslySetInnerHTML={{ __html: props.contentHtml ?? '' }}
      />
    </section>
  );
};
