import styles from './Comments.module.scss';

export const Comments = () => {
  return (
    <section
      className={styles.root}
      ref={(elem) => {
        if (!elem) {
          return;
        }
        const scriptElem = document.createElement('script');
        scriptElem.src = 'https://utteranc.es/client.js';
        scriptElem.async = true;
        scriptElem.crossOrigin = 'anonymous';
        scriptElem.setAttribute('repo', 'sua-no/next-blog');
        scriptElem.setAttribute('issue-term', 'pathname');
        scriptElem.setAttribute('label', 'blog-comment');
        scriptElem.setAttribute('theme', 'dark-blue');
        elem.appendChild(scriptElem);
      }}
    />
  );
};
