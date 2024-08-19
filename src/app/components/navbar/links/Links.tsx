'use client';

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { handleLogout } from "@/lib/action";


const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

const Links = ({ session } : any) => {
  const [open, setOpen] = useState(false);
  // Temporary session and admin state

  // const isAdmin = true;

  const handleCloseMobileMenu = () => {
    setOpen(false); // Close the mobile menu
  };

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} onClick={handleCloseMobileMenu} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && 
              <NavLink
                item={{ title: "Admin", path: "/admin" }}
                onClick={handleCloseMobileMenu}
              />
            }
            <form action={handleLogout}>
            <button className={styles.logout}>Logout</button>
            </form>
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
