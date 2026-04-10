import { 
  Search, 
  Plus, 
  List, 
  Grid, 
  X, 
  Table as TableIcon, 
  FileText, 
  Download,
  MoreHorizontal
} from 'lucide-react';
import { motion } from 'motion/react';
import { ASSETS } from '../constants';
import { RepositoryItem } from '../types';

const REPO_DATA: RepositoryItem[] = [
  {
    id: '1',
    title: '2024 MFA Design Synthesis - Phase I',
    major: 'Design & Media',
    level: 'Graduate',
    year: '2024',
    filesCount: 12,
    uploadedBy: 'Dr. Elena Ross',
    authorAvatar: ASSETS.ELENA_ROSS,
    date: 'Oct 12, 2023',
    fileType: 'PDF'
  },
  {
    id: '2',
    title: 'Annual Assessment Plan - Liberal Arts',
    major: 'General Education',
    level: 'Undergrad',
    year: '2023',
    filesCount: 4,
    uploadedBy: 'Prof. Marcus Thorne',
    authorAvatar: ASSETS.MARCUS_THORNE,
    date: 'Sep 28, 2023',
    fileType: 'DOC'
  },
  {
    id: '3',
    title: 'Q4 Retention Metrics - Visual Arts',
    major: 'Fine Arts',
    level: 'Institutional',
    year: '2024',
    filesCount: 1,
    uploadedBy: 'Sarah Jenkins',
    authorAvatar: ASSETS.SARAH_JENKINS,
    date: 'Nov 05, 2023',
    fileType: 'XLS'
  },
  {
    id: '4',
    title: 'Program Review: Interactive Media',
    major: 'Design & Media',
    level: 'Graduate',
    year: '2024',
    filesCount: 8,
    uploadedBy: 'Dr. David Chen',
    authorAvatar: ASSETS.DAVID_CHEN,
    date: 'Dec 01, 2023',
    fileType: 'PPT'
  }
];

export default function Repository() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 lg:px-8">
      {/* Page Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-on-surface">Institutional Repository</h1>
          <p className="text-on-surface-variant font-medium">Curating academic excellence and assessment data across all departments.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary-container text-on-primary-container px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-95 transition-all w-fit">
          <Plus className="w-5 h-5" />
          New Submission
        </button>
      </div>

      {/* Smart Filters Bar */}
      <section className="bg-surface-container-low rounded-2xl p-4 mb-8 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          {[
            { label: 'Document Title', value: '"Portfolio Review"' },
            { label: 'Major', value: 'Design & Media' },
            { label: 'Level', value: 'Graduate' },
            { label: 'Year', value: '2024' }
          ].map((filter, i) => (
            <div key={i} className="flex items-center bg-white px-3 py-1.5 rounded-lg border border-outline-variant/30 text-sm font-medium text-on-surface-variant gap-2 group cursor-pointer hover:border-primary transition-all">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider">{filter.label}:</span>
              <span>{filter.value}</span>
              <X className="w-3.5 h-3.5 text-slate-300 group-hover:text-tertiary transition-colors" />
            </div>
          ))}
          <button className="text-primary text-[10px] font-bold uppercase tracking-widest ml-2 hover:underline">Clear All</button>
        </div>
        <div className="flex items-center bg-surface-container-highest p-1 rounded-lg">
          <button className="p-1.5 bg-white shadow-sm rounded-md text-primary">
            <List className="w-5 h-5" />
          </button>
          <button className="p-1.5 text-on-surface-variant hover:text-primary transition-colors">
            <Grid className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Main Table */}
      <section className="bg-white rounded-3xl shadow-sm overflow-hidden border border-outline-variant/10">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container-low/50">
              <tr>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/70">Document Title</th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/70">Major</th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/70">Level</th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/70">Year</th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/70 text-center">Files</th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/70">Uploaded By</th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/70">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container">
              {REPO_DATA.map((item, index) => (
                <motion.tr 
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group hover:bg-surface-container-low/30 transition-all cursor-pointer"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-[10px] ${
                        item.fileType === 'PDF' ? 'bg-red-50 text-red-600' :
                        item.fileType === 'DOC' ? 'bg-blue-50 text-blue-600' :
                        item.fileType === 'XLS' ? 'bg-emerald-50 text-emerald-600' :
                        'bg-purple-50 text-purple-600'
                      }`}>
                        {item.fileType}
                      </div>
                      <span className="font-bold text-on-surface group-hover:text-primary transition-colors">{item.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm font-medium text-on-surface-variant">{item.major}</td>
                  <td className="px-6 py-5">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                      item.level === 'Graduate' ? 'bg-surface-container-high text-primary' : 'bg-surface-container text-on-surface-variant'
                    }`}>
                      {item.level}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-sm font-medium">{item.year}</td>
                  <td className="px-6 py-5 text-center">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold">
                      {item.filesCount < 10 ? `0${item.filesCount}` : item.filesCount}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <img className="w-6 h-6 rounded-full object-cover" src={item.authorAvatar} alt={item.uploadedBy} />
                      <span className="text-sm font-medium">{item.uploadedBy}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">{item.date}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-8 text-center bg-surface-container-low/20">
          <button className="text-primary font-bold text-sm hover:underline">Load More Documents</button>
        </div>
      </section>

      {/* Bottom Export Bar */}
      <footer className="fixed bottom-0 left-0 lg:left-64 right-0 glass-header border-t border-outline-variant/10 ambient-shadow z-50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="text-sm text-on-surface-variant font-medium">
              Showing <span className="text-on-surface font-bold">47</span> of <span className="text-on-surface font-bold">312</span> documents
            </div>
            <div className="hidden sm:block h-4 w-px bg-outline-variant/30"></div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-on-surface-variant">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Sync status: Up to date
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Export Results:</span>
            <button className="px-4 py-2 bg-white border border-outline-variant/30 text-on-surface text-xs font-bold rounded-lg hover:bg-surface-container-low transition-all flex items-center gap-2">
              <TableIcon className="w-4 h-4 text-on-surface-variant" />
              CSV
            </button>
            <button className="px-4 py-2 bg-white border border-outline-variant/30 text-on-surface text-xs font-bold rounded-lg hover:bg-surface-container-low transition-all flex items-center gap-2">
              <FileText className="w-4 h-4 text-on-surface-variant" />
              EXCEL
            </button>
            <button className="ml-4 px-6 py-2 bg-primary-container text-on-primary-container text-xs font-bold rounded-lg shadow-lg shadow-primary/10 hover:brightness-110 transition-all">
              Export All Filtered
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
