import { skills } from "../data/portfolio"
import { SectionHeading } from "../components/About"

const categories = [...new Set(skills.map((s) => s.category))]


export default function SkillsPage() {

  return (

    <div className="relative min-h-screen pt-24">


      <section className="px-6 py-24">


        <div className="mx-auto max-w-6xl">


          <SectionHeading 
            title="Skills & Expertise" 
            subtitle="Technologies I work with" 
          />



          <div className="mt-14 grid gap-8 md:grid-cols-2">


            {
              categories.map((category)=>(


                <div

                  key={category}

                  className="
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  p-7
                  transition-all duration-300
                  hover:border-violet-500/40
                  hover:-translate-y-1
                  "

                >


                  {/* Category Header */}

                  <div className="flex items-center justify-between">


                    <h3
                      className="
                      text-xl
                      font-semibold
                      text-white
                      "
                    >
                      {category}
                    </h3>



                    <span
                      className="
                      rounded-full
                      bg-violet-500/10
                      px-3 py-1
                      text-xs
                      text-violet-300
                      "
                    >

                      {
                        skills.filter(
                          (s)=>s.category===category
                        ).length
                      }
                      {" "}Skills

                    </span>


                  </div>




                  {/* Skills */}

                  <div className="mt-6 flex flex-wrap gap-3">


                    {
                      skills
                      .filter(
                        (s)=>s.category===category
                      )
                      .map((skill)=>(


                        <div

                          key={skill.name}

                          className="
                          group
                          flex items-center gap-2
                          rounded-xl
                          border border-white/10
                          bg-slate-900/40
                          px-4 py-3
                          transition-all
                          hover:border-violet-400/50
                          hover:bg-violet-500/10
                          "

                        >


                          <div
                            className="
                            h-2 w-2
                            rounded-full
                            bg-violet-400
                            group-hover:scale-125
                            transition
                            "
                          />


                          <span
                            className="
                            text-sm
                            font-medium
                            text-slate-300
                            "
                          >
                            {skill.name}
                          </span>


                        </div>


                      ))
                    }


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