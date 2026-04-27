"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  LogOut,
} from "lucide-react";
import styles from "./Sidebar.module.css";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Users", href: "/users", icon: Users },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={`${styles.sidebar} glass`}>
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.navItem} ${pathname === item.href ? styles.active : ""}`}
          >
            <item.icon />
            {item.name}
          </Link>
        ))}
      </nav>

      <div className={styles.footer}>
        <div className={styles.userProfile}>
          <div className={styles.avatar}>NC</div>
          <div className={styles.userInfo}>
            <h4>Nidhi Chaudhary</h4>
            <p>Admin Profile</p>
          </div>
        </div>
        <button className={styles.navItem} style={{ marginTop: '1rem', width: '100%' }}>
          <LogOut />
          Logout
        </button>
      </div>
    </aside>
  );
}
