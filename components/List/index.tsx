import Link from "next/link";
import { PostType } from "../../types";

export const List = ({ id, date, title, tag }: PostType) => {
  return (
    <>
      <li key={id}>
        <Link href={`/post/${id}`}>
          <a>
            <div className="title">{title}</div>
            <div className="date">
              {date} — {tag}
            </div>
          </a>
        </Link>
      </li>
    </>
  );
};
