import React from 'react'

export const Pricing = () => {
  return (

    <div className="mt-16">
        <h3 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2">Pricing Plans</h3>
        <span className='text-md font-light text-slate-500 '>Low pricing & Best Service</span>
        <div className="grid md:grid-cols-3 gap-8 mt-28">

            {/* Free Tier */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 p-6 rounded-lg cursor-pointer hover:translate-y-[-8px] transition delay-150 duration-300 ease-in-out">
                <h4 className="text-xl font-semibold mb-4 text-gray-100">Free</h4>
                <p className="text-3xl font-bold mb-6 text-gray-100">
                $0<span className="text-lg font-normal text-gray-400">/mo</span>
                </p>
                <ul className="space-y-3 mb-6 text-gray-300">
                <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    5 papers per month
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    Basic summaries
                </li>
                </ul>
                <button className="w-full py-2 border border-blue-500 text-blue-400 rounded-lg  hover:bg-blue-500/10 transition-all">Get Started</button>
            </div>

            {/* Pro Tier */}
            <div className="relative bg-gradient-to-b from-blue-600/20 to-violet-600/20 cursor-pointer backdrop-blur-sm hover:translate-y-[-8px] transition delay-150 duration-300 ease-in-out 
                        border border-blue-500/50 p-6 rounded-lg">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r 
                            from-blue-400 to-violet-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                Popular
                </div>
                <h4 className="text-xl font-semibold mb-4 text-gray-100">Pro</h4>
                <p className="text-3xl font-bold mb-6 text-gray-100">
                $29<span className="text-lg font-normal text-gray-400">/mo</span>
                </p>
                <ul className="space-y-3 mb-6 text-gray-300">
                <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    Unlimited papers
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    Advanced insights
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    Priority processing
                </li>
                </ul>
                <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-violet-500 
                            hover:from-blue-600 hover:to-violet-600 text-white rounded-lg transition-all">
                Subscribe Now
                </button>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 p-6 cursor-pointer rounded-lg hover:translate-y-[-8px] transition delay-150 duration-300 ease-in-out">
                <h4 className="text-xl font-semibold mb-4 text-gray-100">Enterprise</h4>
                <p className="text-3xl font-bold mb-6 text-gray-100">Custom</p>
                <ul className="space-y-3 mb-6 text-gray-300">
                <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    Custom integration
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    Dedicated support
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    SLA guarantee
                </li>
                </ul>
                <button className="w-full py-2 border border-blue-500 text-blue-400 rounded-lg 
                            hover:bg-blue-500/10 transition-all">
                Contact Sales
                </button>
            </div>

        </div>
    </div>


  )
}
