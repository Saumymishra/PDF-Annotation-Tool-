// src/components/StatsSection.jsx
import React from 'react';
import { Users, FileText, Star, Clock } from 'lucide-react';

const stats = [
  { icon: <Users className="w-8 h-8" />, value: "10K+", label: "Active Users" },
  { icon: <FileText className="w-8 h-8" />, value: "50K+", label: "Documents Annotated" },
  { icon: <Star className="w-8 h-8" />, value: "4.9", label: "User Rating" },
  { icon: <Clock className="w-8 h-8" />, value: "24/7", label: "Support" }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4 text-blue-400">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
