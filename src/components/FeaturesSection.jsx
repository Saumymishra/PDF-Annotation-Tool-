// src/components/FeaturesSection.jsx
import React from 'react';
import { Edit3, Share2, Download, FileText } from 'lucide-react';

const features = [
  {
    icon: <Edit3 className="w-8 h-8 text-blue-600" />,
    title: "Smart Annotations",
    description: "Add highlights, comments, and drawings with our intuitive annotation tools. Your notes are automatically saved and synced."
  },
  {
    icon: <Share2 className="w-8 h-8 text-green-600" />,
    title: "Real-time Collaboration",
    description: "Work together with your team in real-time. Share documents and see changes instantly as they happen."
  },
  {
    icon: <Download className="w-8 h-8 text-purple-600" />,
    title: "Export & Share",
    description: "Export your annotated PDFs or share them with others. Maintain formatting and preserve all annotations."
  },
  {
    icon: <FileText className="w-8 h-8 text-orange-600" />,
    title: "Document Management",
    description: "Organize your PDFs in folders, search through annotations, and access your documents from anywhere."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Every User
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to annotate, collaborate, and manage your PDF documents efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
