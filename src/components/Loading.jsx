import React from 'react'
import * as motion from "motion/react-client";

const Loading = () => {
  return (
    <div className='bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-300 flex flex-col items-center justify-center min-h-screen overflow-hidden relative'>
        {/* Ambient Background Glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className='absolute -top-32 -right-32 w-72 h-72 bg-linear-to-br from-cyan-500 to-blue-600 rounded-full blur-3xl'
        ></motion.div>
        <motion.div
          animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 9, repeat: Infinity, delay: 1 }}
          className='absolute -bottom-32 -left-32 w-72 h-72 bg-linear-to-tr from-purple-600 to-blue-500 rounded-full blur-3xl'
        ></motion.div>

        {/* Main Loading Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='relative z-10 flex flex-col items-center gap-12'
        >
          {/* Horizontal Dotted Line Spinner */}
          <div className='flex items-center gap-3'>
            {[0, 1, 2].map((dot) => (
              <motion.div
                key={dot}
                animate={{
                  x: [0, 20, -20, 0],
                  opacity: [0.4, 1, 0.4, 0.4],
                  scale: [0.8, 1.2, 0.8, 0.8],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: dot * 0.15,
                  ease: 'easeInOut',
                }}
                className='w-3 h-3 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/60'
              ></motion.div>
            ))}
          </div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='text-center space-y-3'
          >
            <motion.p className='text-lg font-light text-gray-200 tracking-wide'>
              Please Wait
            </motion.p>
            <motion.p 
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className='text-xs text-gray-500 tracking-widest'
            >
              Portfolio is loading...
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
  )
}

export default Loading;