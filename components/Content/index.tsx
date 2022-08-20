import { PostType } from "../../types";
import Comments from "../Comments";
import styles from "./Content.module.scss";

export const Content = ({ ...props }: PostType) => {
  return (
    <section className={styles.section}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.date}>
        {props.date} — {props.tag}
      </div>
      <br />
      <hr />
      <br />
      <div dangerouslySetInnerHTML={{ __html: props.contentHtml ?? "" }} />
      <Comments />
    </section>
  );
};
