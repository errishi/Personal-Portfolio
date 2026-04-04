import React, { useState } from 'react';
import * as motion from "motion/react-client";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skill' },
    { label: 'Projects', href: '#project' },
    { label: 'Experience', href: '#contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className='sticky top-0 z-50 bg-slate-900/95 backdrop-blur-lg border border-cyan-500/30 shadow-xl'
    >
      <div className='lg:px-15 px-8 py-4 flex justify-between items-center'>
        {/* Logo */}
        <div className='flex items-center gap-2 cursor-pointer'>
          <Link to={'/'}>
            <span className='text-cyan-400 font-bold text-lg'>DEV</span>
            <span className='text-white font-bold text-lg'>PORTFOLIO</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center gap-8'>
          <ul className='flex gap-8'>
            {navLinks.map((link, index) => (
              <motion.li key={index} whileHover={{ color: '#06b6d4' }}>
                <a 
                  href={link.href}
                  className='text-gray-300 hover:text-cyan-400 transition-colors font-medium text-md'
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Hire Me Button */}
        <motion.a
          whileHover={{ scale: 1.05, backgroundColor: '#0891b2' }}
          whileTap={{ scale: 0.95 }}
          href="/Rishikesh_Singh_Resume.pdf"
          download
          className='bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold px-6 py-2 rounded-lg transition-all hidden lg:block cursor-pointer'
        >
          Hire Me
        </motion.a>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className='lg:hidden text-cyan-400 text-2xl'
        >
          <i className={`fas fa-${mobileMenuOpen ? 'times' : 'bars'}`}></i>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className='lg:hidden bg-slate-800/95 border-t border-cyan-500/30 px-8 py-4'
        >
          <ul className='flex flex-col gap-4'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href}
                  className='text-gray-300 hover:text-cyan-400 transition-colors font-medium'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Rishikesh_Singh_Resume.pdf"
            download
            className='w-full bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold px-6 py-2 rounded-lg mt-4 transition-all cursor-pointer'
          >
            Hire Me
          </motion.a>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar;