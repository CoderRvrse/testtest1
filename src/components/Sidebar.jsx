import { Home, BarChart2, Settings, BotMessageSquare, LogOut } from 'lucide-react';
const NavItem = ({ icon: Icon, text, active }) => (
  <li className={`flex items-center p-3 my-1 rounded-lg cursor-pointer transition-colors duration-200 ${active ? 'bg-gradient-to-r from-sky-500 to-cyan-400 text-white shadow-lg' : 'text-gray-400 hover:bg-gray-700/50 hover:text-gray-200'}`}>
    <Icon size={22} /><span className="ml-4 font-medium">{text}</span>
  </li>
);
export function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4 border-r border-gray-800">
      <div className="flex items-center mb-10">
        <div className="bg-gradient-to-r from-sky-500 to-cyan-400 p-2 rounded-lg"><BotMessageSquare size={28} /></div>
        <h1 className="text-2xl font-bold ml-3">Zenith</h1>
      </div>
      <nav className="flex-grow">
        <ul><NavItem icon={Home} text="Dashboard" active /><NavItem icon={BarChart2} text="Analytics" /><NavItem icon={Settings} text="Settings" /></ul>
      </nav>
      <div className="border-t border-gray-800 pt-4">
        <div className="flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-700/50">
          <img src="https://i.pravatar.cc/40" alt="User Avatar" className="w-10 h-10 rounded-full" />
          <div className="ml-3"><p className="font-semibold">Admin User</p><p className="text-xs text-gray-500">View Profile</p></div>
          <LogOut size={20} className="ml-auto text-gray-400" />
        </div>
      </div>
    </aside>
  );
}
