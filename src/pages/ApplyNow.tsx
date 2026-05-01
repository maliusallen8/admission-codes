import { motion } from 'motion/react';
import { User, School, FileText, CreditCard, Phone, Plus, ArrowRight, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ApplyNow() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
      {/* Step Sidebar */}
      <aside className="w-full md:w-72 shrink-0">
        <div className="sticky top-32 space-y-8">
          <div>
            <h2 className="text-2xl font-normal text-white font-serif italic mb-1">Admissions</h2>
            <p className="text-[9px] font-bold text-brand-text-muted tracking-[0.3em] uppercase">Application ID: AURA-2026-8821</p>
          </div>

          <nav className="flex flex-col gap-2">
            {[
              { id: 1, label: 'Personal Details', icon: User, active: true },
              { id: 2, label: 'Academic History', icon: School, active: false },
              { id: 3, label: 'Documents', icon: FileText, active: false },
              { id: 4, label: 'Payment', icon: CreditCard, active: false },
            ].map((step) => (
              <div 
                key={step.id} 
                className={`flex items-center gap-4 p-4 rounded-2xl glass transition-all ${
                  step.active 
                  ? 'border-brand-accent/50 text-white' 
                  : 'text-brand-text-muted opacity-40 hover:opacity-100 hover:border-white/10'
                }`}
              >
                <step.icon size={18} className={step.active ? 'text-brand-accent' : ''} />
                <span className="text-[11px] uppercase tracking-widest font-bold">{step.label}</span>
              </div>
            ))}
          </nav>

          <div className="p-6 glass bg-white/5 border-white/5 rounded-2xl space-y-4">
            <h4 className="font-bold text-brand-accent text-[10px] uppercase tracking-widest">Need Assistance?</h4>
            <p className="text-[10px] text-brand-text-muted leading-relaxed font-bold uppercase tracking-wider">Our admissions office is ready to help with your application process.</p>
            <a href="#" className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest hover:text-brand-accent transition-colors">
              <Phone size={14} /> Contact Admissions
            </a>
          </div>
        </div>
      </aside>

      {/* Main Form Content */}
      <div className="flex-grow space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-normal text-white font-serif italic mb-4">Step 1: Personal Details</h1>
          <p className="text-brand-text-muted text-lg leading-relaxed">
            Please provide the student's primary information and guardian contact details. This information will be used for official school records and emergency situations.
          </p>
        </motion.div>

        <form className="space-y-10 max-w-4xl" onSubmit={(e) => e.preventDefault()}>
          {/* Student Info Card */}
          <div className="glass rounded-3xl p-8 md:p-10 space-y-8">
            <div className="flex items-center gap-3 pb-4 border-b border-white/5">
              <div className="p-2 glass text-brand-accent rounded-lg">
                <User size={20} />
              </div>
              <h3 className="text-xl font-normal text-white font-serif italic tracking-tight">Student Information</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <Field label="Legal First Name" placeholder="e.g. James" />
              <Field label="Legal Last Name" placeholder="e.g. Smith" />
              <Field label="Date of Birth" type="date" />
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-brand-text-muted uppercase tracking-[0.2em]">Gender</label>
                <select className="w-full px-4 py-3 rounded-xl glass bg-white/5 border-white/10 text-white font-normal text-sm focus:border-brand-accent outline-none transition-all appearance-none">
                  <option className="bg-brand-bg">Select Gender</option>
                  <option className="bg-brand-bg">Male</option>
                  <option className="bg-brand-bg">Female</option>
                  <option className="bg-brand-bg">Prefer not to say</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-4 pt-2">
                <label className="text-[10px] font-bold text-brand-text-muted uppercase tracking-[0.2em]">Grade Level Applying For</label>
                <div className="flex flex-wrap gap-3">
                  {['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5'].map((grade, idx) => (
                    <button 
                      key={grade} 
                      type="button"
                      className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all border ${
                        idx === 0 
                        ? 'bg-brand-accent text-white border-brand-accent shadow-lg shadow-brand-accent/20' 
                        : 'glass text-brand-text-muted border-white/10 hover:border-brand-accent'
                      }`}
                    >
                      {grade}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Parent/Guardian Info Card */}
          <div className="glass rounded-3xl p-8 md:p-10 space-y-8">
            <div className="flex items-center gap-3 pb-4 border-b border-white/5">
              <div className="p-2 glass text-brand-accent rounded-lg">
                <Phone size={20} />
              </div>
              <h3 className="text-xl font-normal text-white font-serif italic tracking-tight">Parent / Guardian Contact</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <Field label="Full Name" placeholder="Guardian's legal name" />
              <Field label="Relationship (e.g. Mother, Father, Legal Guardian)" placeholder="Legal relation" />
              <Field label="Email Address" type="email" placeholder="email@example.com" />
              <Field label="Primary Phone Number" type="tel" placeholder="+1 (555) 000-0000" />
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-bold text-brand-text-muted uppercase tracking-[0.2em]">Home Address</label>
                <textarea 
                  className="w-full px-4 py-3 rounded-xl glass bg-white/5 border-white/10 text-white font-normal text-sm focus:border-brand-accent outline-none transition-all min-h-[100px] placeholder:text-white/20"
                  placeholder="Complete residential address"
                />
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="glass rounded-3xl p-8 md:p-10 space-y-8">
            <div className="flex justify-between items-center pb-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="p-2 glass text-brand-accent rounded-lg">
                  <AlertCircle size={20} />
                </div>
                <h3 className="text-xl font-normal text-white font-serif italic tracking-tight">Emergency Contacts</h3>
              </div>
              <button type="button" className="inline-flex items-center gap-2 px-4 py-2 glass text-[10px] font-bold uppercase tracking-widest text-white hover:border-brand-accent transition-all">
                <Plus size={14} /> Add Another
              </button>
            </div>
            
            <div className="p-6 glass bg-white/5 border-white/5 rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-6">
              <Field label="Contact Name" small />
              <Field label="Phone Number" small type="tel" />
              <Field label="Relationship" small />
            </div>
          </div>

          {/* Form Navigation Actions */}
          <div className="flex justify-between items-center py-10 border-t border-white/5">
            <button type="button" className="text-[10px] uppercase tracking-widest font-bold text-brand-text-muted hover:text-white transition-colors">
              Save for later
            </button>
            <Link 
              to="/registration-success" 
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-brand-accent text-white rounded-full font-bold text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-brand-accent/20 hover:brightness-110 transition-all group"
            >
              Academic History
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </form>
      </div>

      {/* Right Column Context */}
      <aside className="hidden xl:block w-80 shrink-0">
        <div className="sticky top-32 space-y-6">
          <div className="relative rounded-2xl overflow-hidden aspect-[3/4] glass border-0 p-3 group">
             <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 tracking-widest font-bold via-transparent group-hover:via-brand-accent/10 transition-all duration-700 pointer-events-none z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1544367332-9443c51f08bd?q=80&w=1000&auto=format&fit=crop" 
              alt="Student smiling" 
              className="w-full h-full object-cover rounded-xl grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end gap-2 text-white z-20">
              <h4 className="text-2xl font-normal font-serif italic italic leading-tight">Join our community.</h4>
              <p className="text-brand-accent text-[9px] font-bold tracking-[0.3em] uppercase">Class of 2026/27</p>
            </div>
          </div>

          <div className="glass bg-white/5 border-white/5 p-8 rounded-2xl space-y-4">
            <div className="flex items-center gap-2 text-brand-accent">
              <ShieldCheck size={20} />
              <span className="text-[10px] uppercase font-bold tracking-[0.3em]">Accredited</span>
            </div>
            <p className="text-[10px] uppercase tracking-widest leading-relaxed text-brand-text-muted font-bold">
              Your data is secured with institutional-grade encryption following modern global privacy standards.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}

function Field({ label, placeholder, type = 'text', small = false }: { label: string, placeholder?: string, type?: string, small?: boolean }) {
  return (
    <div className="space-y-2">
      <label className={`font-bold text-brand-text-muted uppercase tracking-[0.2em] ${small ? 'text-[9px]' : 'text-[10px]'}`}>
        {label}
      </label>
      <input 
        type={type} 
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl glass bg-white/5 border-white/10 text-white font-normal text-sm focus:border-brand-accent outline-none transition-all placeholder:text-white/20" 
      />
    </div>
  );
}
