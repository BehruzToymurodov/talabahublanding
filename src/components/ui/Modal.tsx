import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export type ModalProps = {
  open: boolean
  title?: string
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ open, title, onClose, children }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="glass-panel w-full max-w-lg rounded-3xl p-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
        >
          <div className="flex items-center justify-between">
            {title && (
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {title}
              </h3>
            )}
            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white"
            >
              <X size={18} />
            </button>
          </div>
          <div className="mt-4 text-sm text-slate-600 dark:text-slate-300">{children}</div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
)

export default Modal
