import Link from "next/link";
import { PostType } from "../../types";
import styles from "./List.module.scss";

export const List = ({ id, date, title, tag }: PostType) => {
  return (
    <>
      <li key={id} className={styles.root}>
        <Link href={`/post/${id}`}>
          <a>
            <div>{title}</div>
            <div>
              {date} — {tag}
            </div>
          </a>
        </Link>
      </li>
    </>
  );
};
