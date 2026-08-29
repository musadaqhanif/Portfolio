import { motion } from 'framer-motion';

import { ServicesData } from '@/constants/data/services';

const Services = () => (
  <section className="shell py-14">
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {ServicesData.map(({ id, icon, title, description }, index) => (
        <motion.li
          key={id}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.35, delay: Math.min(index, 5) * 0.05 }}
          className="group card card-hover p-7"
        >
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-elevated text-accent transition-colors duration-300 group-hover:border-accent/40">
            <i className={`fad fa-${icon}`} aria-hidden />
          </span>
          <h2 className="mt-5 text-base font-semibold text-ink">{title.en}</h2>
          <p className="mt-2.5 text-sm leading-relaxed text-muted">{description.en}</p>
        </motion.li>
      ))}
    </ul>
  </section>
);

export default Services;
