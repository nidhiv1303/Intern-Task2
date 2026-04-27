"use client";

import React from "react";
import { TrendingUp, TrendingDown, LucideIcon } from "lucide-react";
import styles from "./StatCard.module.css";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isUp: boolean;
  icon: LucideIcon;
}

export default function StatCard({ title, value, change, isUp, icon: Icon }: StatCardProps) {
  return (
    <div className={`${styles.card} glass-card`}>
      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          <Icon size={20} className={styles.icon} />
        </div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.value}>{value}</h3>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
}
