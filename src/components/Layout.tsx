import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogIn, UserCircle } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isPortal = location.pathname.startsWith('/portal') || location.pathname.startsWith('/apply');

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-x-0 border-t-0 rounded-none">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-2xl font-normal text-white font-serif italic tracking-wider">
            AURA ACADEMY
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'Tuition', path: '/tuition' },
              { name: 'Apply Now', path: '/apply' },
              { name: 'Student Portal', path: '/portal' },
            ].map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`text-[10px] uppercase tracking-[0.2em] transition-all hover:text-brand-accent ${
                  location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path))
                    ? 'text-white font-semibold' 
                    : 'text-brand-text-muted'
                }`}
              >
                {location.pathname === link.path && <span className="mr-2 text-brand-accent">•</span>}
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link 
              to="/apply" 
              className="px-6 py-2 bg-brand-accent text-white rounded-full text-[10px] uppercase tracking-widest font-bold hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-brand-accent/20"
            >
              Admissions
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="glass border-x-0 border-b-0 rounded-none py-16 px-6 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
          <div className="text-xl font-normal font-serif italic tracking-widest opacity-80">
            Aura Academy Global
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-[10px] uppercase tracking-[0.2em] text-brand-text-muted">
            <Link to="#" className="hover:text-white transition-colors">Academic Calendar</Link>
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Campus Map</Link>
            <Link to="#" className="hover:text-white transition-colors">Contact Us</Link>
          </nav>

          <div className="pt-8 border-t border-white/5 w-full text-center">
            <p className="text-[9px] uppercase tracking-[0.3em] text-brand-text-muted">
              © 2024 Aura Academy. Pioneering Education for 2026/2027.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
