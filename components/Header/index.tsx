import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Git from "../../public/svg/github.svg";

export const Header = () => {
  const router = useRouter();
  const menu = [
    { href: "/", name: "Home" },
    { href: "/posts", name: "Posts" },
  ];
  return (
    <header className={styles.root}>
      <Link href={"/"}>
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
                className={router.pathname === href ? styles.active : ""}
              >
                <Link href={href}>
                  <a>{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a href="https://github.com/sua-no" target="_blank" rel="noreferrer">
          <Image src={Git} alt="go github" />
        </a>
      </div>
    </header>
  );
};
