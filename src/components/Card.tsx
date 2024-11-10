// import React from 'react'
// import Image from "next/image";

// interface propsType{
//     title:string;
//     desc:string;
//     img:string;
//     tags:string[];
// }

// const Card:React.FC<propsType> = ({title,desc,img,tags}) => {
//   return (
//     <div className="border border-accent w-[300px] sm:w-[350px]" data-aos="zoom-in-up">
//         <div>
//             <Image className="w-[300px] sm:w-[350px] h-auto"
//             src={img}
//             width={350}
//             height={350}
//             alt={title}
//             />
//         </div>
//         <div className="p-4 space-y-4">
//             <div className="text-4xl font extralight">{title} </div>
//             <div>{desc} </div>
//             <div>
//                 {tags.map((el) => (
//                     <div className="tags" key={el}>
//                       {el}
//                     </div>))}
//             </div>
//         </div>
      
//     </div>
//   )
// }

// export default Card

import React from 'react'
import Image from "next/image";

interface PropsType {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const Card: React.FC<PropsType> = ({ title, description, image, tags }) => {
  return (
    <div className="border border-accent w-[300px] sm:w-[350px]" data-aos="zoom-in-up">
      <div>
        <Image
          className="w-[300px] sm:w-[350px] h-auto"
          src={image}
          width={350}
          height={350}
          alt={title}
          priority
        />
      </div>
      <div className="p-4 space-y-4">
        <h2 className="text-4xl font-extralight">{title}</h2>
        <p>{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span className="tags" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card