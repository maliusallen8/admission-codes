import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Copy, 
  ArrowRight, 
  Upload, 
  CreditCard, 
  Calendar, 
  HelpCircle,
  Clock,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RegistrationSuccess() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
      {/* Success Hero */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center mb-20 space-y-6"
      >
        <div className="w-24 h-24 glass border-brand-accent/50 rounded-full flex items-center justify-center text-brand-accent shadow-2xl shadow-brand-accent/20">
          <CheckCircle2 size={48} strokeWidth={1} />
        </div>
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-normal text-white font-serif italic mb-4">Registration Successful</h1>
          <p className="text-xl text-brand-text-muted max-w-2xl leading-relaxed mx-auto italic">
            Thank you for choosing Aura Academy. Your application for the 2026/2027 academic year has been received and is now being processed by our admissions team.
          </p>
        </div>
      </motion.div>

      {/* Bento Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-7xl">
        {/* Confirmed Submission Card */}
        <div className="lg:col-span-8 glass p-10 rounded-3xl overflow-hidden flex flex-col justify-between gap-12 relative">
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-accent/5 opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-[80px]"></div>
          
          <div className="space-y-6 relative z-10">
            <div className="inline-block px-3 py-1 glass border-brand-accent/30 text-brand-accent rounded-lg text-[10px] font-bold uppercase tracking-[0.2em]">
              Application Status
            </div>
            <h2 className="text-3xl font-normal text-white font-serif italic tracking-tight leading-tight">Confirmed Submission</h2>
            <p className="text-brand-text-muted text-base leading-relaxed max-w-md">
              Your academic journey starts here. We have sent a comprehensive confirmation package to your registered email address.
            </p>
          </div>

          <div className="p-8 glass bg-white/5 border-white/5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-1">
              <span className="text-[10px] text-brand-text-muted uppercase font-bold tracking-widest leading-none">Reference Number</span>
              <p className="text-2xl font-normal text-brand-accent font-serif tracking-[0.1em] italic">AURA-2026-98442-X</p>
            </div>
            <button className="flex items-center gap-2 text-white font-bold text-[10px] uppercase tracking-widest hover:text-brand-accent transition-colors">
              <Copy size={16} /> Copy Code
            </button>
          </div>
        </div>

        {/* Community Welcome Card */}
        <div className="lg:col-span-4 glass border-0 rounded-3xl overflow-hidden relative shadow-2xl flex flex-col group min-h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop" 
            alt="Campus courtyard" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:scale-110 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-10 space-y-4">
            <div className="text-brand-accent text-[10px] uppercase tracking-[0.3em] font-bold italic">The Journey Begins</div>
            <h3 className="text-2xl font-normal text-white font-serif italic leading-tight">Welcome to the Community</h3>
            <p className="text-brand-text-muted text-sm leading-relaxed">Join over 1,200 students achieving excellence at Aura Academy.</p>
          </div>
        </div>

        {/* Timeline Sidebar Area */}
        <div className="lg:col-span-5 space-y-8">
          <h3 className="text-2xl font-normal text-white font-serif italic tracking-tight">Process Timeline</h3>
          <div className="space-y-4">
            <TimelineItem status="completed" label="Form Submission" detail="Completed on Oct 14, 2024" />
            <TimelineItem status="active" label="Document Verification" detail="In Progress - Estimated 3-5 days" />
            <TimelineItem status="pending" label="Interview Scheduling" detail="Pending verification" />
          </div>
        </div>

        {/* Next Steps Area */}
        <div className="lg:col-span-7 glass rounded-3xl p-10 space-y-10">
          <h3 className="text-2xl font-normal text-white font-serif italic tracking-tight">Immediate Next Steps</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <NextStep icon={Upload} label="Upload Transcripts" desc="Required for evaluation" />
            <NextStep icon={CreditCard} label="Pay Registration Fee" desc="Secure your slot" />
            <NextStep icon={Calendar} label="Campus Tour" desc="Schedule a physical visit" />
            <NextStep icon={HelpCircle} label="Speak to Advisor" desc="Get application help" />
          </div>
        </div>
      </div>

      {/* Final Portal Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-16 w-full glass p-10 rounded-[2.5rem] border-brand-accent/20 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden"
      >
         <div className="absolute inset-0 bg-brand-accent/5 pointer-events-none"></div>
        <div className="max-w-xl space-y-3 relative z-10">
          <h4 className="text-2xl font-normal text-white font-serif italic leading-tight">Registration Dashboard is Ready</h4>
          <p className="text-brand-text-muted text-sm leading-relaxed uppercase tracking-widest font-bold">
            Log in to your student portal to track your application status in real-time and manage your documents.
          </p>
        </div>
        <Link 
          to="/portal" 
          className="px-10 py-5 bg-brand-accent text-white rounded-full font-bold text-[11px] uppercase tracking-widest shadow-xl shadow-brand-accent/20 hover:brightness-110 active:scale-95 flex items-center gap-2 group transition-all relative z-10"
        >
          Enter Student Portal
          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  );
}

function TimelineItem({ status, label, detail }: { status: 'completed' | 'active' | 'pending', label: string, detail: string }) {
  const isCompleted = status === 'completed';
  const isActive = status === 'active';
  return (
    <div className={`p-5 rounded-2xl transition-all flex items-center gap-5 ${
      isCompleted ? 'glass opacity-50' : 
      isActive ? 'glass border-brand-accent/50 bg-brand-accent/5 shadow-2xl shadow-brand-accent/5' : 
      'glass opacity-20'
    }`}>
      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
        isCompleted ? 'bg-brand-accent/20 text-brand-accent' : 
        isActive ? 'bg-brand-accent text-white' : 
        'bg-white/5 text-white/20'
      }`}>
        {isCompleted ? <CheckCircle2 size={18} /> : 
         isActive ? <Clock size={18} /> : 
         <span className="text-xs font-bold font-serif italic">3</span>}
      </div>
      <div>
        <p className={`text-sm font-bold uppercase tracking-widest transition-colors ${isActive ? 'text-brand-accent' : 'text-white'}`}>{label}</p>
        <p className="text-[10px] text-brand-text-muted font-bold uppercase tracking-widest">{detail}</p>
      </div>
    </div>
  );
}

function NextStep({ icon: Icon, label, desc }: { icon: any, label: string, desc: string }) {
  return (
    <div className="glass p-6 rounded-2xl hover:border-brand-accent/30 transition-all group cursor-pointer space-y-4">
      <div className="w-12 h-12 glass bg-white/5 rounded-xl flex items-center justify-center text-brand-accent transition-transform group-hover:-translate-y-1">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <div className="space-y-1">
        <p className="text-[11px] font-bold text-white uppercase tracking-widest">{label}</p>
        <p className="text-[10px] text-brand-text-muted font-bold uppercase tracking-wider leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
