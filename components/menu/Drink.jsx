import React from 'react'
import Image from 'next/image'

const Drink = ({ name, description}) => {
  return (
      <div className="hover:opacity-90 flex flex-row justify-center my-4">
        <div className="bg-gray-200 rounded-xl relative">
          <Image className= "object-cover rounded-xl" src="/Cortadito.png" 
            alt=""
            width={500}
            height={460}
          />
          <div className="p-6 absolute bottom-0 left-0 text-white">
            <h2 className="text-2xl font-bold mb-2">{name}</h2>
            <div className="leading-relaxed">
              {description}
            </div>
          </div>
        </div>
      </div>
  )
}

export default Drink
