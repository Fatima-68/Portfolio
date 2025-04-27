'use client';
import React, { useState } from 'react';

const projects = [
  {
    title: "Mental Health Disorder Prediction",
    link: "https://github.com/Fatima-68/Menatl_Disorder_Prediction__ML.git",
    desc: "Predicts potential mental health disorders with ML models.",
  },
  {
    title: "Shooting Game - Simple Reflex Agent",
    link: "https://github.com/Fatima-68/Shooting_game_Simple_reflex_agent_AI.git",
    desc: "2D space shooter built with Python and Pygame.",
  },
  {
    title: "Car Price Prediction",
    link: "https://github.com/Fatima-68/Car_price_prediction_ML.git",
    desc: "Machine learning model predicting car resale value.",
  },
  {
    title: "Earthquake Classification Prediction",
    link: "https://github.com/Fatima-68/Earthquake_classification_prediction_ML.git",
    desc: "Predicts earthquake types based on geological data.",
  },
  {
    title: "CNN Image Classification (Daisy/Dandelion)",
    link: "https://github.com/Fatima-68/Daisy_or_Dandalions_using_CNN.git",
    desc: "Classifies flowers using TensorFlow CNN.",
  },
  {
    title: "Food Recipes App – Next.js",
    link: "https://github.com/Fatima-68/Food_recipes_web_Next.js.git",
    desc: "Next.js app demonstrating 3 data fetching techniques.",
  },
  {
    title: "Blog Management Platform",
    link: "https://github.com/Fatima-68/Blog_creating_web_Next.js_supabase.git",
    desc: "Blog site with Supabase backend and ShadCN UI.",
  },
];

function Portfolio() {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div className="min-h-[45vh] mt-[-110px] flex items-center justify-center border-2 text-white px-7">
      <div className="max-w-5xl w-full text-center">
        <h2 className="text-4xl font-bold text-pink-500 mb-6">About Me</h2>
        <p className="text-lg leading-relaxed mb-6">
          I am Fatima, a passionate data enthusiast focused on analytics and machine learning.
          I recently completed internships in Exploratory Data Analysis and ML, sharpening my skills
          in data storytelling and predictive modeling.
          <br /><br />
          Currently learning new tools and turning raw data into actionable insights!
        </p>

        <div className="flex justify-center gap-6 mb-10 flex-wrap">
          <a
            href="/Fatima_Resume.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 px-6 py-3 bg-[#0b1120] hover:bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
          >
            📄 Download CV
          </a>
          <button
            onClick={() => setShowProjects(true)}
            className="inline-block border-2 px-6 py-3 bg-[#0b1120] hover:bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
          >
            <span className="text-xl">{`</>`}</span> View Projects
          </button>
        </div>
      </div>

      {/* Modal */}
      {showProjects && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 px-4">
          <div className="bg-[#0b1120] text-white rounded-2xl max-w-4xl w-full p-8 relative overflow-y-auto max-h-[80vh] shadow-2xl">
            <button
              onClick={() => setShowProjects(false)}
              className="absolute top-4 right-6 text-white hover:text-pink-400 text-2xl font-bold"
            >
              ✖
            </button>
            <h3 className="text-3xl font-bold text-pink-500 mb-8 text-center">My Projects</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((proj) => (
                <div key={proj.title} className="bg-[#1e293b] rounded-xl p-6 shadow-md hover:scale-105 transition-transform">
                  <h4 className="text-xl font-semibold text-white mb-2">{proj.title}</h4>
                  <p className="text-gray-400 mb-4 text-sm">{proj.desc}</p>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm bg-gradient-to-r from-pink-500 to-purple-500 py-2 px-4 rounded-full text-white font-semibold hover:opacity-90 transition"
                  >
                    View GitHub →
                  </a>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
