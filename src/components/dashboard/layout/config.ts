import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Overview', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'customers', title: 'Customers', href: paths.dashboard.customers, icon: 'users' },
  { key: 'instutions', title: 'Instutions', href: paths.dashboard.instutions.overview, icon: 'users' },
  { key: 'session', title: 'Sessions', href: paths.dashboard.Session.overview, icon: 'users' },
  { key: 'trainers', title: 'Trainers', href: paths.dashboard.trainers.overview, icon: 'users' },
] satisfies NavItemConfig[];
