

'use client'

import { motion } from 'framer-motion'

export default function Transition({ children }: {
    children: React.ReactNode
}) {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
        >
            {children}
        </motion.div>
    )
}