import { 
  LayoutDashboard, 
  FileText, 
  BarChart2, 
  GitBranch, 
  Archive, 
  HelpCircle, 
  Settings,
  Library
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'reports', label: 'Faculty Reports', icon: BarChart2 },
    { id: 'taxonomy', label: 'Taxonomy', icon: GitBranch },
    { id: 'archives', label: 'Archives', icon: Archive },
  ];

  return (
    <aside className="hidden lg:flex flex-col h-screen w-64 fixed left-0 top-0 pt-20 bg-surface border-r border-outline-variant/10 p-4 z-40">
      <div className="flex items-center gap-3 px-4 py-6 mb-4">
        <div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center text-white shadow-sm">
          <Library className="w-6 h-6" />
        </div>
        <div>
          <div className="font-bold text-primary text-sm">LCAD Research</div>
          <div className="text-[10px] text-on-surface-variant uppercase tracking-widest font-semibold">Digital Curator</div>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all duration-150 ${
                isActive 
                  ? 'bg-surface-container-lowest text-primary shadow-sm font-semibold' 
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-on-surface-variant'}`} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto pt-4 border-t border-outline-variant/10 space-y-1">
        <button className="w-full flex items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:text-primary text-sm transition-colors">
          <HelpCircle className="w-5 h-5" />
          Support
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:text-primary text-sm transition-colors">
          <Settings className="w-5 h-5" />
          Settings
        </button>
      </div>
    </aside>
  );
}
