import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

interface PageShellProps {
  children: React.ReactNode;
  /** Background of the page body above the footer. */
  className?: string;
}

/** Navbar + page body + footer, shared by every page except home. */
export default function PageShell({ children, className = 'bg-ink text-light' }: PageShellProps) {
  return (
    <>
      <Navbar />
      <div className={`relative min-h-screen ${className}`}>{children}</div>
      <div className="relative z-25 bg-ink overflow-hidden">
        <Footer />
      </div>
    </>
  );
}
