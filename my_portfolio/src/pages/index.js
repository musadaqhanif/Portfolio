import Seo from '@/components/common/Seo';
import Home from '@/components/views/home/Home';

export default function HomePage() {
  return (
    <>
      <Seo
        title="Musadaq Hanif - Software Engineer & Full-Stack Developer"
        description="I build production SaaS platforms, web applications and internal tools for founders and small teams. 20+ projects delivered across 5 countries."
        path="/"
      />
      <Home />
    </>
  );
}
