import Logo from "../../layout/Logo/Logo";
import classes from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={classes.footer}>
      <p>Copyright © 2021 • Dear Juna</p>
      <Logo
          style={{backgroundColor: 'transparent', backgroundImage: 'none', fontSize: '1rem'}}
      />
    </div>
  );
};

export default Footer;
