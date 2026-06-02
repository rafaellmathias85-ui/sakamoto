'use client'

import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export function WhatsAppButton() {
  const phoneNumber = '551141237168'
  const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta na Odontologia Sakamoto.')
  const url = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20BD5C] transition-colors"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </motion.a>
  )
}
