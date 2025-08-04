import { StatCard } from '../components/StatCard';
import { MainChart } from '../components/MainChart';
import { AiInsights } from '../components/AiInsights';
import { RecentActivity } from '../components/RecentActivity';
import { DollarSign, Users, ShoppingBag, Activity } from 'lucide-react';
const mockInsights = [
  { type: 'positive', title: 'Positive Revenue Trend', description: 'June to July saw a 35% increase in revenue.' },
  { type: 'negative', title: 'Subscription Churn', description: 'Churn rate is up by 5%. Consider a retention campaign.' },
  { type: 'neutral', title: 'New User Demographics', description: 'Increased sign-ups from the APAC region detected.' },
];
const mockActivity = [
  { avatarUrl: 'https://i.pravatar.cc/40?img=1', action: 'Alex Johnson purchased the Pro Plan.', timestamp: '5 minutes ago' },
  { avatarUrl: 'https://i.pravatar.cc/40?img=2', action: 'Samantha Carter started a new subscription.', timestamp: '1 hour ago' },
  { avatarUrl: 'https://i.pravatar.cc/40?img=3', action: 'New user signed up: michael.scott@dundermifflin.com', timestamp: '3 hours ago' },
  { avatarUrl: 'https://i.pravatar.cc/40?img=4', action: 'System alert: Server CPU usage at 92%.', timestamp: 'Yesterday' },
];
export function Dashboard() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white mb-6">Command Center</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="md:col-span-2 lg:col-span-2"><MainChart /></div>
        <div><AiInsights insights={mockInsights} /></div>
        <StatCard title="Total Revenue" value="$45,231.89" change="+20.1%" icon={DollarSign} />
        <StatCard title="Subscriptions" value="+2350" change="+180.1%" icon={Users} />
        <StatCard title="Sales" value="+12,234" change="+19%" icon={ShoppingBag} />
        <StatCard title="Active Now" value="573" change="-2" icon={Activity} changeType="decrease" />
        <div className="md:col-span-2 lg:col-span-2"><RecentActivity activityItems={mockActivity} /></div>
      </div>
    </div>
  );
}
