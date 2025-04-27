import React from 'react'

function Welcomepage() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-white flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center justify-center text-center mt-40">
        <div className="flex space-x-4 mb-6">
          <div className="bg-[#0b1120] p-3 rounded-full border-2 border-pink-500 shadow-lg shadow-pink-500">
            <span className="text-xl">{`</>`}</span>
          </div>
          <div className="bg-[#0b1120] p-3 rounded-full border-2 border-pink-500 shadow-lg shadow-pink-500">
            <span className="text-xl">🖥️</span>
          </div>
          <div className="bg-[#0b1120] p-3 rounded-full border-2 border-pink-500 shadow-lg shadow-pink-500">
            <span className="text-xl">⚙️</span>
          </div>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold">Welcome To My</h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-pink-500 mb-6">PortFolio Website</h2>
        <a
          href="#"
          className="bg-pink-700 text-white py-2 px-4 rounded-md hover:bg-pink-400 transition"
        >
          🌐 www.FatimaSaleem.com
        </a>
      </div>
    </div>
  )
}

export default Welcomepage