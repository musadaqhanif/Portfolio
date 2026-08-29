import Hero from './Hero';
import ClientMarquee from './ClientMarquee';
import ValueProps from './ValueProps';
import FeaturedWork from './FeaturedWork';
import ServicesGrid from './ServicesGrid';
import Testimonials from './Testimonials';
import Process from './Process';
import CTA from './CTA';

/**
 * Homepage narrative, ordered the way a prospective client evaluates someone:
 * who are you -> who have you done this for -> why you -> show me -> what do
 * you offer -> does anyone vouch for you -> how does this work -> how do I start.
 */
const Home = () => (
  <>
    <Hero />
    <ClientMarquee />
    <ValueProps />
    <FeaturedWork />
    <ServicesGrid />
    <Testimonials />
    <Process />
    <CTA />
  </>
);

export default Home;
