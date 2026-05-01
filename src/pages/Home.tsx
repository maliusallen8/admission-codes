import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, LogIn, CheckCircle2, Globe, Beaker, Palette, Trophy, GraduationCap, Calendar, UserPlus } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-[10px] uppercase font-bold tracking-[0.2em] text-brand-accent">
              <GraduationCap size={14} />
              Registration Open for 2026/2027
            </div>
            
            <h1 className="text-5xl md:text-7xl font-normal text-white leading-[1.1] font-serif italic">
              Empowering the Next Generation of Global Leaders
            </h1>
            
            <p className="text-lg text-brand-text-muted leading-relaxed max-w-xl">
              Join a legacy of academic excellence and holistic development. Our world-class curriculum and nurturing environment prepare students for the challenges of tomorrow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                to="/apply" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent text-white rounded-full font-bold text-[11px] uppercase tracking-widest shadow-xl shadow-brand-accent/20 hover:brightness-110 transition-all"
              >
                New Student Registration
                <ArrowRight size={18} />
              </Link>
              <Link 
                to="/portal" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                Returning Student Login
                <LogIn size={18} />
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl glass p-4 shadow-2xl relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-transparent pointer-events-none z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1000&auto=format&fit=crop" 
                alt="Aura Academy Campus" 
                className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Stat Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-2xl max-w-[200px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="text-3xl font-normal text-brand-accent font-serif tracking-tighter italic">98%</div>
              </div>
              <p className="text-[10px] uppercase tracking-wider text-brand-text-muted leading-tight">University Acceptance Rate for our graduating class.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Bento Grid */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
             <div className="text-[10px] uppercase tracking-[0.3em] text-brand-accent font-bold">Why Aura?</div>
            <h2 className="text-4xl font-normal text-white font-serif italic">The Pillars of Excellence</h2>
            <p className="text-brand-text-muted">Discover the pillars that make our institution a leader in primary and secondary education.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="md:col-span-2 glass rounded-3xl p-8 flex flex-col justify-between group hover:border-brand-accent/50 transition-all">
              <div className="space-y-6">
                <div className="w-12 h-12 glass border-brand-accent/30 text-brand-accent rounded-2xl flex items-center justify-center">
                  <Globe size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-normal text-white font-serif italic">Global Curriculum Standards</h3>
                  <p className="text-brand-text-muted">We integrate the best of international educational frameworks with local cultural values, ensuring students are globally competitive yet locally grounded.</p>
                </div>
              </div>
              <div className="mt-10 overflow-hidden rounded-2xl h-64 relative glass border-0">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" 
                  alt="Students Collaborating" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="glass bg-brand-accent/10 border-brand-accent/30 rounded-3xl p-8 flex flex-col justify-between hover:border-brand-accent transition-all">
              <div className="space-y-6">
                <div className="w-12 h-12 glass border-brand-accent/50 text-brand-accent rounded-2xl flex items-center justify-center">
                  <Beaker size={24} />
                </div>
                <div className="space-y-2 text-white">
                  <h3 className="text-2xl font-normal font-serif italic">STEM & Innovation</h3>
                  <p className="opacity-70 text-sm leading-relaxed">State-of-the-art robotics labs and science centers designed to foster critical thinking and practical problem-solving from an early age.</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10 uppercase tracking-[0.3em] text-[9px] font-bold text-brand-accent">
                New Lab Opening 2026
              </div>
            </div>

            {/* Card 3 */}
            <div className="glass rounded-3xl p-8 hover:border-brand-accent transition-all">
              <div className="space-y-6">
                <div className="w-12 h-12 glass text-brand-accent rounded-2xl flex items-center justify-center">
                  <Palette size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-normal text-white font-serif italic">Arts & Culture</h3>
                  <p className="text-brand-text-muted">Comprehensive programs in music, fine arts, and drama to nurture creative expression and emotional intelligence.</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="md:col-span-2 glass rounded-3xl p-8 flex flex-col md:flex-row gap-10 items-center hover:border-brand-accent transition-all">
              <div className="flex-1 space-y-6">
                <div className="w-12 h-12 glass text-brand-accent rounded-2xl flex items-center justify-center">
                  <Trophy size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-normal text-white font-serif italic">Holistic Athletics</h3>
                  <p className="text-brand-text-muted">Professional coaching in over 15 sports, emphasizing teamwork, discipline, and physical well-being across all age groups.</p>
                </div>
              </div>
              <div className="flex-1 w-full h-48 rounded-2xl overflow-hidden glass border-0">
                <img 
                  src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1000&auto=format&fit=crop" 
                  alt="Basketball Court" 
                  className="w-full h-full object-cover grayscale opacity-50"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-normal text-white font-serif italic">Enrollment Timeline</h2>
            <p className="text-brand-text-muted">Stay updated with the critical dates for the upcoming academic session to ensure a smooth application process.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Steps line */}
            <div className="hidden md:block absolute top-[22px] left-0 right-0 h-[1px] bg-brand-border z-0"></div>
            
            {[
              { id: '01', date: 'OCT 1, 2025', title: 'Portal Opens', desc: 'Online registration begins for all grades.' },
              { id: '02', date: 'JAN 15, 2026', title: 'Entrance Exams', desc: 'Academic assessments for new applicants.' },
              { id: '03', date: 'FEB 28, 2026', title: 'Interview Round', desc: 'Parent and student interactive sessions.' },
              { id: '04', date: 'MAR 20, 2026', title: 'Admissions Finalized', desc: 'Acceptance letters and fee payments.' },
            ].map((step, idx) => (
              <div key={step.id} className="relative z-10 flex flex-col items-center text-center gap-6 group">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center glass transition-all duration-300 ${idx === 0 ? 'border-brand-accent text-brand-accent' : 'text-brand-text-muted'}`}>
                  <span className="text-[10px] font-bold">{step.id}</span>
                </div>
                <div className="space-y-4">
                  <p className={`text-[10px] font-bold uppercase tracking-[0.2em] ${idx === 0 ? 'text-brand-accent' : 'text-brand-text-muted'}`}>
                    {step.date}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-xl font-normal text-white font-serif italic">{step.title}</h4>
                    <p className="text-xs text-brand-text-muted leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-10 glass p-16 rounded-3xl">
          <h2 className="text-5xl font-normal text-white font-serif italic">Secure Your Future</h2>
          <p className="text-brand-text-muted text-lg leading-relaxed">
            Applications are processed on a first-come, first-served basis. Don't miss the opportunity to join our vibrant academic community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/apply" 
              className="px-10 py-5 bg-brand-accent text-white rounded-full text-[11px] font-bold uppercase tracking-widest shadow-xl shadow-brand-accent/20 hover:brightness-110 transition-all"
            >
              Register New Student
            </Link>
            <Link 
              to="/portal" 
              className="px-10 py-5 glass text-white rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
            >
              Access Portal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
