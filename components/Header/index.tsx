import styles from "./Header.module.scss";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <a>
          <h1>SUA Blog</h1>
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href={"/posts"}>
              <a>All Posts</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
