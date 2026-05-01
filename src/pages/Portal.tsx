import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  FileText, 
  FolderOpen, 
  Wallet, 
  UserCircle, 
  CheckCircle2, 
  School, 
  ArrowRight,
  TrendingUp,
  Star,
  FileCheck,
  FileUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Portal() {
  return (
    <div className="flex min-h-[calc(100vh-80px)]">
      {/* Sidebar Navigation */}
      <aside className="w-64 glass border-y-0 border-l-0 rounded-none hidden lg:flex flex-col shrink-0">
        <div className="p-8 border-b border-white/5 flex flex-col gap-4">
          <div className="w-14 h-14 rounded-full glass p-1 shadow-2xl relative overflow-hidden">
             <div className="absolute inset-0 bg-brand-accent/20 z-10 pointer-events-none"></div>
            <img 
              src="https://images.unsplash.com/photo-1544717297-fa1573b964f7?q=80&w=1000&auto=format&fit=crop" 
              alt="Passport style portrait" 
              className="w-full h-full object-cover rounded-full grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-1">
            <h2 className="font-normal text-white font-serif text-lg italic tracking-tighter italic leading-tight">Student Portal</h2>
            <p className="text-[9px] font-bold text-brand-text-muted uppercase tracking-[0.2em]">Academic Year 2026/27</p>
          </div>
        </div>

        <nav className="flex-grow p-4 space-y-2 mt-4">
          {[
            { label: 'Dashboard', icon: LayoutDashboard, active: true },
            { label: 'Applications', icon: FileText, active: false },
            { label: 'Documents', icon: FolderOpen, active: false },
            { label: 'Payments', icon: Wallet, active: false },
          ].map((item) => (
            <Link 
              key={item.label}
              to="#"
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                item.active 
                ? 'glass border-brand-accent/30 text-white font-bold shadow-lg shadow-brand-accent/5' 
                : 'text-brand-text-muted hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon size={18} className={item.active ? 'text-brand-accent' : ''} />
              <span className="text-[11px] uppercase tracking-widest">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-brand-accent">
              <UserCircle size={20} />
            </div>
            <div className="space-y-0.5">
              <p className="text-[10px] font-bold text-white uppercase tracking-wider">J. Harrison</p>
              <p className="text-[9px] text-brand-text-muted uppercase font-bold tracking-widest">Parent Account</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Portal Dashboard Content */}
      <main className="flex-grow px-6 py-12 md:px-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header Greeting */}
          <section className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-brand-accent text-[10px] font-bold uppercase tracking-[0.3em]"
            >
              <CheckCircle2 size={14} />
              Status: Active Student
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-normal text-white font-serif italic leading-tight">Welcome back, Alexander.</h1>
            <p className="text-lg text-brand-text-muted max-w-2xl leading-relaxed">
              It's time to confirm your details and enroll for the upcoming 2026/2027 academic year. Ensure all information is accurate to maintain your scholarship status.
            </p>
          </section>

          {/* Quick Stats Bento */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Identity Card */}
            <div className="md:col-span-2 glass rounded-3xl p-8 md:p-10 space-y-8">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-normal text-white font-serif italic flex items-center gap-3">
                  <UserCircle size={24} className="text-brand-accent" />
                  Identity Verification
                </h3>
                <button className="text-[10px] font-bold text-brand-accent uppercase tracking-widest hover:brightness-110 transition-all">Edit Profile</button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8">
                <div className="space-y-1">
                  <p className="text-[10px] text-brand-text-muted uppercase font-bold tracking-widest">Full Legal Name</p>
                  <p className="text-lg font-normal text-white">Alexander J. Montgomery</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-brand-text-muted uppercase font-bold tracking-widest">Student ID Number</p>
                  <p className="text-lg font-normal text-white">AURA-2024-8832</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-brand-text-muted uppercase font-bold tracking-widest">Date of Birth</p>
                  <p className="text-lg font-normal text-white">May 14, 2014</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-brand-text-muted uppercase font-bold tracking-widest">Emergency Contact</p>
                  <p className="text-lg font-normal text-white tracking-[0.1em]">+1 (555) 012-3456</p>
                </div>
              </div>
            </div>

            {/* Academic Standing Card */}
            <div className="glass bg-brand-accent/10 border-brand-accent/30 p-8 rounded-3xl flex flex-col justify-between overflow-hidden relative group hover:border-brand-accent transition-all">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <div className="space-y-4 relative z-10">
                <School size={40} className="text-brand-accent opacity-50" />
                <h3 className="text-2xl font-normal text-white font-serif italic leading-tight">Current Standing</h3>
              </div>
              <div className="space-y-5 pt-8 relative z-10">
                <div className="flex justify-between items-end border-b border-white/5 pb-3">
                  <p className="text-[9px] font-bold text-brand-text-muted uppercase tracking-[0.2em]">Current Grade</p>
                  <p className="text-lg font-normal text-white italic">Grade 5</p>
                </div>
                <div className="flex justify-between items-end border-b border-white/5 pb-3">
                  <p className="text-[9px] font-bold text-brand-text-muted uppercase tracking-[0.2em]">GPA</p>
                  <p className="text-lg font-normal text-white italic">3.9 / 4.0</p>
                </div>
                <div className="flex justify-between items-end">
                  <p className="text-[9px] font-bold text-brand-text-muted uppercase tracking-[0.2em]">Attendance</p>
                  <p className="text-lg font-normal text-brand-accent italic font-serif">98%</p>
                </div>
              </div>
            </div>
          </section>

          {/* Grade Path Selection */}
          <section className="space-y-8">
            <div className="border-l border-brand-accent/50 pl-6 space-y-2">
              <h2 className="text-3xl font-normal text-white font-serif italic tracking-tight italic">Select Your 2026/2027 Grade</h2>
              <p className="text-brand-text-muted">Choose your progression path. Based on your current performance, you are eligible for the following tracks.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Option 1 */}
              <div className="group relative glass p-8 rounded-3xl hover:border-brand-accent/30 transition-all cursor-pointer">
                <div className="absolute top-6 right-6 w-5 h-5 rounded-full border border-white/10 group-hover:border-brand-accent/50 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-brand-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="space-y-5">
                  <span className="inline-block px-3 py-1 glass bg-white/5 rounded-lg text-[9px] font-bold text-white uppercase tracking-widest">Standard Track</span>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-normal text-white font-serif italic">Grade 6: Middle School Prep</h4>
                    <p className="text-[13px] text-brand-text-muted leading-relaxed">Focuses on core competencies in Mathematics, Integrated Science, and Literature with a transition to independent research projects.</p>
                  </div>
                  <ul className="space-y-3 pt-4 border-t border-white/5">
                    <li className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-text-muted">
                      <CheckCircle2 size={16} className="text-brand-accent" /> Includes Foreign Language Electives
                    </li>
                    <li className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-text-muted">
                      <CheckCircle2 size={16} className="text-brand-accent" /> Advanced Lab Access
                    </li>
                  </ul>
                </div>
              </div>

              {/* Option 2 (Selected) */}
              <div className="relative glass border-brand-accent/50 bg-brand-accent/10 p-8 rounded-3xl shadow-2xl shadow-brand-accent/5 cursor-pointer">
                <div className="absolute top-6 right-6 w-5 h-5 rounded-full border border-brand-accent flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-brand-accent rounded-full"></div>
                </div>
                <div className="space-y-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 glass bg-white/10 text-white rounded-lg text-[9px] font-bold uppercase tracking-widest">
                    <Star size={10} className="fill-brand-accent text-brand-accent" />
                    Accelerated Program
                  </span>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-normal text-white font-serif italic">Grade 6: Honors Global Scholars</h4>
                    <p className="text-[13px] text-brand-text-muted leading-relaxed">Intensive curriculum designed for high-performing students. Includes fast-track Algebra and International Relations foundations.</p>
                  </div>
                  <ul className="space-y-3 pt-4 border-t border-white/5">
                    <li className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-accent">
                      <TrendingUp size={16} /> Recommended based on GPA
                    </li>
                    <li className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-text-muted">
                      <CheckCircle2 size={16} className="text-brand-accent" /> Mentorship Opportunities
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom CTA Card */}
          <section className="glass rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative shadow-2xl">
             <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-accent/5 to-transparent pointer-events-none"></div>
            <div className="space-y-3 max-w-lg relative z-10">
              <h3 className="text-2xl font-normal text-white font-serif italic leading-tight tracking-tight">Finalize Enrollment</h3>
              <p className="text-brand-text-muted text-[10px] uppercase font-bold tracking-widest leading-relaxed">
                Please upload your most recent health clearance certificate and proof of residence to complete the enrollment process.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 relative z-10 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none px-8 py-4 glass hover:bg-white/5 rounded-full text-[10px] uppercase font-bold tracking-widest text-white flex items-center justify-center gap-2 transition-all">
                <FileUp size={18} />
                Upload Docs
              </button>
              <button className="flex-1 sm:flex-none px-8 py-4 bg-brand-accent hover:brightness-110 rounded-full text-[10px] uppercase font-bold tracking-widest text-white shadow-xl shadow-brand-accent/20 transition-all flex items-center justify-center gap-2">
                <FileCheck size={18} />
                Submit Enrollment
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
