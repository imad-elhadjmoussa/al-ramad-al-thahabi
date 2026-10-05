import { motion } from 'framer-motion'
import aboutImage from '../../assets/about.jpg'

const services = ['Approvals', 'Fit-Out', 'MEP', 'Joinery & Furniture', 'Project Handover']

export function About() {

  return (
    <section className="bg-brand-off-white text-brand-charcoal" id="about">
      <div className="grid lg:grid-cols-2">
        <motion.div
          className="relative min-h-[26rem] overflow-hidden bg-brand-charcoal sm:min-h-[36rem] lg:min-h-[44rem]"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <img
            alt="Contemporary interior detail by Al Ramad Al Thahabi"
            className="h-full w-full object-cover object-[68%] grayscale-[15%] transition-transform duration-700 hover:scale-105"
            src={aboutImage}
          />
        </motion.div>

        <motion.div
          className="flex flex-col justify-center px-6 py-20 sm:px-10 lg:px-16 lg:py-24"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.12 }}
        >
          <p className="mb-5 flex items-center gap-3 font-body text-xs font-semibold uppercase tracking-[0.26em] text-brand-accent">
            <span className="h-px w-10 bg-brand-accent" /> About us
          </p>
          <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-brand-espresso sm:text-6xl">
            We Aim for the <span className="text-brand-accent">Top.</span>
          </h2>

          <p className="mt-8 max-w-xl font-body text-base leading-8 text-brand-warm-gray sm:text-lg">
            Established in 2020, ART Interior is one of the leading interior fit out start-up companies in UAE. We can assure you the timely completion of interior fit out projects within your budget. We follow our clients' expectations from the beginning till the end of the interior fit out works we handle.
          </p>

          <p className="mt-5 max-w-xl font-body text-base leading-8 text-brand-warm-gray sm:text-lg">
            We provide an end-to-end and comprehensive range of fit-out solutions from design to completion for both Domestic & Commercial Sectors, including Offices, Supermarkets, Restaurants, Warehouses, Villas & Apartments, Retail Shops & Kiosks, and more — with all required authority approvals.
          </p>

          <p className="mt-5 max-w-xl font-body text-base leading-8 text-brand-warm-gray sm:text-lg">
            We focus on high quality projects with a unique aesthetic, and we pride ourselves on taking on a select number of projects with a high quality of attention to detail. We believe that interior design is more than great functionality and beautiful aesthetics — we aim to make your interiors a reflection of your personality, a place you and your family or co-workers take pride in and love to spend time in.
          </p>

          <ul className="mt-8 flex max-w-xl flex-wrap gap-x-6 gap-y-3 font-body text-sm font-medium text-brand-espresso sm:text-base">
            {services.map((service) => (
              <li className="flex items-center gap-2" key={service}>
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" aria-hidden="true" />
                {service}
              </li>
            ))}
          </ul>



        </motion.div>
      </div>
    </section>
  )
}