"use client";

import { Search, Bell, Moon, User } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={`${styles.header} glass`}>
      <div className={styles.left}>
        <div className={styles.searchWrapper}>
          <Search className={styles.searchIcon} size={18} />
          <input 
            type="text" 
            placeholder="Search everything..." 
            className={styles.searchInput}
          />
        </div>
      </div>

      <div className={styles.right}>
        <button className={styles.iconBtn}>
          <Moon size={20} />
        </button>
        <button className={styles.iconBtn}>
          <Bell size={20} />
          <span className={styles.badge} />
        </button>
        <div style={{ height: '24px', width: '1px', background: 'var(--card-border)' }} />
        <button className={styles.iconBtn}>
          <User size={20} />
        </button>
      </div>
    </header>
  );
}
