import { HeaderComp, FooterComp } from "../molecules";

import styles from "../../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <HeaderComp />

      {children}

      <FooterComp className={styles.footercomp} />
    </div>
  );
};

export default Layout;
