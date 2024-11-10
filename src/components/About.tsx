// import React from 'react'

// const About = () => {
//   return (
//     <div id="about" className="container pt-32">
//         <h2 className="text-4x1 md:text-5x1" data-aos="zoom-in-up">About Me</h2>
//         <p className="text-gray-500 pt-4" data-aos="zoom-in-up">
//             I am a student of GIAIC,pursuing a course in ARtificial Intelligence, Web 3.0, & Metverse.
//             Passionate about technology and constantly learning new skills to stay up-to-date with the latest Innovations.
//         </p>
      
//     </div>
//   )
// }

// export default About

import React from 'react';

const About = () => {
  return (
    <div id="about" className="container pt-32">
      <h2 className="text-4x1 md:text-5x1" data-aos="zoom-in-up">About Me</h2>
      <p className="text-gray-500 pt-4" data-aos="zoom-in-up">
        I am a student of GIAIC, pursuing a course in Artificial Intelligence, Web 3.0, and Metaverse.
        Passionate about technology and constantly learning new skills to stay up-to-date with the latest innovations.
      </p>
      <div className="mt-8">
        <h3 className="text-2x1">Skills:</h3>
        <ul className="list-disc pl-4">
          <li>Artificial Intelligence</li>
          <li>Web 3.0</li>
          <li>Metaverse</li>
        </ul>
      </div>
    </div>
  )
}

export default About