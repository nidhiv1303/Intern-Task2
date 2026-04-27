"use client";

import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import { Users, DollarSign, ShoppingCart, Activity } from "lucide-react";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <header>
          <h1 style={{ fontSize: '1.875rem', fontWeight: '700' }}>Dashboard Overview</h1>
          <p style={{ color: 'var(--secondary)', marginTop: '0.5rem' }}>Welcome back, User! Here&apos;s what&apos;s happening today.</p>
        </header>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem'
        }}>
          <StatCard
            title="Total Users"
            value="12,482"
            icon={Users}
          />
          <StatCard
            title="Total Revenue"
            value="$45,231"
            icon={DollarSign}
          />
          <StatCard
            title="Active Orders"
            value="892"
            icon={ShoppingCart}
          />
          <StatCard
            title="Engagement Rate"
            value="64.2%"
            icon={Activity}
          />
        </div>

        <section style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
          <div className="glass-card" style={{ padding: '1.5rem', minHeight: '300px' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Performance Chart</h3>
            <div style={{
              height: '200px',
              display: 'flex',
              alignItems: 'flex-end',
              gap: '12px',
              padding: '1rem 0'
            }}>
              {[40, 70, 45, 90, 65, 80, 50, 75, 60, 85].map((h, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${h}%`,
                    background: 'var(--primary)',
                    borderRadius: '4px 4px 0 0',
                    opacity: 0.3 + (h / 100) * 0.7,
                    transition: 'var(--transition)'
                  }}
                />
              ))}
            </div>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Recent Notifications</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { text: "New user registered", time: "2 min ago" },
                { text: "System update completed", time: "1 hour ago" },
                { text: "Monthly report ready", time: "3 hours ago" },
              ].map((n, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                  <span>{n.text}</span>
                  <span style={{ color: 'var(--secondary)' }}>{n.time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
