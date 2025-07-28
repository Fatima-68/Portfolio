import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
function About() {
  return (
<div className=' min-h-screen mt-[-110] pt-6'>
  <div className="max-w-4xl w-full text-white flex flex-col items-start justify-items-start gap-6">
    <h1 className="text-5xl font-bold text-pink-500">Fatima Saleem</h1>
    <h2 className="text-3xl text-gray-200">Aspiring Data Analyst & Machine Learning Enthusiast</h2>
    <p className="text-gray-400 text-2xl">
      A passionate and driven individual exploring the world of data analytics and machine learning.
    </p>
    
    <div className="flex flex-wrap text-7xl gap-3 mt-4">
      {[
        "Python", "SQL", "Node.js", "Next.js", "Strapi",
        "Pandas", "Numpy", "Matplotlib", "Seaborn", "Scikit-Learn"
      ].map(skill => (
        <span key={skill} className="bg-gray-800 text-white px-4 py-2 rounded-full text-lg shadow-md">
          {skill}
        </span>
      ))}
    </div>

    <div className="mt-6 text-2xl">
      <a href="mailto:fatimasaleem6868@gmail.com" className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition">
        Let’s Connect
      </a>
    </div>
    <div className="flex items-center gap-6 mt-6  text-pink-500 ">
  <a
    href="https://www.linkedin.com/in/fatima--saleem"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#0b1120] border-pink-500 shadow-lg shadow-pink-500 rounded-full text-4xl hover:text-white transition-transform hover:scale-110"
  >
    <FaLinkedin />
  </a>
  <a
    href="https://github.com/Fatima-68/Fatima-68"
    target="_blank"
    rel="noopener noreferrer"
    className="border-pink-500 shadow-lg shadow-pink-500 rounded-full text-4xl hover:text-white transition-transform hover:scale-110"
  >
    <FaGithub />
  </a>
  <a
    href="mailto:fatimasaleem6868@gmail.com"
    className="border-pink-500 shadow-lg shadow-pink-500 rounded-full text-4xl hover:text-white transition-transform hover:scale-110"
  >
    <FaEnvelope />
  </a>
</div>
</div>
</div>
  )
}

export default About