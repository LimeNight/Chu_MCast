import { motion } from "framer-motion"
import {
  FaHandshake,
  FaLightbulb,
  FaVideo,
  FaMagic,
  FaCheckCircle
} from "react-icons/fa"

const steps = [
  {
    title: "Kennismaking & afstemming",
    icon: FaHandshake,
    content: [
      "Vrijblijvend gesprek over jouw idee, doel en wensen",
      "Samen bepalen we de juiste vorm van productie",
      "Heldere offerte op maat"
    ]
  },
  {
    title: "Concept & voorbereiding (optioneel)",
    icon: FaLightbulb,
    content: [
      "Format & structuur",
      "Interview- of gespreksvorm",
      "Praktische voorbereiding",
      "Bij self-service kan deze stap worden overgeslagen"
    ]
  },
  {
    title: "Opname op locatie",
    icon: FaVideo,
    content: [
      "Mobiele podcaststudio op locatie",
      "Professionele audio & video",
      "Tot 4 personen",
      "Eén of meerdere camera’s",
      "Alles technisch geregeld"
    ]
  },
  {
    title: "Montage & nabewerking",
    icon: FaMagic,
    content: [
      "Montage, audiomix en visuele afwerking",
      "Of levering van ruwe bestanden",
      "Extra edits of short clips optioneel"
    ]
  },
  {
    title: "Oplevering & gebruik",
    icon: FaCheckCircle,
    content: [
      "Klaar voor YouTube, Spotify en andere platforms",
      "Of raw materiaal bij self-service",
      "Direct bruikbaar en overzichtelijk"
    ]
  }
]

const ProcessTimeline = () => {
  return (
    <section
      id="intro"
      className="relative py-28 px-6 bg-[#050814] text-white"
    >
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Zo werken wij
        </h2>
        <p className="text-white/70 text-lg">
          Van eerste idee tot professioneel eindproduct
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div
          className="
            absolute left-6 top-0 bottom-0 w-px
            bg-gradient-to-b
            from-cyan-400/0
            via-cyan-400
            to-cyan-400/0
          "
        />

        <div className="space-y-20">
          {steps.map((step, i) => {
            const Icon = step.icon

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative flex gap-8"
              >
                {/* Icon */}
                <div
                  className="
                    relative z-10
                    flex items-center justify-center
                    w-12 h-12 rounded-full
                    bg-[#0f1117]
                    border border-cyan-400
                    text-cyan-400
                  "
                >
                  <Icon />
                </div>

                {/* Card */}
                <div
                  className="
                    flex-1 rounded-2xl p-6
                    bg-gradient-to-br
                    from-[#0f1117]
                    via-[#151922]
                    to-[#0c0f14]
                    border border-cyan-400/30
                  "
                >
                  <h3 className="text-xl font-semibold mb-4">
                    {i + 1}. {step.title}
                  </h3>

                  <ul className="space-y-2 text-white/80">
                    {step.content.map((item, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-cyan-400">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProcessTimeline