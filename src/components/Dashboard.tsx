import { 
  Search, 
  Filter, 
  Calendar, 
  ArrowUpDown, 
  TrendingUp, 
  FileText, 
  BarChart2, 
  GitBranch, 
  MoreVertical,
  Plus
} from 'lucide-react';
import { motion } from 'motion/react';
import { ASSETS } from '../constants';
import { Submission } from '../types';

const RECENT_SUBMISSIONS: Submission[] = [
  {
    id: '1',
    title: 'Annual Program Assessment Report 2023',
    author: 'Dr. Marcus Thorne',
    authorAvatar: ASSETS.MARCUS_THORNE,
    type: 'Research',
    modified: '2h ago'
  },
  {
    id: '2',
    title: 'Institutional Learning Outcomes Data V2',
    author: 'Sarah Jenkins',
    authorAvatar: ASSETS.SARAH_JENKINS,
    type: 'Faculty',
    modified: '5h ago'
  },
  {
    id: '3',
    title: 'Curriculum Mapping Framework Final',
    author: 'Prof. Alan Turing',
    authorAvatar: ASSETS.ALAN_TURING,
    type: 'Taxonomy',
    modified: 'yesterday'
  }
];

export default function Dashboard() {
  return (
    <div className="max-w-md mx-auto pt-4 pb-24 px-4">
      {/* Hero Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold tracking-tight text-on-surface mb-1 leading-tight">Digital Curator</h2>
        <p className="text-on-surface-variant text-sm">Institutional Research & Repository Management</p>
      </section>

      {/* Search & Filters */}
      <section className="mb-8 space-y-4">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input 
            className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-400 rounded-2xl" 
            placeholder="Search repository..." 
            type="text"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2.5 bg-surface-container-high text-on-surface rounded-full text-sm font-medium flex items-center gap-2 active:scale-95 transition-transform">
            <Filter className="w-4 h-4" />
            All Types
          </button>
          <button className="px-4 py-2.5 bg-surface-container-high text-on-surface rounded-full text-sm font-medium flex items-center gap-2 active:scale-95 transition-transform">
            <Calendar className="w-4 h-4" />
            2023-24
          </button>
          <button className="px-4 py-2.5 bg-surface-container-high text-on-surface rounded-full text-sm font-medium flex items-center gap-2 active:scale-95 transition-transform">
            <ArrowUpDown className="w-4 h-4" />
            Recent
          </button>
        </div>
      </section>

      {/* Stats Bento */}
      <section className="grid grid-cols-2 gap-4 mb-10">
        <div className="col-span-2 p-6 bg-primary/5 rounded-3xl flex flex-col justify-between border border-primary/10">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary opacity-80">Total Documents</span>
            <p className="text-4xl font-bold text-on-surface mt-1">2,842</p>
          </div>
          <div className="mt-4 flex items-center gap-2 text-primary font-medium text-sm">
            <TrendingUp className="w-4 h-4" />
            +12% this month
          </div>
        </div>
        <div className="p-4 bg-surface-container-high rounded-2xl">
          <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Pending</span>
          <p className="text-2xl font-bold text-on-surface mt-1">42</p>
        </div>
        <div className="p-4 bg-surface-container-high rounded-2xl">
          <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Archived</span>
          <p className="text-2xl font-bold text-on-surface mt-1">1.1k</p>
        </div>
      </section>

      {/* Recent Submissions */}
      <section className="space-y-6">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-xl font-bold text-on-surface">Recent Submissions</h3>
          <a className="text-sm font-semibold text-primary hover:underline" href="#">View All</a>
        </div>

        {RECENT_SUBMISSIONS.map((sub, index) => (
          <motion.div 
            key={sub.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-surface-container-lowest p-5 rounded-2xl card-shadow active:scale-[0.98] transition-all border border-outline-variant/5"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center">
                {sub.type === 'Research' && <FileText className="w-7 h-7 text-primary" />}
                {sub.type === 'Faculty' && <BarChart2 className="w-7 h-7 text-primary" />}
                {sub.type === 'Taxonomy' && <GitBranch className="w-7 h-7 text-primary" />}
              </div>
              <span className="px-2.5 py-1 bg-surface-container-high text-on-surface-variant text-[10px] font-bold rounded uppercase tracking-widest">
                {sub.type}
              </span>
            </div>
            <h4 className="text-lg font-semibold text-on-surface leading-snug mb-2">{sub.title}</h4>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden">
                <img alt={sub.author} className="w-full h-full object-cover" src={sub.authorAvatar} />
              </div>
              <span className="text-sm text-on-surface-variant">{sub.author}</span>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10">
              <span className="text-xs text-slate-400">Modified {sub.modified}</span>
              <button className="text-primary p-2 -mr-2 hover:bg-surface-container rounded-full transition-colors">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* FAB */}
      <button className="fixed bottom-24 right-6 w-14 h-14 bg-primary text-white rounded-2xl fab-shadow flex items-center justify-center active:scale-90 transition-transform z-40">
        <Plus className="w-8 h-8" />
      </button>
    </div>
  );
}
