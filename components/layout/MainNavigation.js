import { useRouter } from "next/router";
import Link from "next/link";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const router = useRouter();

  return (
    <>
      <div className={classes.logo}>
        <h1>Dear Juna</h1>
      </div>
      <header className={classes.header}>
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname === "/" ? classes.active : ""}>
                Blogs
              </a>
            </Link>
          </li>
          <li>
            <Link href="/podcasts">
              <a
                className={router.pathname == "/podcasts" ? classes.active : ""}
              >
                Podcasts
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact-me">
              <a
                className={
                  router.pathname == "/contact-me" ? classes.active : ""
                }
              >
                Contact Me
              </a>
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default MainNavigation;
