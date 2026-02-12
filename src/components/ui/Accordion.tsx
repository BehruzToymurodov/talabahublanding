import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

export type AccordionItem = {
  id: string
  title: string
  content: string
}

type AccordionProps = {
  items: AccordionItem[]
  defaultOpenId?: string
}

const Accordion: React.FC<AccordionProps> = ({ items, defaultOpenId }) => {
  const [openId, setOpenId] = useState(defaultOpenId)
  const reducedMotion = useReducedMotion()

  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div key={item.id} className="glass-panel rounded-2xl p-5">
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? undefined : item.id)}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="text-sm font-semibold text-slate-900 dark:text-white">
                {item.title}
              </span>
              <ChevronDown
                size={18}
                className={`transition ${isOpen ? 'rotate-180 text-cyan-400' : 'text-slate-500'}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reducedMotion ? 0 : 0.3, ease: 'easeOut' }}
                >
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                    {item.content}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
