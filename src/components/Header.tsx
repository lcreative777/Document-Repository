import { Bell, Menu, Search } from 'lucide-react';
import { ASSETS } from '../constants';

interface HeaderProps {
  onMenuClick?: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full z-50 glass-header ambient-shadow">
      <div className="flex justify-between items-center px-4 lg:px-8 py-3 w-full max-w-[1920px] mx-auto">
        <div className="flex items-center gap-3 lg:gap-8">
          <button 
            onClick={onMenuClick}
            className="p-2 -ml-2 hover:bg-surface-container rounded-full transition-colors active:scale-95 lg:hidden"
          >
            <Menu className="w-6 h-6 text-primary" />
          </button>
          <img 
            alt="LCAD Institutional Research + Assessment" 
            className="h-8 lg:h-10 w-auto" 
            src={ASSETS.LOGO} 
          />
          
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium ml-4">
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Dashboard</a>
            <a href="#" className="text-primary border-b-2 border-primary pb-1">Documents</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Faculty Reports</a>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:gap-4">
          <div className="hidden md:block relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full text-sm w-64 focus:ring-2 focus:ring-primary/20 transition-all" 
              placeholder="Search repository..." 
              type="text"
            />
          </div>
          
          <button className="p-2 hover:bg-surface-container rounded-full transition-colors relative">
            <Bell className="w-6 h-6 text-on-surface-variant" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
          </button>
          
          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant/20">
            <img 
              alt="User avatar" 
              className="w-full h-full object-cover" 
              src={ASSETS.AVATAR_FEMALE} 
            />
          </div>
        </div>
      </div>
    </header>
  );
}
