import { motion } from 'motion/react';
import { Info, Download, Trash2, FileText, BadgeCheck } from 'lucide-react';

export default function TuitionFees() {
  const fees = [
    { grade: 'Primary 1', tuition: 12500, labs: 1200, admin: 450 },
    { grade: 'Primary 2', tuition: 12500, labs: 1200, admin: 450 },
    { grade: 'Primary 3', tuition: 13800, labs: 1550, admin: 550, highlighted: true },
    { grade: 'Primary 4', tuition: 13800, labs: 1550, admin: 550 },
    { grade: 'Primary 5', tuition: 15200, labs: 1800, admin: 600 },
    { grade: 'Primary 6', tuition: 15200, labs: 1800, admin: 600, highlighted: true },
  ];

  return (
    <div className="pt-12 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-block glass border-brand-accent/30 text-brand-accent px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">
              Admissions 2026/2027
            </span>
            <h1 className="text-5xl md:text-6xl font-normal text-white font-serif leading-tight italic">
              Tuition Fee Schedule
            </h1>
            <p className="text-lg text-brand-text-muted leading-relaxed max-w-xl">
              Providing a transparent and comprehensive breakdown of educational investments for the upcoming academic year. Our fee structure reflects our commitment to maintaining world-class facilities and academic excellence.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-72 lg:h-96 rounded-3xl overflow-hidden glass p-4"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" 
              alt="Elite School Hallway" 
              className="w-full h-full object-cover rounded-2xl grayscale"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Main Table Content */}
      <section className="glass rounded-3xl overflow-hidden mb-16">
        <div className="p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-normal text-white font-serif italic">Grade Level Breakdown</h2>
            <p className="text-brand-text-muted text-[10px] uppercase tracking-widest font-bold">Annual fees for Primary 1 to Primary 6</p>
          </div>
          <div className="md:text-right flex flex-col items-start md:items-end gap-1">
            <p className="text-[10px] font-bold text-brand-text-muted tracking-widest uppercase">Currency</p>
            <p className="text-3xl font-normal text-brand-accent font-serif italic">USD ($)</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 border-y border-brand-border text-brand-text-muted uppercase text-[10px] font-bold tracking-[0.2em]">
                <th className="px-8 py-5">Grade Level</th>
                <th className="px-8 py-5">Tuition Fee</th>
                <th className="px-8 py-5">Activities & Labs</th>
                <th className="px-8 py-5">Admin Fee</th>
                <th className="px-8 py-5 text-right font-serif lowercase italic normal-case tracking-normal text-sm opacity-50">Annual Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border/5">
              {fees.map((row, idx) => (
                <tr 
                  key={idx} 
                  className={`transition-all hover:bg-white/5 ${row.highlighted ? 'bg-brand-accent/5' : ''}`}
                >
                  <td className="px-8 py-6 font-normal text-white">{row.grade}</td>
                  <td className="px-8 py-6 text-brand-text-muted">${row.tuition.toLocaleString()}</td>
                  <td className="px-8 py-6 text-brand-text-muted">${row.labs.toLocaleString()}</td>
                  <td className="px-8 py-6 text-brand-text-muted">${row.admin.toLocaleString()}</td>
                  <td className="px-8 py-6 font-normal text-brand-accent font-serif text-xl md:text-2xl text-right italic">
                    ${(row.tuition + row.labs + row.admin).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-8 bg-white/5 flex items-center gap-4 text-brand-text-muted border-t border-brand-border">
          <Info size={20} className="text-brand-accent shrink-0" />
          <p className="text-[10px] uppercase tracking-widest leading-relaxed">
            Fees are billed termly (3 installments per year). A sibling discount of 10% applies to the tuition fee of the second child onwards.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass p-10 rounded-3xl flex flex-col justify-between group">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-normal text-white font-serif italic">Payment Schedules</h3>
              <p className="text-brand-text-muted leading-relaxed">
                We offer flexible payment options to accommodate different family financial plans. Payments can be made via bank transfer, credit card, or certified check.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 glass bg-white/5 border-brand-border rounded-2xl space-y-2">
                <p className="font-bold text-brand-accent uppercase tracking-[0.2em] text-[9px]">Annual Payment</p>
                <p className="text-lg font-normal text-white font-serif italic">5% Early Bird Discount</p>
              </div>
              <div className="p-6 glass bg-brand-accent/5 border-brand-accent/30 rounded-2xl space-y-2">
                <p className="font-bold text-brand-accent uppercase tracking-[0.2em] text-[9px]">Termly Installments</p>
                <p className="text-lg font-normal text-white font-serif italic">Standard Rate (3 Payments)</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-between items-center gap-6">
            <span className="font-bold text-brand-text-muted uppercase tracking-[0.2em] text-[9px]">Billing Support Available</span>
            <button className="flex items-center gap-2 text-brand-accent font-bold text-[10px] uppercase tracking-widest hover:brightness-110 group transition-all">
              Download PDF Guide <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        <div className="glass bg-brand-accent/10 border-brand-accent/30 text-white p-10 rounded-3xl space-y-10 flex flex-col">
          <div className="space-y-2">
            <h3 className="text-2xl font-normal font-serif italic leading-tight">Administrative Fees</h3>
            <p className="text-brand-text-muted text-[9px] tracking-[0.3em] uppercase font-bold">Institutional Charges</p>
          </div>
          
          <ul className="flex-grow space-y-6">
            {[
              { label: 'Application Fee', val: '$250', desc: 'One-time, non-refundable' },
              { label: 'Enrolment Deposit', val: '$1,500', desc: 'Deducted from first term' },
              { label: 'Uniform Pack', val: '$350', desc: 'Includes sports & house kits' },
              { label: 'Insurance (Annual)', val: '$120', desc: 'Comprehensive student coverage' },
            ].map((fee, idx) => (
              <li key={idx} className="flex justify-between items-end border-b border-white/5 pb-4">
                <div className="space-y-0.5">
                  <p className="font-normal text-white text-sm tracking-tight">{fee.label}</p>
                  <p className="text-[10px] text-brand-text-muted italic">{fee.desc}</p>
                </div>
                <span className="text-xl font-normal font-serif italic text-brand-accent">{fee.val}</span>
              </li>
            ))}
          </ul>

          <div className="pt-6 text-[9px] uppercase tracking-widest opacity-50 leading-relaxed text-brand-text-muted font-bold">
            Note: Application fee is non-refundable and due upon submission of initial interest form.
          </div>
        </div>
      </section>
    </div>
  );
}
