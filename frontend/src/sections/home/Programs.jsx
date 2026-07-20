import {
  FaLaptopCode,
  FaHeartbeat,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";


const programs = [
  {
    icon: <FaLaptopCode />,
    title: "School of Technology",
    programs: [
      "BSc Information Technology",
      "BSc Computer Science",
      "BSc Information Systems",
    ],
  },


  {
    icon: <FaHeartbeat />,
    title: "School of Health Sciences",
    programs: [
      "Nursing",
      "Public Health",
      "Health Administration",
    ],
  },


  {
    icon: <FaGraduationCap />,
    title: "School of Education",
    programs: [
      "Primary Education",
      "Secondary Education",
      "Educational Management",
    ],
  },


  {
    icon: <FaBriefcase />,
    title: "School of Business",
    programs: [
      "Business Administration",
      "Accounting",
      "Economics",
    ],
  },
];



function Programs() {

  return (

    <section className="py-16 bg-gray-50">


      <div className="max-w-[1280px] mx-auto px-5">


        {/* Section Heading */}

        <div className="text-center mb-12">


          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            Our Academic Programs

          </h2>


          <p className="mt-4 text-gray-600">

            Explore our academic programs designed to prepare
            students for professional success and national development.

          </p>


        </div>



        {/* Program Cards */}

        <div className="grid md:grid-cols-2 gap-8">


          {programs.map((program) => (

            <div
              key={program.title}
              className="
              bg-white
              rounded-xl
              shadow-md
              p-8
              hover:shadow-xl
              transition
              "
            >


              <div className="
              text-green-700
              text-4xl
              mb-5
              "
              >

                {program.icon}

              </div>



              <h3 className="
              text-xl
              font-bold
              mb-5
              "
              >

                {program.title}

              </h3>



              <ul className="space-y-3">


                {program.programs.map((item) => (

                  <li
                    key={item}
                    className="
                    flex
                    items-center
                    gap-2
                    text-gray-600
                    "
                  >

                    <span className="text-green-700">
                      ✓
                    </span>

                    {item}

                  </li>

                ))}


              </ul>



              <button
                className="
                mt-6
                text-green-700
                font-semibold
                hover:underline
                "
              >

                Explore Faculty →

              </button>


            </div>

          ))}


        </div>


      </div>


    </section>

  );

}


export default Programs;