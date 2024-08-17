'use client';
import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  item: {
    title: string;
    path: string;
  };
  onClick?: () => void; // Optional onClick prop to handle closing the navbar
}

const NavLink = ({ item, onClick }: NavLinkProps) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path ? styles.active : ""
      }`}
      onClick={onClick} // Trigger the onClick function when the link is clicked
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
