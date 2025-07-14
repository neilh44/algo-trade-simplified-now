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
  MessageSquare,
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
    href: '/dashboard/courses',
    icon: BookOpen,
  },
  {
    title: 'Resources',
    href: '/dashboard/resources',
    icon: FileText,
  },
  {
    title: 'Progress',
    href: '/dashboard/progress',
    icon: TrendingUp,
  },
  {
    title: 'Community',
    href: '/dashboard/community',
    icon: Users,
  },
  {
    title: 'Live Sessions',
    href: '/dashboard/sessions',
    icon: Calendar,
  },
  {
    title: 'Achievements',
    href: '/dashboard/achievements',
    icon: Star,
  },
  {
    title: 'Profile',
    href: '/dashboard/profile',
    icon: User,
  },
  {
    title: 'Support',
    href: '/dashboard/support',
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