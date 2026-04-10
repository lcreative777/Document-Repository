import { 
  ChevronRight, 
  UploadCloud, 
  FileText, 
  CheckCircle2, 
  X, 
  Table as TableIcon, 
  GitBranch, 
  ArrowRight, 
  Info,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';

export default function SubmitDocuments() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4 lg:px-8">
      {/* Header Section */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <nav className="flex items-center gap-2 text-sm text-on-surface-variant mb-4">
            <span>Documents</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-on-surface font-medium">New Submission</span>
          </nav>
          <h1 className="text-4xl font-semibold tracking-tight text-on-surface">Submit Documents</h1>
          <p className="text-on-surface-variant mt-2 max-w-lg">Contribute to the institutional knowledge base by uploading academic assessments and faculty research.</p>
        </div>
        <div className="flex bg-surface-container p-1 rounded-xl w-fit">
          <button className="px-6 py-2 text-sm font-medium rounded-lg transition-all text-on-surface-variant hover:text-on-surface">Single Document</button>
          <button className="px-6 py-2 text-sm font-medium rounded-lg transition-all bg-white shadow-sm text-primary">Bulk Upload</button>
        </div>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Upload Area */}
        <div className="lg:col-span-8 space-y-8">
          <div className="relative group cursor-pointer">
            <div className="bg-primary/[0.02] border-2 border-dashed border-primary/30 rounded-3xl p-12 flex flex-col items-center justify-center text-center transition-all hover:border-primary/60 hover:bg-primary/[0.04]">
              <div className="w-16 h-16 bg-surface-container-high rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <UploadCloud className="w-8 h-8 text-primary fill-primary/10" />
              </div>
              <h3 className="text-xl font-semibold text-on-surface mb-2">Drop multiple files here or click to browse</h3>
              <p className="text-on-surface-variant text-sm">Support for PDF, DOCX, and XLSX up to 50MB per file</p>
              <input className="absolute inset-0 opacity-0 cursor-pointer" multiple type="file" />
            </div>
          </div>

          {/* Uploading List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <h4 className="font-semibold text-on-surface">Uploading (3)</h4>
              <span className="text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider">65% Overall</span>
            </div>
            
            <div className="space-y-3">
              {/* File 1 */}
              <div className="bg-surface-container-lowest p-4 rounded-2xl card-shadow flex items-center gap-4 transition-transform hover:scale-[1.01] border border-outline-variant/5">
                <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h5 className="text-sm font-medium truncate">Annual_Assessment_2023_Q4.pdf</h5>
                    <span className="text-[10px] font-bold text-on-surface-variant">4.2 MB</span>
                  </div>
                  <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <CheckCircle2 className="w-6 h-6 text-emerald-500" />
              </div>

              {/* File 2 */}
              <div className="bg-surface-container-lowest p-4 rounded-2xl card-shadow flex items-center gap-4 transition-transform hover:scale-[1.01] border border-outline-variant/5">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h5 className="text-sm font-medium truncate">Curriculum_Redesign_Proposal_v2.docx</h5>
                    <span className="text-[10px] font-bold text-on-surface-variant">1.8 MB</span>
                  </div>
                  <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <button className="p-1 hover:bg-surface-container rounded-full transition-colors">
                  <X className="w-5 h-5 text-on-surface-variant hover:text-tertiary" />
                </button>
              </div>

              {/* File 3 */}
              <div className="bg-surface-container-lowest p-4 rounded-2xl card-shadow flex items-center gap-4 transition-transform hover:scale-[1.01] border border-outline-variant/5">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center">
                  <TableIcon className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h5 className="text-sm font-medium truncate">Faculty_Load_Analysis_2024.xlsx</h5>
                    <span className="text-[10px] font-bold text-on-surface-variant">850 KB</span>
                  </div>
                  <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <button className="p-1 hover:bg-surface-container rounded-full transition-colors">
                  <X className="w-5 h-5 text-on-surface-variant hover:text-tertiary" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Controls */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-surface-container-high rounded-3xl p-6 shadow-sm border border-white/40">
            <div className="flex items-center gap-2 mb-6">
              <GitBranch className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-primary tracking-tight">Taxonomy Application</h3>
            </div>
            
            <div className="space-y-6">
              <div className="p-4 bg-white/50 rounded-2xl">
                <p className="text-[10px] font-bold text-primary uppercase tracking-wider mb-3">Quick Presets</p>
                <div className="flex flex-wrap gap-2">
                  {['Institutional Review', 'Faculty Scholarship', 'Program Outcome'].map((preset) => (
                    <button key={preset} className="px-3 py-1.5 bg-white text-[10px] font-bold rounded-lg shadow-sm border border-primary/10 text-primary hover:bg-primary/5 transition-colors uppercase tracking-wider">
                      {preset}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: 'Department / Major', options: ['Apply to All...', 'Liberal Arts', 'Design & Digital Media', 'Fine Arts', 'Art History'] },
                  { label: 'Academic Level', options: ['Apply to All...', 'Undergraduate', 'Graduate', 'Post-Professional'] },
                  { label: 'Academic Year', options: ['Apply to All...', '2023-24', '2022-23', '2021-22'] }
                ].map((field) => (
                  <div key={field.label}>
                    <label className="block text-[10px] font-bold text-on-surface-variant mb-1 ml-1 uppercase tracking-wider">{field.label}</label>
                    <select className="w-full bg-surface-container-low border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-sm py-2 px-1 appearance-none cursor-pointer">
                      {field.options.map(opt => <option key={opt}>{opt}</option>)}
                    </select>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button className="w-full bg-primary text-white font-bold py-4 rounded-2xl fab-shadow hover:scale-[0.98] transition-transform flex items-center justify-center gap-2 group">
                  <span>Complete Submission</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[10px] text-center text-on-surface-variant mt-4 leading-relaxed font-medium">
                  By submitting, you agree to the Institutional Data Policy and Archive Management Guidelines.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low rounded-3xl p-6">
            <h4 className="text-sm font-bold text-on-surface mb-4 flex items-center gap-2">
              <Info className="w-4 h-4 text-tertiary" />
              Submission Guidelines
            </h4>
            <ul className="space-y-3">
              {[
                'Redact all sensitive student identifying information before upload.',
                'Ensure PDF files are OCR-compliant for accessibility indexing.',
                'Maximum batch size is 50 documents per session.'
              ].map((text, i) => (
                <li key={i} className="flex gap-3 text-[11px] text-on-surface-variant font-medium leading-relaxed">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}
