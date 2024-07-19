'use client'

import { motion } from 'framer-motion';


export default function Transition({ children }: { children: React.ReactNode }) {

    return (

        <motion.main
            initial={{ opacity: 0.6, }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.25 }}
        >
            {children}
        </motion.main>

    )
}