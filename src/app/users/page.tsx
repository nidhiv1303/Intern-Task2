"use client";

import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import DataTable from "@/components/common/DataTable";
import tableStyles from "@/components/common/DataTable.module.css";

const columns = [
  { key: "name", header: "User Name" },
  { key: "email", header: "Email Address" },
  { key: "role", header: "Role" },
  {
    key: "status",
    header: "Status",
    render: (value: string) => (
      <span className={`${tableStyles.badge} ${value === 'Active' ? tableStyles.statusActive :
        value === 'Inactive' ? tableStyles.statusInactive :
          tableStyles.statusPending
        }`}>
        {value}
      </span>
    )
  },
  { key: "lastActive", header: "Last Active" },
];

const dummyUsers = [
  { name: "Nidhi Chaudhary", email: "nidhi123@gmail.com", role: "Admin", status: "Active", lastActive: "2 mins ago" },
  { name: "Sujal Shah", email: "sujal@company.com", role: "Editor", status: "Active", lastActive: "1 hour ago" },
  { name: "Robert Johnson", email: "rob.j@gmail.com", role: "Viewer", status: "Inactive", lastActive: "3 days ago" },
  { name: "Emily Davis", email: "emily.d@outlook.com", role: "Editor", status: "Pending", lastActive: "Never" },
  { name: "Michael Wilson", email: "m.wilson@tech.io", role: "Admin", status: "Active", lastActive: "5 mins ago" },
  { name: "Jessica Brown", email: "jess.b@design.co", role: "Designer", status: "Active", lastActive: "10 mins ago" },
  { name: "David Miller", email: "david.m@sales.biz", role: "Manager", status: "Inactive", lastActive: "1 week ago" },
  { name: "Lisa Thompson", email: "lisa.t@hr.com", role: "HR", status: "Active", lastActive: "45 mins ago" },
];

export default function UsersPage() {
  return (
    <DashboardLayout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '1.875rem', fontWeight: '700' }}>User Management</h1>
            <p style={{ color: 'var(--secondary)', marginTop: '0.5rem' }}>Overview of all registered users and their status.</p>
          </div>
          <button style={{
            background: 'var(--primary)',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: 'var(--radius-md)',
            fontWeight: '600',
            transition: 'var(--transition)',
            boxShadow: '0 4px 12px var(--primary-glow)'
          }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Add New User
          </button>
        </header>

        <section>
          <DataTable columns={columns} data={dummyUsers} />
        </section>
      </div>
    </DashboardLayout>
  );
}
