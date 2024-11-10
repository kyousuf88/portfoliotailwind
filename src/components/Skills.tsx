import React from "react"

const Skills = () => {
  return (
    <div id="skills" className="container pt-32">
        <div className="grid md:grid-cols-2 gap-20 items-center">
            <div data-aos="zoom-in-up">
                <h2 className="text-4x1 md:text-5x1" >Technologis I work with</h2>
                <p className="text-gray-500 pt-2">
                    I have asolid foundation in web development,specializing in HTML,CSS and JavaScript.My experience extend to using framework like React and Next.js to create dynamic and user-friendly applications.I'm also proficient in Tailwind CSS for efficient styling and design. with apassion for learning,I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.
                               </p>
            </div>
            <div>
                <div className="grid grid-cols-2 text-accent text-3x1 sm:text-4x1">
                    <div className="space-y-2">
                        <h2 data-aos="zoom-in-up">Typescript</h2>
                        <h2 data-aos="zoom-in-up">React.js</h2>
                        <h2 data-aos="zoom-in-up">Next.js</h2>

                    </div>
                    <div className="space-y-2">
                        <h2 data-aos="zoom-in-up">Tailwind</h2>
                        <h2 data-aos="zoom-in-up">CSS</h2>
                        <h2 data-aos="zoom-in-up">Node.js</h2>

                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
