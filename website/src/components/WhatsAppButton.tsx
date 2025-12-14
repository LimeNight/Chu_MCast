import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"

const WhatsAppButton = () => {
  const whatsappUrl =
    "https://wa.me/31612345678?text=Hallo!%20Ik%20wil%20meer%20informatie%20over%20de%20videopakketten."

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-14 h-14 rounded-full
        bg-[#25D366]
        text-white text-2xl
        shadow-lg
        hover:shadow-xl
      "
      aria-label="Chat via WhatsApp"
    >
      <FaWhatsapp />
    </motion.a>
  )
}

export default WhatsAppButton