'use client';

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";

const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

const Links = () => {
  const [open, setOpen] = useState(false);
  // Temporary session and admin state
  const session = true;
  const isAdmin = true;

  const handleCloseMobileMenu = () => {
    setOpen(false); // Close the mobile menu
  };

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} onClick={handleCloseMobileMenu} />
        ))}
        {session ? (
          <>
            {isAdmin && (
              <NavLink
                item={{ title: "Admin", path: "/admin" }}
                onClick={handleCloseMobileMenu}
              />
            )}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink
            item={{ title: "Login", path: "/login" }}
            onClick={handleCloseMobileMenu}
          />
        )}
      </div>

      <Image
        src="/images/menu.png"
        alt="menu"
        width={30}
        height={30}
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)} // Toggle the mobile menu
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} onClick={handleCloseMobileMenu} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
