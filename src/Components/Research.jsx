import React, { useState, useCallback } from 'react';
import { Upload, Link, FileText, Clock, Clipboard } from 'lucide-react';
import { motion } from "motion/react"
import AuthPopUp from './AuthPopUp';
import { useRef } from 'react';



export const Research = () => {


  const content = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [showResults, setShowResults] = useState(false);  // as it fetch data from api it get true
  const [urlInput, setUrlInput] = useState('');
  const [error, setError] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0); // State to track upload progress
  const [showAuthPopup, setShowAuthPopup] = useState(false);

  const recentSummaries = [
    { id: 1, title: "Machine Learning Research", date: "2 mins ago" },
    { id: 2, title: "AI Ethics Paper", date: "1 hour ago" },
    { id: 3, title: "Neural Networks Study", date: "2 hours ago" }
  ];

  const copyContent = useCallback(() => {

    content.current?.select();    // to show selected
    document.execCommand('copy');

  }, [])

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  }, []);

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const validFiles = files.filter(file => 
      file.type === 'application/pdf' || 
      file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    );

    if (validFiles.length === 0) {
      setError('Please upload PDF or DOCX files only');
      return;
    }

    // Simulate file upload progress
    simulateUpload(validFiles[0]);
  };

  const simulateUpload = (file) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        // Handle the uploaded file here (e.g., send it to a server)
        console.log('File uploaded:', file);
      }
    }, 300);
  };

  const handleUrlSubmit = (e) => {

    e.preventDefault();
    const token = localStorage.getItem('token');
    
    if (!token) {
      setShowAuthPopup(true);
      return;
    }

    if (!urlInput.trim()) {
      setError('Please enter a valid URL');
      return;
    }

    setShowResults(true);
  };


  return (

    <div className="text-center my-12 relative z-10 px-6" id='research'>
      
      <motion.div initial={{ y: 100, opacity: 0 }}  whileInView={{ y: 0, opacity:1 }} transition={{duration: 0.5, delay: 0.4}}>
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
          Try it now!
        </h2>
        <p className="text-md text-gray-200 font-light">
          Upload your papers and get instant insights and summaries
        </p>
      </motion.div>

      <motion.div initial={{ y: 100, opacity: 0 }}  whileInView={{ y: 0, opacity:1 }} transition={{duration: 0.5, delay: 0.4}} className="my-12">
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('fileInput').click()}
          className={`border-2 border-dashed rounded-lg p-12 text-center transition-all cursor-pointer
            ${isDragging 
              ? 'border-blue-400 bg-gray-800/50' 
              : 'border-gray-700 hover:border-gray-600 bg-gray-800/30'}`}
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-lg text-gray-300 mb-2">
            Drag and drop your research papers here
          </p>
          <p className="text-sm text-gray-500">
            Supports PDF and DOCX files
          </p>
          <input
            id="fileInput"
            type="file"
            accept=".pdf,.docx"
            style={{ display: 'none' }}
            onChange={handleFileInputChange}
          />
        </div>

        {/* Upload Progress Slider */}
        {uploadProgress > 0 && (
          <div className="mt-6">
            <input
              type="range"
              min="0"
              max="100"
              value={uploadProgress}
              className="w-full"
              readOnly
            />
            <p className="text-sm text-gray-500 mt-2">
              Uploading... {uploadProgress}%
            </p>
          </div>
        )}

        {/* URL Input */}
        <form onSubmit={handleUrlSubmit} className="mt-6">
          <div className="flex gap-4 lg:flex-row flex-col">
            <input
              type="url"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="Or paste a URL to your paper"
              className="flex-1 px-4 py-2 bg-gray-800/30 border border-gray-700 rounded-lg 
                       text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 
                       focus:border-transparent"
            />
            <button onClick={() => setShowAuthPopup(true)}
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-violet-500 
                       hover:from-blue-600 hover:to-violet-600 text-white rounded-lg 
                       transition-all flex items-center gap-2 justify-center"
            >
              <Link className="h-4 w-4" />
              Process URL
            </button>
          </div>
        </form>


        {showResults && (
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mt-24 flex flex-col lg:flex-row gap-12 w-full"
          >
            {/* Summary Content */}
            <div className="text-left font-normal lg:w-3/2 w-full bg-gray-900/50 p-10 rounded-xl overflow-y-scroll h-82">
              <div className='flex justify-between items-center mb-10 border-b border-gray-700'>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Result
                </h3>
                <Clipboard className='text-gray-400 mb-2 cursor-pointer' onClick={copyContent}/>
              </div>
              <textarea
                ref={content}
                readOnly
                className="w-full h-64 bg-transparent text-gray-300 resize-none focus:outline-none"
                value="Our AI has analyzed your research paper and extracted key insights. The paper discusses advanced machine learning techniques and their applications in modern research. Our AI has analyzed your research paper and extracted key insights. The paper discusses advanced machine learning techniques and their applications in modern research."
              />
            </div>

            {/* Recent Summaries */}
            <div className='lg:w-2/3 w-full'>
              <h3 className="text-2xl font-medium text-gray-200 mb-4">Recent Summaries</h3>
              <div className="space-y-4">
                {recentSummaries.map(summary => (
                  <div 
                    key={summary.id}
                    className="p-4 bg-gray-800/30 border border-gray-700 rounded-lg hover:bg-gray-800/50 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-blue-400 mt-1" />
                      <div>
                        <h4 className="text-gray-200 font-medium">{summary.title}</h4>
                        <div className="flex items-center gap-2 mt-1 text-sm">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-400">{summary.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}


      </motion.div>


      {showAuthPopup && (
          <AuthPopUp onClose={() => setShowAuthPopup(false)} />
      )}
      

    </div>
  );
};
