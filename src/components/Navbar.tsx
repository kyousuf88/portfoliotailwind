// import React from 'react'
// import { MdMenuBook } from "react-icons/md";
// import { useState } from 'react';
// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }
//   return (
//     <div className="container pt-8">
//         <div className="flex justify-between items-center">
//         <div className="text-xl font-mediem">Kanwal</div>
//          <ul className="gap-10 lg:gap-16 hidden md:flex">
//             <li className="menuLink"><a href="#hero">Home</a></li>
//             <li className="menuLink"><a href="#about">About</a></li>
//             <li className="menuLink"><a href="#contact">Contact</a></li>
//             <li className="menuLink"><a href="#skills">Skills</a></li>
//          </ul>
//          <div className="md:hidden" onClick={toggleMenu}>
          
//          </div>

//     </div>
//     </div>
//   )
// }

// export default Navbar

import React from 'react'
import { MdMenuBook } from "react-icons/md";
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="container pt-8">
      <div className="flex justify-between items-center">
        <div className="text-xl font-medium">Kanwal</div>
        <ul className={`gap-10 lg:gap-16 ${isMenuOpen ? 'flex' : 'hidden'} md:hidden`}>
          <li className="menuLink"><a href="#hero">Home</a></li>
          <li className="menuLink"><a href="#about">About</a></li>
          <li className="menuLink"><a href="#contact">Contact</a></li>
          <li className="menuLink"><a href="#skills">Skills</a></li>
        </ul>
        <ul className="gap-10 lg:gap-16 hidden md:flex">
          <li className="menuLink"><a href="#hero">Home</a></li>
          <li className="menuLink"><a href="#about">About</a></li>
          <li className="menuLink"><a href="#contact">Contact</a></li>
          <li className="menuLink"><a href="#skills">Skills</a></li>
        </ul>
        <div className="md:hidden" onClick={toggleMenu}>
          <MdMenuBook size={24} />
        </div>
      </div>
    </div>
  )
}

export default Navbar