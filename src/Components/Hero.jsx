import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (

    <div className="relative flex items-center justify-center">
     
        <div className="absolute inset-0 flex items-center justify-center h-100">
            {/* Larger Circle */}
            <div className="relative w-[900px] h-[900px] overflow-hidden lg:overflow-visible">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-violet-500/20 blur-3xl" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-violet-500/20 blur-2xl animate-pulse" />
              
              {/* Smaller Overlapping Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/30 to-blue-500/30 blur-2xl" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/20 to-blue-500/20 blur-xl animate-pulse delay-150" />
              </div>
            </div>
        </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl px-4">

        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-200">      
            Transform Your Research Papers With <span className=" mt-2 bg-gradient-to-r from-pink-200 to-blue-400 bg-clip-text text-transparent">AI-Powered </span>Insights
        </h1>

        <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto font-light">
          Our advanced AI analyzes your papers, extracting key insights and generating 
          comprehensive summaries in seconds
        </p>

        {/* CTA Button */}
        <div className="flex justify-center gap-4">
            <button onClick={() => window.location.href = '#research'}  className="group relative inline-flex items-center justify-center cursor-pointer">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 opacity-70 blur group-hover:opacity-100 transition-opacity" />
                <span className="relative inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gray-900 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors">Try Now
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
            </button>
        </div>

        {/* Stats */}
        <div className="my-32 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-14 max-w-4xl mx-auto">
          {[
            { label: 'Papers Analyzed', value: '100K+' },
            { label: 'Processing Time', value: '< 60s' },
            { label: 'Accuracy Rate', value: '98%' }
          ].map((stat, index) => (
            <div key={index} className="relative bg-gray-900/50 backdrop-blur-md border border-gray-700 rounded-xl py-6 px-10">
                <div className="text-2xl font-bold text-white">
                    {stat.value}
                </div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Hero;