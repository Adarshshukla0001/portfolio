import { personal, portfolioStats } from "../data/portfolio"
import { SectionHeading } from "../components/About"


export default function AboutPage() {
  return (
    <div className="relative min-h-screen pt-24">

      {/* About Section */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <SectionHeading 
            title="About Me" 
            subtitle="Know more about my journey" 
          />


          <div className="mt-12 max-w-4xl mx-auto space-y-6">

            <p className="text-lg leading-relaxed text-slate-400">
              Hi, I'm Adarsh Shukla.I am from Pratapgarh, Uttar Pradesh, and I am currently pursuing a Bachelor 
              of Technology (B.Tech) in Computer Science & Engineering.
              <br/><br/>
              Before my B.Tech, I completed my Diploma in Computer Science & Engineering from Feroze Gandhi Polytechnic,
               Raebareli, where I developed a strong foundation in programming and software development.
              <br/>
              To gain practical industry experience, I completed a Summer Internship at Softpro India Pvt. Ltd. as a Django Developer,
               where I worked on building dynamic web applications and gained hands-on experience with Django and modern web 
               development practices.
              <br/>
              <br/>
              I am passionate about Full Stack Development and enjoy building scalable, responsive, and user-friendly web applications.
               My technical expertise includes Java, Spring Boot, React, Vite, Tailwind CSS, Django, Python, MongoDB Atlas, 
               PostgreSQL,SQLite, REST APIs, and Git/GitHub.
              <br/>
              <br/>
              I have developed several projects, including a real-time chat application (CharchaDesk), 
              a personal finance tracker (Finora), an HRMS, a College Management System, an Intelligent 
              Incubation Discovery Platform (Incubify), and my personal developer portfolio.
              <br/>
              <br/>
              I enjoy solving real-world problems through technology, continuously learning new tools and frameworks, 
              and improving my problem-solving skills by working on projects and coding challenges.
              <br/>
              <br/>
              My goal is to become a skilled Software Development Engineer (SDE) and contribute to building innovative,
               high-quality software solutions that make a meaningful impact.
              <br/>
              <br/>

              My development journey focuses on frontend and backend 
              technologies where I work with React.js, Tailwind CSS, Java,
              Spring Boot, REST APIs, and databases. I believe in writing 
              clean, maintainable code and building applications that provide 
              a smooth user experience.

              <br/><br/>

              Apart from development, I actively practice Data Structures 
              and Algorithms to improve my problem-solving abilities. 
              I always look forward to learning new technologies and 
              applying my knowledge through practical projects.
            </p>

          </div>



          {/* Project and Skills Cards */}

<div className="mx-auto mt-16 grid max-w-3xl gap-6 md:grid-cols-2">


  {/* Projects Card */}

  <div
    className="
    rounded-xl 
    border border-white/10
    bg-white/[0.03]
    p-5
    transition-all duration-300
    hover:border-violet-500/40
    hover:-translate-y-1
    "
  >

    <div className="flex items-center justify-between">

      <h3 className="text-xl font-bold text-white">
        My Projects
      </h3>

      

    </div>


    <div className="mt-5">

      <h4 className="text-3xl font-bold text-white">
        {portfolioStats.totalProjects}+
      </h4>

      <p className="mt-1 text-sm text-slate-400">
        Projects built using modern technologies
      </p>

    </div>

  </div>





  {/* Skills Card */}


  <div
    className="
    rounded-xl 
    border border-white/10
    bg-white/[0.03]
    p-5
    transition-all duration-300
    hover:border-violet-500/40
    hover:-translate-y-1
    "
  >

    <div className="flex items-center justify-between">

      <h3 className="text-xl font-bold text-white">
        Technical Skills
      </h3>

    </div>


    <div className="mt-5">

      <h4 className="text-3xl font-bold text-white">
        {portfolioStats.totalSkills}+
      </h4>


      <p className="mt-1 text-sm text-slate-400">
        Technologies and tools I work with
      </p>


    </div>


  </div>


</div>


        </div>

      </section>

            {/* Education Journey */}

      <section className="px-6 pb-24">

        <div className="mx-auto max-w-6xl">


          <h2
            className="
            mb-14 text-center 
            text-3xl font-bold text-white
            "
          >
            Education Journey
          </h2>



          <div className="relative max-w-3xl mx-auto">


            {/* Line */}

            <div
              className="
              absolute left-4 top-0 h-full w-px
              bg-gradient-to-b 
              from-violet-500/50 
              to-transparent
              md:left-1/2
              "
            />



            {
              personal.education.map((edu,index)=>(

                <div
                  key={edu.degree}
                  className={`
                  relative mb-10 pl-12
                  md:w-1/2 md:pl-0

                  ${
                    index % 2 === 0
                    ?
                    "md:pr-12 md:text-right"
                    :
                    "md:ml-auto md:pl-12"
                  }
                  `}
                >


                  {/* Dot */}

                  <div
                    className="
                    absolute left-2.5 top-2
                    h-3 w-3 rounded-full
                    border-2 border-violet-400
                    bg-slate-950
                    md:left-auto
                    "
                    style={
                      index % 2 === 0
                      ?
                      {
                        right:"-6px"
                      }
                      :
                      {
                        left:"-6px"
                      }
                    }
                  />



                  <div
                    className="
                    rounded-xl border 
                    border-white/10
                    bg-white/[0.03]
                    p-6
                    "
                  >

                    <p className="text-sm text-violet-400">
                      {edu.year}
                    </p>


                    <h3
                      className="
                      mt-2 text-xl 
                      font-semibold text-white
                      "
                    >
                      {edu.degree}
                    </h3>


                    <p className="mt-2 text-slate-300">
                      {edu.college}
                    </p>


                    <p className="text-sm text-slate-500">
                      {edu.board} · {edu.location}
                    </p>


                  </div>


                </div>


              ))
            }



          </div>


        </div>


      </section>


    </div>
  )
}



function InfoCard({label,value}){

  return (

    <div
      className="
      rounded-xl 
      border border-white/10
      bg-white/[0.03]
      px-6 py-4
      "
    >

      <p className="text-xs uppercase text-slate-500">
        {label}
      </p>

      <p className="mt-1 text-white font-medium">
        {value}
      </p>

    </div>

  )

}