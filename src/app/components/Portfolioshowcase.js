"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaPython, FaNodeJs } from "react-icons/fa";
import { 
  SiMysql, 
  SiNextdotjs, 
  SiStrapi, 
  SiPandas, 
  SiNumpy, 
  SiPlotly, 
  SiScikitlearn 
} from "react-icons/si";

// Map of project images
const projectImages = {
  "Menatl_Disorder_Prediction__ML": "/images (2).jpeg",
  "Shooting_game_Simple_reflex_agent_AI": "/images (3).jpeg",
  "Car_price_prediction_ML": "/images (4).jpeg",
  "Earthquake_classification_prediction_ML": "/images (5).jpeg",
  "Daisy_or_Dandalions_using_CNN": "/images (6).png",
  "Food_recipes_web_Next.js": "/images (7).png",
  "Blog_creating_web_Next.js_supabase": "/images (8).jpeg",
  "blogs_categories_web_site":"/images (12).png"
};

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState("projects");
  const [projects, setProjects] = useState([]);

  // Fetch GitHub Repositories
  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch("https://api.github.com/users/Fatima-68/repos");
        const data = await res.json();
  
        const filteredData = data.filter(
          (repo) => repo.name !== "Fatima-68" // don't show profile repo
        );
  
        const projectsWithImages = filteredData.map((repo) => ({
          title: repo.name.replace(/_/g, " "),
          description: repo.description || "No description provided.",
          github: repo.html_url,
          image: projectImages[repo.name] || "/default-project.png", // default if not mapped
        }));
  
        setProjects(projectsWithImages);
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    }
  
    fetchRepos();
  }, []);

  const certificates = [
    {
      title: "Exploratory Data Analyst Internship",
      image: "/image (9).jpg",
    },
    {
      title: "Certificate in EDA",
      image: "/image (10).jpg",
    },
    {
      title: "Certificate in SQL",
      image: "/image (11).png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b1120] text-white px-6 py-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-pink-400">Portfolio Showcase</h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Explore My Journey Through Projects, Certificates, And Technical Expertise. Each Section Represents a Milestone In My Continuous Learning Path.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          {["projects", "certificates", "skills"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold ${
                activeTab === tab
                ? "inline-block border-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold "
                : "inline-block border-2 px-6 py-3 text-white hover:bg-gradient-to-r from-purple-600 to-pink-500 "
  }
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </header>

      {/* Sections */}
      <section className="mt-16">
        {activeTab === "projects" && (
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-[#1E293B] p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="rounded-xl object-cover h-[300px]"
                />
                <h2 className="text-2xl font-bold mt-4">{project.title}</h2>
                <p className="mt-2 text-gray-400">{project.description}</p>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-pink-400 hover:underline">
                  View GitHub
                </a>
              </div>
            ))}
          </div>
        )}

        {activeTab === "certificates" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <div key={index} className="bg-[#1E293B] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
                <img src={certificate.image} alt={certificate.title} className="w-full h-[500px] object-fit" />
                <div className="p-4">
                  <h3 className="text-white text-lg font-semibold">{certificate.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "skills" && (
          <div className="mt-16">
            {/* Heading and Skills */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
              {/* Left Text */}
              <div className="md:w-1/3">
                <h2 className="text-3xl font-bold text-pink-400 mb-6">
                  Approaches that empower my clients to achieve remarkable results through innovation and design.
                </h2>
              </div>

              {/* Skills Icons */}
              <div className="flex-1">
                <div className="flex flex-wrap justify-center gap-8 mb-12">
                  {[
                    { name: "Python", icon: <FaPython size={60} color="#3776AB" /> },
                    { name: "SQL", icon: <SiMysql size={60} color="#00758F" /> },
                    { name: "Node.js", icon: <FaNodeJs size={60} color="#68A063" /> },
                    { name: "Next.js", icon: <SiNextdotjs size={60} color="white" /> },
                    { name: "Strapi", icon: <SiStrapi size={60} color="#2E7EEA" /> },
                    { name: "Pandas", icon: <SiPandas size={60} color="#150458" /> },
                    { name: "Numpy", icon: <SiNumpy size={60} color="#013243" /> },
                    { name: "Matplotlib", icon: <SiPlotly size={60} color="#3F4F75" /> },
                    { name: "Scikit-Learn", icon: <SiScikitlearn size={60} color="#F7931E" /> },
                  ].map((skill, index) => (
                    <div key={index} className="flex flex-col items-centers rounded-full shadow-lg  shadow-pink-500 hover:scale-105 transition-transform">
                      <div className="bg-[#1E293B] p-4 rounded-full">
                        {skill.icon}
                      </div>
                      <p className="text-gray-300 text-2xl ">{skill.name}</p>
                    </div>
                  ))}
                </div>

                {/* Skills/Qualities Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { title: "Languages", description: "Python, SQL, Node.js, Next.js, Strapi" },
                    { title: "Frameworks", description: "Pandas, Numpy, Matplotlib, Seaborn, Scikit-Learn" },
                    { title: "Platforms", description: "Jupyter Notebook, Visual Studio Code" },
                    { title: "Soft Skills", description: "Report Building, People Management, Excellent Communication" },
                    { title: "Tech Skills", description: "Machine Learning, Data Analytics" },
                  ].map((item, index) => (
                    <div key={index} className="flex bg-white rounded-2xl p-6 items-center shadow-lg">
                      <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold mr-4">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-black">{item.title}</h4>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
