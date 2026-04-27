"use client";

import React from "react";
import styles from "./DataTable.module.css";
import { MoreHorizontal } from "lucide-react";

interface Column<T> {
  key: keyof T | string;
  header: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (value: any, item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function DataTable<T extends Record<string, any>>({ columns, data }: DataTableProps<T>) {
  return (
    <div className={`${styles.tableWrapper} glass`}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key as string}>{col.header}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx} className={styles.row}>
              {columns.map((col) => (
                <td key={col.key as string}>
                  {col.render ? col.render(item[col.key], item) : item[col.key]}
                </td>
              ))}
              <td>
                <button className={styles.actionBtn}>
                  <MoreHorizontal size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
