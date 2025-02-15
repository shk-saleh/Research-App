import React from 'react'
import featuresImg from '../assets/feature-img.webp'
import fileUpload from '../assets/file-upload.webp'

export const Features = () => {
 
    return (
        
        <div className="mt-40 flex flex-col items-center px-6">
        
            <h3 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2">How its is simple?</h3> 
            <div className="grid md:grid-cols-2 gap-8 mt-10 items-center">
                
                <div>
                    <img src={fileUpload} alt="" className='w-full'/>
                </div>
                <div>
                    <p className="text-gray-200 text-lg font-light">Send a document, get a summary—it’s that easy!<br/><br/>
                    Email us or upload an article, link, or PDF to our dashboard, and within minutes, receive a clear, concise summary delivered straight to your inbox. Perfect for busy scientists, students, and curious minds, SciSummary cuts through the complexity of lengthy research articles, saving you time and effort.
                    <br/>   
                    Simplify your research process today with SciSummary—your shortcut to understanding!</p>
                    <button className="mt-10 py-2 px-4 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-all">Explore now</button>
                </div>

            </div>
        
        </div>
    )
    }
