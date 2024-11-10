// import React from 'react'

// const Footer = () => {
//   return (
//     <div className="mt-16 py-6 text-center bg-accent">
//         ©  Kanwal | All rights reserved 2024
      
//     </div>
//   )
// }

// export default Footer

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mt-16 py-6 text-center bg-accent">
      &copy; Kanwal {currentYear} | All rights reserved
    </div>
  )
}

export default Footer