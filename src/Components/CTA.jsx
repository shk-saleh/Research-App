import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from "motion/react"


const CTA = () => {
  return (

    <motion.div initial={{ y: 100, opacity: 0 }}  whileInView={{ y: 0, opacity:1 }} transition={{duration: 0.5, delay: 0.8}} className="w-full px-4 pb-16 pt-30">
      <div className="max-w-7xl mx-auto relative">
        {/* Main Banner Container */}
        <div className="relative rounded-2xl overflow-hidden">
          {/* Gradient Background with Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-blue-600/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-blue-500/10 blur-xl animate-pulse" />
          
          {/* Content Container with Glass Effect */}
          <div className="relative backdrop-blur-sm p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Text Content */}
              <div className="flex-1">
                <h2 className="text-3xl md:text-3xl font-bold mb-4 text-white">
                  Ready to Transform Your Research?
                </h2>
                <p className="text-md font-light text-gray-300 max-w-2xl">
                  Start analyzing your research papers with AI today. Get comprehensive summaries and insights in seconds.
                </p>
              </div>

              {/* CTA Button */}
              <div className="md:flex-shrink-0">
                <button onClick={() => window.location.href = '/login'}className="group relative inline-flex items-center justify-center">
                   <span className="relative inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold  text-white bg-gray-900/50 rounded-lg border border-gray-700  hover:border-blue-400 transition-colors">
                    Get Started Free
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>

         </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CTA;