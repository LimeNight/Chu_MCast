import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type Package = {
  id: number
  title: string
  price: string
  features: string[]
  extra: string[]
}

const packages: Package[] = [
  {
    id: 1,
    title: "Starter",
    price: "€99,99",
    features: [
      "Basis video-opnames",
      "HD videokwaliteit",
      "Maandelijkse uploads",
      "Standaard support"
    ],
    extra: [
      "Toegang tot geselecteerde video’s",
      "Basis montage",
      "Beperkte live opnames"
    ]
  },
  {
    id: 2,
    title: "Pro",
    price: "€149,99",
    features: [
      "Uitgebreide video-opnames",
      "Full HD kwaliteit",
      "Wekelijkse uploads",
      "Snelle support"
    ],
    extra: [
      "Live stream opnames",
      "Geavanceerde montage",
      "Exclusieve content",
      "Downloadbare video’s"
    ]
  },
  {
    id: 3,
    title: "Premium",
    price: "€299,99",
    features: [
      "Professionele opnames",
      "4K videokwaliteit",
      "Onbeperkte uploads",
      "Prioriteit support"
    ],
    extra: [
      "Alle live uitzendingen",
      "Premium montage",
      "Behind-the-scenes content",
      "Vroege toegang nieuwe video’s"
    ]
  }
]

const Pricing = () => {
  const [selected, setSelected] = useState<Package | null>(null)

  return (
    <section
      id="pricing"
      className="relative py-28 px-6 bg-[#050814] text-white overflow-hidden"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Onze videopakketten
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Professionele video-opnames en livestreams in een modern jasje
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.id}
            onClick={() => setSelected(pkg)}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="
              relative cursor-pointer min-h-[420px] rounded-3xl p-8
              bg-gradient-to-br
              from-[#000d39]
              to-[#12084d55]
              shadow-[0_0_35px_rgba(34,211,238,0.1)]
              hover:shadow-[0_0_55px_rgba(34,211,238,0.2)]
              transition-all duration-500
              hover:-translate-y-3
            "
          >
            <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>

            <p
              className="
                mb-8 text-lg font-semibold
                bg-gradient-to-r from-cyan-400 to-blue-500
                bg-clip-text text-transparent
              "
            >
              {pkg.price}
            </p>

            <ul className="space-y-4 text-white/80">
              {pkg.features.map((feat, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]">
                    ▸
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="
                w-full max-w-xl rounded-3xl p-10
                bg-gradient-to-br
                from-[#070b25]
                via-[#0d103f]
                to-[#160a4a]
                shadow-[0_0_70px_rgba(34,211,238,0.3)]
              "
            >
              <h3 className="text-3xl font-bold mb-2">{selected.title}</h3>

              <p
                className="
                  mb-6 text-lg font-semibold
                  bg-gradient-to-r from-cyan-400 to-blue-500
                  bg-clip-text text-transparent
                "
              >
                {selected.price}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-cyan-300">
                  Belangrijkste functies
                </h4>
                <ul className="space-y-2 text-white/80 mb-6">
                  {selected.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>

                <h4 className="font-semibold mb-3 text-cyan-300">
                  Extra inbegrepen
                </h4>
                <ul className="space-y-2 text-white/80">
                  {selected.extra.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
              </div>

              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="
                  mt-8 w-full py-3 rounded-full
                  text-black font-semibold tracking-wide
                  bg-gradient-to-r from-cyan-400 to-blue-500
                  hover:from-cyan-300 hover:to-blue-400
                  shadow-[0_0_25px_rgba(34,211,238,0.3)]
                  transition-all duration-300
                "
              >
                Sluiten
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Pricing