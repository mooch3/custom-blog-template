import { useRouter } from "next/router";
import Link from "next/link";
import Logo from './Logo/Logo';
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const router = useRouter();

  return (
    <>
    <Logo />
      <header className={classes.header}>
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname === "/" ? classes.active : ""}>
                Home
              </a>
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default MainNavigation;
