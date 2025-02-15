import React from 'react'
import featuresImg from '../assets/feature-img.webp'
import fileUpload from '../assets/file-upload.webp'
import { motion } from "motion/react"


export const Features = () => {
 
    return (
        
        <div className="mt-40 flex flex-col items-center px-6">
        
            <motion.h3 initial={{ y: 100, opacity: 0 }}  whileInView={{ y: 0, opacity:1 }} transition={{duration: 0.5, delay: 0.4}} className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2">How its is simple?</motion.h3> 
            <div className="flex lg:flex-row flex-col items-center justify-between mt-18 gap-20">
                
                <motion.div initial={{ x: -100, opacity: 0 }}  whileInView={{ x: 0, opacity:1 }} transition={{duration: 0.5, delay: 0.7}} className='w-full'>
                    <img src={fileUpload} alt="" className='w-[800px]'/>
                </motion.div>
                <motion.div initial={{ x: 100, opacity: 0 }}  whileInView={{ x: 0, opacity:1 }} transition={{duration: 0.5, delay: 0.7}}>
                    <p className="text-gray-200 text-lg font-light">Send a document, get a summary—it’s that easy!<br/><br/>
                    Email us or upload an article, link, or PDF to our dashboard, and within minutes, receive a clear, concise summary delivered straight to your inbox. Perfect for busy scientists, students, and curious minds, SciSummary cuts through the complexity of lengthy research articles, saving you time and effort.
                    <br/>   
                    Simplify your research process today with SciSummary—your shortcut to understanding!</p>
                    <button className="mt-10 py-2 px-4 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-all">Explore now</button>
                </motion.div>

            </div>
        
        </div>
    )
    }
