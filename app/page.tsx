'use client';

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from './context/LanguageContext'
import { translations } from './config/languages'
import { Languages } from 'lucide-react'
import { TypeAnimation } from "react-type-animation";
export default function Home() {
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <main className="min-h-screen container mx-auto px-4 sm:px-6 lg:px-8 pb-10 block:pb-0">
      <nav className="flex justify-between items-center py-4">
        <div className="rounded-full cursor-pointer">
          <Image src="/logo.png" alt="logo" width={50} height={50} priority />
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            <Languages className="w-5 h-5" />
            <span>{language.toUpperCase()}</span>
          </button>
          <Link href="/">
            <Image
              src="/whatsapp.svg"
              alt="whatsapp"
              width={24}
              height={24}
              className="social-icon"
            />
          </Link>
        </div>
      </nav>

      <motion.div
        className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 mt-10 md:mt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="w-full md:w-1/2"
          variants={itemVariants}
        >
          <Image
            src="/profile.png"
            alt="Developer portrait with artistic effects"
            width={400}
            height={400}
            className="w-full max-w-[400px] mx-auto object-contain rounded-lg"
            priority
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 space-y-6"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h1 className=" font-bold leading-tight">
              <div className="text-xl md:text-4xl gradient-1">
                {t.name}
              </div>
              <div className="text-4xl md:text-6xl gradient-2 mt-2">
              <TypeAnimation key={language} className="leading-normal py-1"  sequence={[t.nameValue, 1000, t.preJob, 1000, t.job]} speed={50} wrapper='div' repeat={Infinity} />
              </div>
            </h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600"
          >
            {t.introduction}
          </motion.div>

          <motion.div
            className="flex gap-4"
            variants={itemVariants}
          >
            <Link
              href="/resume"
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              {t.contact} <span className="ml-2">↗</span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  )
}
