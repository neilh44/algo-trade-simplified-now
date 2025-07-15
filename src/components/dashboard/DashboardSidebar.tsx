import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  Home,
  BookOpen,
  FileText,
  TrendingUp,
  Users,
  User,
  HelpCircle,
  Calendar,
  Star,
} from 'lucide-react';

const sidebarItems = [
  {
    title: 'My Dashboard',
    href: '/dashboard',
    icon: Home,
  },
  {
    title: 'Free Courses',
    href: '/FreeCourses', // updated
    icon: BookOpen,
  },
  {
    title: 'Resources',
    href: '/Resources', // updated
    icon: FileText,
  },
  {
    title: 'Progress',
    href: '/Progress', // updated
    icon: TrendingUp,
  },
  {
    title: 'Community',
    href: '/dashboard/community', // unchanged
    icon: Users,
  },
  {
    title: 'Live Sessions',
    href: '/LiveSessions', // updated
    icon: Calendar,
  },
  {
    title: 'Achievements',
    href: '/dashboard/achievements', // unchanged
    icon: Star,
  },
  {
    title: 'Profile',
    href: '/Profile', // updated
    icon: User,
  },
  {
    title: 'Support',
    href: '/Support', // updated
    icon: HelpCircle,
  },
];

export const DashboardSidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-muted/30 border-r border-border h-full">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Navigation</h2>
        <nav className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;

            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
