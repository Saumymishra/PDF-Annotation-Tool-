// src/components/CallToActionSection.jsx
import React from 'react';
import { Upload } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Transform Your PDF Experience?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Join thousands of users who are already annotating smarter. 
          Upload your first PDF and start annotating in seconds.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center gap-2">
            <Upload className="w-5 h-5" />
            Upload PDF & Start
          </button>
          <div className="text-blue-100 text-sm">or</div>
          <input 
            type="file" 
            accept=".pdf" 
            className="hidden" 
            id="pdf-upload"
          />
          <label 
            htmlFor="pdf-upload" 
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 cursor-pointer"
          >
            Browse Files
          </label>
        </div>
        
        <p className="text-sm text-blue-200 mt-6">
          No registration required • Free to start • Works in any browser
        </p>
      </div>
    </section>
  );
};

export default CallToActionSection;
