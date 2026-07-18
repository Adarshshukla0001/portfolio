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
              Hi, My name is Adarsh Shukla. I am from Pratapgarh, Uttar Pradesh, which is my hometown. For the past two years,
              I have been living in Noida to pursue my higher education.
              <br/><br/>
              Coming to my education, I completed my Diploma in Computer Science and Engineering from Feroze Gandhi Polytechnic,
               Raebareli. Currently, I am pursuing my Bachelor of Technology (B.Tech) in Computer Science and Engineering
              from Noida Institute of Engineering and Technology (NIET), Greater Noida.
              <br/><br/>
              During my academic journey, I completed my Summer Internship at Softpro India Pvt. Ltd. as a Full-Stack Developer.
               During the internship, I worked on real-world web applications and was honored with the Best Performance 
               Award for my dedication and performance.
              <br/>
              <br/>
              Coming to my technical skills, I have hands-on experience with Java, Python, C++, SQL, MySQL, PostgreSQL, 
              MongoDB, SQLite, Django, Spring Boot, HTML, CSS, JavaScript, Bootstrap, React, and Tailwind CSS.
              <br/>
              <br/>
              Talking about my projects, I have developed several applications, including a Portfolio Website, 
              CharchaDesk (Smart Real-Time Chat Application), Incubify(Incubation Discovery Platform), HRMS(Human Resource Management System), School Management System, and Issue 
              Management System. Through these projects, I enhanced my full-stack skills and 
              improve my problem-solving ability.
              <br/>
              <br/>
              Apart from academics, I served as Class Ambassador of the Google Developer Groups at NIET during my 
              second year, where I actively participated in technical events and community activities.
              <br/>
              <br/>
              Coming to my family background, we are a family of five members. My father is a farmer, my mother is a 
              homemaker, and I have two elder sisters. My family has always encouraged me to learn and grow in my career.
              <br/>
              <br/>
              My strengths are that I am a self-motivated, adaptable, and quick learner. I have a strong interest in coding,
               and once I start working on a task, I stay focused until I complete it. I also enjoy learning new technologies
                and working collaboratively with others.
              <br/><br/>
              Talking about my weaknesses, I sometimes spend extra time trying to make my work perfect, which can affect my 
              time management. Another weakness is that I occasionally become so focused on my work that I neglect my
               health, such as eating meals on time or maintaining a proper routine. However, I am actively improving 
               my planning and maintaining a healthier work-life balance.
               <br/><br/>
               My short-term goal is to join a reputed organization where I can enhance my technical skills,
                gain industry experience, and contribute to meaningful projects. My long-term goal is to become a skilled 
                Software Engineer who continuously learns new technologies and takes on greater responsibilities.
                <br/><br/>
                That's all about me.
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