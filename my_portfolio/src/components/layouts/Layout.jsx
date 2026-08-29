import Navbar from './partials/Navbar';
import Footer from './partials/Footer';
import FloatingWhatsapp from '@/components/elements/floating-whatsapp';
import RevealProvider from '@/components/elements/RevealProvider';

const Layout = ({ children }) => (
  <div className="grain relative flex min-h-[100dvh] flex-col">
    <RevealProvider />
    <Navbar />
    <main id="main" className="flex-1">
      {children}
    </main>
    <Footer />
    <FloatingWhatsapp />
  </div>
);

export default Layout;
